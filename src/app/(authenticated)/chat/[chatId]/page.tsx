'use client'

import { useState, useEffect, useRef } from 'react'
import { Typography, Input, Button, List, Avatar, Space, Upload } from 'antd'
import {
  SendOutlined,
  PictureOutlined,
  FileOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ChatPage() {
  const router = useRouter()
  const params = useParams<{ chatId: string }>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const { mutateAsync: uploadFile } = useUploadPublic()
  const [message, setMessage] = useState('')
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const {
    data: chat,
    isLoading: chatLoading,
    refetch: refetchChat,
  } = Api.chat.findUnique.useQuery({
    where: { id: params.chatId },
    include: {
      messages: { include: { senderUser: true, messageReadReceipts: true } },
    },
  })

  const { mutateAsync: sendMessage } = Api.message.create.useMutation()
  const { mutateAsync: createReadReceipt } =
    Api.messageReadReceipt.create.useMutation()

  useEffect(() => {
    if (chat?.messages) {
      chat.messages.forEach(msg => {
        if (
          msg.senderUserId !== user?.id &&
          !msg.messageReadReceipts.some(receipt => receipt.userId === user?.id)
        ) {
          createReadReceipt({
            data: {
              readTimestamp: new Date().toISOString(),
              messageId: msg.id,
              userId: user?.id || '',
            },
          })
        }
      })
    }
    scrollToBottom()
  }, [chat?.messages])

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleSendMessage = async () => {
    if (!message.trim()) return
    try {
      await sendMessage({
        data: {
          content: message,
          messageType: 'TEXT',
          chatId: params.chatId,
          senderUserId: user?.id || '',
        },
      })
      setMessage('')
      refetchChat()
      enqueueSnackbar('Message sent successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to send message', { variant: 'error' })
    }
  }

  const handleFileUpload = async (
    file: File,
    type: 'IMAGE' | 'FILE' | 'VIDEO',
  ) => {
    try {
      const { url } = await uploadFile({ file })
      await sendMessage({
        data: {
          content: file.name,
          messageType: type,
          mediaUrl: url,
          chatId: params.chatId,
          senderUserId: user?.id || '',
        },
      })
      refetchChat()
      enqueueSnackbar(`${type.toLowerCase()} sent successfully`, {
        variant: 'success',
      })
    } catch (error) {
      enqueueSnackbar(`Failed to send ${type.toLowerCase()}`, {
        variant: 'error',
      })
    }
  }

  if (chatLoading) {
    return <PageLayout layout="narrow">Loading...</PageLayout>
  }

  return (
    <PageLayout layout="narrow">
      <Title level={2}>Chat</Title>
      <Text>
        Communicate with others through text messages and media content.
      </Text>
      <List
        dataSource={chat?.messages}
        renderItem={item => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.senderUser?.pictureUrl} />}
              title={item.senderUser?.name}
              description={
                <Space direction="vertical">
                  {item.messageType === 'TEXT' && <Text>{item.content}</Text>}
                  {item.messageType === 'IMAGE' && (
                    <img
                      src={item.mediaUrl}
                      alt={item.content}
                      style={{ maxWidth: '200px' }}
                    />
                  )}
                  {item.messageType === 'FILE' && (
                    <a
                      href={item.mediaUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.content}
                    </a>
                  )}
                  {item.messageType === 'VIDEO' && (
                    <video controls style={{ maxWidth: '200px' }}>
                      <source src={item.mediaUrl} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  )}
                  <Text type="secondary">
                    {dayjs(item.dateCreated).format('MMM D, YYYY HH:mm')}
                  </Text>
                  {item.messageReadReceipts.length > 0 && (
                    <Text type="secondary">Read</Text>
                  )}
                </Space>
              }
            />
          </List.Item>
        )}
      />
      <div ref={messagesEndRef} />
      <Space.Compact style={{ width: '100%' }}>
        <Input
          value={message}
          onChange={e => setMessage(e.target.value)}
          onPressEnter={handleSendMessage}
          placeholder="Type a message..."
        />
        <Upload
          accept="image/*"
          beforeUpload={file => {
            handleFileUpload(file, 'IMAGE')
            return false
          }}
          showUploadList={false}
        >
          <Button icon={<PictureOutlined />} />
        </Upload>
        <Upload
          accept=".pdf,.doc,.docx,.txt"
          beforeUpload={file => {
            handleFileUpload(file, 'FILE')
            return false
          }}
          showUploadList={false}
        >
          <Button icon={<FileOutlined />} />
        </Upload>
        <Upload
          accept="video/*"
          beforeUpload={file => {
            handleFileUpload(file, 'VIDEO')
            return false
          }}
          showUploadList={false}
        >
          <Button icon={<VideoCameraOutlined />} />
        </Upload>
        <Button
          type="primary"
          icon={<SendOutlined />}
          onClick={handleSendMessage}
        >
          Send
        </Button>
      </Space.Compact>
    </PageLayout>
  )
}
