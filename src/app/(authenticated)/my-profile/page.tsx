'use client'

import { Typography, Form, Input, Button, Upload, Space, Avatar } from 'antd'
import { UserOutlined, UploadOutlined } from '@ant-design/icons'
import { useState } from 'react'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function MyProfileEditPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [form] = Form.useForm()
  const [imageUrl, setImageUrl] = useState(user?.pictureUrl)

  const { mutateAsync: updateUser } = Api.user.update.useMutation()
  const { mutateAsync: upload } = useUploadPublic()

  const onFinish = async (values: any) => {
    try {
      await updateUser({
        where: { id: user?.id },
        data: {
          name: values.name,
          email: values.email,
          pictureUrl: imageUrl,
        },
      })
      enqueueSnackbar('Profile updated successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to update profile', { variant: 'error' })
    }
  }

  const handleImageUpload = async (options: any) => {
    const { file } = options
    try {
      const result = await upload({ file })
      setImageUrl(result.url)
      enqueueSnackbar('Profile picture uploaded successfully', {
        variant: 'success',
      })
    } catch (error) {
      enqueueSnackbar('Failed to upload profile picture', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>Edit Profile</Title>
        <Paragraph>Update your profile information and picture here.</Paragraph>

        <Form
          form={form}
          layout="vertical"
          onFinish={onFinish}
          initialValues={{
            name: user?.name,
            email: user?.email,
          }}
        >
          <Form.Item>
            <Upload
              name="avatar"
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={false}
              customRequest={handleImageUpload}
            >
              {imageUrl ? (
                <Avatar src={imageUrl} size={100} />
              ) : (
                <div>
                  <UploadOutlined />
                  <div style={{ marginTop: 8 }}>Upload</div>
                </div>
              )}
            </Upload>
          </Form.Item>

          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please input your name!' }]}
          >
            <Input prefix={<UserOutlined />} placeholder="Name" />
          </Form.Item>

          <Form.Item
            name="email"
            label="Email"
            rules={[
              { required: true, message: 'Please input your email!' },
              { type: 'email', message: 'Please enter a valid email!' },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Email" />
          </Form.Item>

          <Form.Item name="status" label="Status Message">
            <Input.TextArea placeholder="What's on your mind?" />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Update Profile
            </Button>
          </Form.Item>
        </Form>
      </Space>
    </PageLayout>
  )
}
