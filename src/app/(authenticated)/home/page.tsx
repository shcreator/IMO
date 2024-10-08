'use client'

import { Typography, List, Avatar, Button, Row, Col, Space } from 'antd'
import {
  MessageOutlined,
  PhoneOutlined,
  UserAddOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  // Fetch recent chats
  const { data: recentChats, isLoading: isLoadingChats } =
    Api.chat.findMany.useQuery({
      where: {
        chatParticipants: {
          some: {
            userId: user?.id,
          },
        },
      },
      include: {
        chatParticipants: {
          include: {
            user: true,
          },
        },
        messages: {
          orderBy: {
            dateCreated: 'desc',
          },
          take: 1,
        },
      },
      orderBy: {
        dateUpdated: 'desc',
      },
      take: 5,
    })

  // Fetch online contacts
  const { data: onlineContacts, isLoading: isLoadingContacts } =
    Api.contact.findMany.useQuery({
      where: {
        userId: user?.id,
        contactUser: {
          userSettings: {
            some: {
              settingName: 'onlineStatus',
              settingValue: 'online',
            },
          },
        },
      },
      include: {
        contactUser: true,
      },
    })

  const handleStartChat = (contactId: string) => {
    router.push(`/chat/${contactId}`)
  }

  const handleStartCall = (contactId: string) => {
    router.push(`/call/audio/${contactId}`)
  }

  const handleNewChat = () => {
    router.push('/new-chat')
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>Welcome to Your Chat Dashboard</Title>
        <Text>
          Quickly access your recent conversations and see who's online.
        </Text>

        <Row gutter={[16, 16]}>
          <Col xs={24} md={12}>
            <Title level={4}>Recent Chats</Title>
            <List
              loading={isLoadingChats}
              dataSource={recentChats}
              renderItem={chat => {
                const otherParticipant = chat.chatParticipants.find(
                  p => p.userId !== user?.id,
                )?.user
                const lastMessage = chat.messages[0]
                return (
                  <List.Item
                    key={chat.id}
                    onClick={() => router.push(`/chat/${chat.id}`)}
                    style={{ cursor: 'pointer' }}
                  >
                    <List.Item.Meta
                      avatar={<Avatar src={otherParticipant?.pictureUrl} />}
                      title={otherParticipant?.name}
                      description={
                        <Text ellipsis style={{ maxWidth: 200 }}>
                          {lastMessage?.content || 'No messages yet'}
                        </Text>
                      }
                    />
                    <Text type="secondary">
                      {dayjs(chat.dateUpdated).format('MMM D, HH:mm')}
                    </Text>
                  </List.Item>
                )
              }}
            />
          </Col>
          <Col xs={24} md={12}>
            <Title level={4}>Online Contacts</Title>
            <List
              loading={isLoadingContacts}
              dataSource={onlineContacts}
              renderItem={contact => (
                <List.Item
                  key={contact.id}
                  actions={[
                    <Button
                      icon={<MessageOutlined />}
                      onClick={() => handleStartChat(contact.contactUserId)}
                    >
                      Chat
                    </Button>,
                    <Button
                      icon={<PhoneOutlined />}
                      onClick={() => handleStartCall(contact.contactUserId)}
                    >
                      Call
                    </Button>,
                  ]}
                >
                  <List.Item.Meta
                    avatar={<Avatar src={contact.contactUser?.pictureUrl} />}
                    title={contact.contactUser?.name}
                  />
                </List.Item>
              )}
            />
          </Col>
        </Row>

        <Row justify="center">
          <Button
            type="primary"
            icon={<UserAddOutlined />}
            onClick={handleNewChat}
            size="large"
          >
            Start New Chat
          </Button>
        </Row>
      </Space>
    </PageLayout>
  )
}
