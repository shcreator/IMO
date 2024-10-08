'use client'

import { Typography, Card, Avatar, Space, Spin } from 'antd'
import { UserOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function UserProfileViewPage() {
  const router = useRouter()
  const params = useParams<{ userId: string }>()
  const { user: currentUser } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const { data: user, isLoading } = Api.user.findUnique.useQuery({
    where: { id: params.userId },
  })

  if (isLoading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  if (!user) {
    enqueueSnackbar('User not found', { variant: 'error' })
    router.push('/home')
    return null
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>User Profile</Title>
      <Paragraph>View details about this user's profile.</Paragraph>

      <Card>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <Space align="center" size="large">
            <Avatar size={64} src={user.pictureUrl} icon={<UserOutlined />} />
            <Title level={3}>{user.name}</Title>
          </Space>

          <Space direction="vertical">
            <Text strong>Email:</Text>
            <Text>{user.email}</Text>
          </Space>

          <Space direction="vertical">
            <Text strong>Status:</Text>
            <Text>{user.status}</Text>
          </Space>

          {user.id !== currentUser?.id && (
            <Space>
              <Text strong>Actions:</Text>
              {/* Add buttons for actions like "Add Contact" or "Send Message" here */}
            </Space>
          )}
        </Space>
      </Card>
    </PageLayout>
  )
}
