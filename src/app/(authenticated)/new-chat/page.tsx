'use client'

import { useState } from 'react'
import { Typography, Input, Button, List, Checkbox, Space } from 'antd'
import {
  UserOutlined,
  UsergroupAddOutlined,
  MessageOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function NewChatPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [searchTerm, setSearchTerm] = useState('')
  const [selectedContacts, setSelectedContacts] = useState<string[]>([])

  const { data: contacts, isLoading } = Api.contact.findMany.useQuery({
    where: { userId: user?.id },
    include: { contactUser: true },
  })

  const { mutateAsync: createChat } = Api.chat.create.useMutation()
  const { mutateAsync: createChatParticipant } =
    Api.chatParticipant.create.useMutation()

  const filteredContacts = contacts?.filter(contact =>
    contact.contactUser?.name?.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleContactSelect = (contactId: string) => {
    setSelectedContacts(prev =>
      prev.includes(contactId)
        ? prev.filter(id => id !== contactId)
        : [...prev, contactId],
    )
  }

  const handleStartChat = async () => {
    if (selectedContacts.length === 0) {
      enqueueSnackbar('Please select at least one contact', {
        variant: 'error',
      })
      return
    }

    try {
      const newChat = await createChat({
        data: {
          type: selectedContacts.length === 1 ? 'INDIVIDUAL' : 'GROUP',
          creatorUserId: user?.id || '',
        },
      })

      await Promise.all([
        createChatParticipant({
          data: { chatId: newChat.id, userId: user?.id || '', role: 'ADMIN' },
        }),
        ...selectedContacts.map(contactId =>
          createChatParticipant({
            data: { chatId: newChat.id, userId: contactId, role: 'MEMBER' },
          }),
        ),
      ])

      enqueueSnackbar('Chat created successfully', { variant: 'success' })
      router.push(`/chat/${newChat.id}`)
    } catch (error) {
      enqueueSnackbar('Failed to create chat', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" style={{ width: '100%' }} size="large">
        <Title level={2}>Start a New Chat</Title>
        <Text>Create a new individual or group chat with your contacts.</Text>

        <Input
          placeholder="Search contacts"
          prefix={<UserOutlined />}
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />

        <List
          loading={isLoading}
          dataSource={filteredContacts}
          renderItem={contact => (
            <List.Item>
              <Checkbox
                onChange={() =>
                  handleContactSelect(contact.contactUser?.id || '')
                }
                checked={selectedContacts.includes(
                  contact.contactUser?.id || '',
                )}
              >
                {contact.contactUser?.name}
              </Checkbox>
            </List.Item>
          )}
        />

        <Space>
          <Button
            type="primary"
            icon={<MessageOutlined />}
            onClick={handleStartChat}
            disabled={selectedContacts.length === 0}
          >
            Start Chat
          </Button>
          <Button
            icon={<UsergroupAddOutlined />}
            onClick={handleStartChat}
            disabled={selectedContacts.length < 2}
          >
            Create Group
          </Button>
        </Space>
      </Space>
    </PageLayout>
  )
}
