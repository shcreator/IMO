'use client'

import { useState } from 'react'
import {
  Typography,
  List,
  Input,
  Button,
  Space,
  Card,
  Avatar,
  Modal,
} from 'antd'
import {
  UserOutlined,
  SearchOutlined,
  CheckOutlined,
  CloseOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ContactsPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [searchQuery, setSearchQuery] = useState('')

  const { data: contacts, refetch: refetchContacts } =
    Api.contact.findMany.useQuery({
      where: { userId: user?.id },
      include: { contactUser: true },
    })

  const { data: contactRequests, refetch: refetchRequests } =
    Api.contactRequest.findMany.useQuery({
      where: { toUserId: user?.id, status: 'PENDING' },
      include: { fromUser: true },
    })

  const { data: searchResults } = Api.user.findMany.useQuery({
    where: {
      OR: [
        { name: { contains: searchQuery, mode: 'insensitive' } },
        { email: { contains: searchQuery, mode: 'insensitive' } },
      ],
      NOT: { id: user?.id },
    },
  })

  const { mutateAsync: sendContactRequest } =
    Api.contactRequest.create.useMutation()
  const { mutateAsync: acceptContactRequest } =
    Api.contactRequest.update.useMutation()
  const { mutateAsync: declineContactRequest } =
    Api.contactRequest.delete.useMutation()

  const handleSearch = (value: string) => {
    setSearchQuery(value)
  }

  const handleSendRequest = async (userId: string) => {
    try {
      await sendContactRequest({
        data: {
          fromUserId: user?.id || '',
          toUserId: userId,
          status: 'PENDING',
        },
      })
      enqueueSnackbar('Contact request sent successfully', {
        variant: 'success',
      })
    } catch (error) {
      enqueueSnackbar('Failed to send contact request', { variant: 'error' })
    }
  }

  const handleAcceptRequest = async (requestId: string) => {
    try {
      await acceptContactRequest({
        where: { id: requestId },
        data: { status: 'ACCEPTED' },
      })
      refetchContacts()
      refetchRequests()
      enqueueSnackbar('Contact request accepted', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to accept contact request', { variant: 'error' })
    }
  }

  const handleDeclineRequest = async (requestId: string) => {
    try {
      await declineContactRequest({ where: { id: requestId } })
      refetchRequests()
      enqueueSnackbar('Contact request declined', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to decline contact request', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>Contacts</Title>
        <Text>Manage your contacts and connect with friends.</Text>

        <Card title="My Contacts">
          <List
            dataSource={contacts}
            renderItem={contact => (
              <List.Item>
                <List.Item.Meta
                  avatar={
                    <Avatar
                      icon={<UserOutlined />}
                      src={contact.contactUser?.pictureUrl}
                    />
                  }
                  title={contact.contactUser?.name}
                  description={contact.contactUser?.email}
                />
                <Button
                  onClick={() =>
                    router.push(`/chat/${contact.contactUser?.id}`)
                  }
                >
                  Chat
                </Button>
              </List.Item>
            )}
          />
        </Card>

        <Card title="Contact Requests">
          <List
            dataSource={contactRequests}
            renderItem={request => (
              <List.Item
                actions={[
                  <Button
                    key="accept"
                    type="primary"
                    icon={<CheckOutlined />}
                    onClick={() => handleAcceptRequest(request.id)}
                  >
                    Accept
                  </Button>,
                  <Button
                    key="decline"
                    danger
                    icon={<CloseOutlined />}
                    onClick={() => handleDeclineRequest(request.id)}
                  >
                    Decline
                  </Button>,
                ]}
              >
                <List.Item.Meta
                  avatar={
                    <Avatar
                      icon={<UserOutlined />}
                      src={request.fromUser?.pictureUrl}
                    />
                  }
                  title={request.fromUser?.name}
                  description={request.fromUser?.email}
                />
              </List.Item>
            )}
          />
        </Card>

        <Card title="Search for New Contacts">
          <Space direction="vertical" size="middle" style={{ width: '100%' }}>
            <Input
              placeholder="Search by name or email"
              prefix={<SearchOutlined />}
              onChange={e => handleSearch(e.target.value)}
            />
            <List
              dataSource={searchResults}
              renderItem={result => (
                <List.Item
                  actions={[
                    <Button
                      key="add"
                      onClick={() => handleSendRequest(result.id)}
                    >
                      Add Contact
                    </Button>,
                  ]}
                >
                  <List.Item.Meta
                    avatar={
                      <Avatar icon={<UserOutlined />} src={result.pictureUrl} />
                    }
                    title={result.name}
                    description={result.email}
                  />
                </List.Item>
              )}
            />
          </Space>
        </Card>
      </Space>
    </PageLayout>
  )
}
