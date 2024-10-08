'use client'

import { Typography, Switch, Select, Radio, Form, Button, Space } from 'antd'
import { BellOutlined, LockOutlined, BgColorsOutlined } from '@ant-design/icons'
import { useState, useEffect } from 'react'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function SettingsPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [notificationPreferences, setNotificationPreferences] = useState({
    email: true,
    push: true,
    inApp: true,
  })

  const [privacySettings, setPrivacySettings] = useState({
    profileVisibility: 'public',
    contactPermission: 'everyone',
  })

  const [appTheme, setAppTheme] = useState('light')

  const { mutateAsync: updateUserSetting } =
    Api.userSetting.update.useMutation()
  const { mutateAsync: createUserSetting } =
    Api.userSetting.create.useMutation()
  const { data: userSettings, refetch: refetchUserSettings } =
    Api.userSetting.findMany.useQuery({
      where: { userId: user?.id },
    })

  useEffect(() => {
    if (userSettings) {
      userSettings.forEach(setting => {
        if (setting.settingName?.startsWith('notification_')) {
          const key = setting.settingName.replace('notification_', '')
          setNotificationPreferences(prev => ({
            ...prev,
            [key]: setting.settingValue === 'true',
          }))
        } else if (setting.settingName?.startsWith('privacy_')) {
          const key = setting.settingName.replace('privacy_', '')
          setPrivacySettings(prev => ({ ...prev, [key]: setting.settingValue }))
        } else if (setting.settingName === 'app_theme') {
          setAppTheme(setting.settingValue || 'light')
        }
      })
    }
  }, [userSettings])

  const updateOrCreateSetting = async (
    settingName: string,
    settingValue: string,
  ) => {
    const existingSetting = userSettings?.find(
      s => s.settingName === settingName,
    )
    if (existingSetting) {
      await updateUserSetting({
        where: { id: existingSetting.id },
        data: { settingValue },
      })
    } else {
      await createUserSetting({
        data: {
          userId: user?.id || '',
          settingName,
          settingValue,
        },
      })
    }
    await refetchUserSettings()
  }

  const handleNotificationChange = async (key: string, checked: boolean) => {
    setNotificationPreferences(prev => ({ ...prev, [key]: checked }))
    try {
      await updateOrCreateSetting(`notification_${key}`, checked.toString())
      enqueueSnackbar('Notification preferences updated', {
        variant: 'success',
      })
    } catch (error) {
      enqueueSnackbar('Failed to update notification preferences', {
        variant: 'error',
      })
    }
  }

  const handlePrivacyChange = async (key: string, value: string) => {
    setPrivacySettings(prev => ({ ...prev, [key]: value }))
    try {
      await updateOrCreateSetting(`privacy_${key}`, value)
      enqueueSnackbar('Privacy settings updated', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to update privacy settings', { variant: 'error' })
    }
  }

  const handleThemeChange = async (value: string) => {
    setAppTheme(value)
    try {
      await updateOrCreateSetting('app_theme', value)
      enqueueSnackbar('App theme updated', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to update app theme', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Settings</Title>
      <Paragraph>
        Customize your app experience and manage your preferences.
      </Paragraph>

      <Form layout="vertical">
        <Title level={4}>
          <BellOutlined /> Notification Preferences
        </Title>
        <Form.Item label="Email Notifications">
          <Switch
            checked={notificationPreferences.email}
            onChange={checked => handleNotificationChange('email', checked)}
          />
        </Form.Item>
        <Form.Item label="Push Notifications">
          <Switch
            checked={notificationPreferences.push}
            onChange={checked => handleNotificationChange('push', checked)}
          />
        </Form.Item>
        <Form.Item label="In-App Notifications">
          <Switch
            checked={notificationPreferences.inApp}
            onChange={checked => handleNotificationChange('inApp', checked)}
          />
        </Form.Item>

        <Title level={4}>
          <LockOutlined /> Privacy Settings
        </Title>
        <Form.Item label="Profile Visibility">
          <Select
            value={privacySettings.profileVisibility}
            onChange={value => handlePrivacyChange('profileVisibility', value)}
            style={{ width: '100%' }}
          >
            <Select.Option value="public">Public</Select.Option>
            <Select.Option value="contacts">Contacts Only</Select.Option>
            <Select.Option value="private">Private</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Who can contact me">
          <Select
            value={privacySettings.contactPermission}
            onChange={value => handlePrivacyChange('contactPermission', value)}
            style={{ width: '100%' }}
          >
            <Select.Option value="everyone">Everyone</Select.Option>
            <Select.Option value="contacts">Contacts Only</Select.Option>
            <Select.Option value="nobody">Nobody</Select.Option>
          </Select>
        </Form.Item>

        <Title level={4}>
          <BgColorsOutlined /> App Theme and Appearance
        </Title>
        <Form.Item label="Theme">
          <Radio.Group
            value={appTheme}
            onChange={e => handleThemeChange(e.target.value)}
          >
            <Radio.Button value="light">Light</Radio.Button>
            <Radio.Button value="dark">Dark</Radio.Button>
            <Radio.Button value="system">System</Radio.Button>
          </Radio.Group>
        </Form.Item>

        <Form.Item>
          <Space>
            <Button type="primary" onClick={() => router.push('/home')}>
              Save Changes
            </Button>
            <Button onClick={() => router.push('/home')}>Cancel</Button>
          </Space>
        </Form.Item>
      </Form>
    </PageLayout>
  )
}
