'use client'

import { useState, useEffect } from 'react'
import { Typography, Input, Button, List, Avatar, Space, Spin } from 'antd'
import { SendOutlined, UserOutlined, PictureOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function GroupChatPage() {
  const router = useRouter()
  const params = useParams<{ groupId: string }>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [message, setMessage] = useState('')
  const [file, setFile] = useState<File | null>(null)
  const { mutateAsync: upload } = useUploadPublic()

  const {
    data: chat,
    isLoading: chatLoading,
    refetch: refetchChat,
  } = Api.chat.findUnique.useQuery({
    where: { id: params.groupId },
    include: {
      chatParticipants: { include: { user: true } },
      messages: { include: { senderUser: true } },
    },
  })

  const { mutateAsync: sendMessage } = Api.message.create.useMutation()

  useEffect(() => {
    if (
      chat &&
      !chat.chatParticipants.some(
        participant => participant.userId === user?.id,
      )
    ) {
      enqueueSnackbar('You are not a member of this group chat.', {
        variant: 'error',
      })
      router.push('/home')
    }
  }, [chat, user, router])

  const handleSendMessage = async () => {
    if (!message && !file) return

    try {
      let mediaUrl = ''
      if (file) {
        const uploadResult = await upload({ file })
        mediaUrl = uploadResult.url
      }

      await sendMessage({
        data: {
          content: message,
          mediaUrl,
          messageType: file ? 'MEDIA' : 'TEXT',
          chat: { connect: { id: params.groupId } },
          senderUser: { connect: { id: user?.id } },
        },
      })

      setMessage('')
      setFile(null)
      refetchChat()
      enqueueSnackbar('Message sent successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to send message', { variant: 'error' })
    }
  }

  if (chatLoading) {
    return (
      <PageLayout layout="narrow">
        <Spin size="large" />
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Group Chat: {chat?.type}</Title>
      <Text>Communicate with multiple people in this group chat.</Text>

      <Space
        direction="vertical"
        size="large"
        style={{ width: '100%', marginTop: 20 }}
      >
        <List
          header={<Title level={4}>Group Members</Title>}
          dataSource={chat?.chatParticipants}
          renderItem={participant => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={participant.user?.pictureUrl}
                    icon={<UserOutlined />}
                  />
                }
                title={participant.user?.name}
              />
            </List.Item>
          )}
        />

        <List
          header={<Title level={4}>Messages</Title>}
          dataSource={chat?.messages}
          renderItem={message => (
            <List.Item>
              <List.Item.Meta
                avatar={
                  <Avatar
                    src={message.senderUser?.pictureUrl}
                    icon={<UserOutlined />}
                  />
                }
                title={message.senderUser?.name}
                description={
                  <>
                    <Text>{message.content}</Text>
                    {message.mediaUrl && (
                      <div>
                        <img
                          src={message.mediaUrl}
                          alt="Media"
                          style={{ maxWidth: '200px', marginTop: '10px' }}
                        />
                      </div>
                    )}
                    <div>
                      <Text type="secondary">
                        {dayjs(message.dateCreated).format('YYYY-MM-DD HH:mm')}
                      </Text>
                    </div>
                  </>
                }
              />
            </List.Item>
          )}
        />

        <Space.Compact style={{ width: '100%' }}>
          <Input
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Type your message..."
            onPressEnter={handleSendMessage}
          />
          <input
            type="file"
            onChange={e => setFile(e.target.files?.[0] || null)}
            style={{ display: 'none' }}
            id="fileInput"
          />
          <Button
            icon={<PictureOutlined />}
            onClick={() => document.getElementById('fileInput')?.click()}
          >
            {file ? 'File selected' : 'Add Media'}
          </Button>
          <Button
            type="primary"
            icon={<SendOutlined />}
            onClick={handleSendMessage}
          >
            Send
          </Button>
        </Space.Compact>
      </Space>
    </PageLayout>
  )
}
