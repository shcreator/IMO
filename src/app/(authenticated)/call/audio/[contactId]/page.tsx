'use client'

import { useState, useEffect } from 'react'
import { Button, Space, Typography, Row, Col } from 'antd'
import {
  PhoneOutlined,
  AudioMutedOutlined,
  AudioOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function AudioCallPage() {
  const router = useRouter()
  const params = useParams<{ contactId: string }>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [isCalling, setIsCalling] = useState(false)
  const [isInCall, setIsInCall] = useState(false)
  const [isMuted, setIsMuted] = useState(false)

  const { data: contact, isLoading } = Api.user.findUnique.useQuery({
    where: { id: params.contactId },
  })
  const { mutateAsync: createCall } = Api.call.create.useMutation()

  useEffect(() => {
    // Simulating incoming call
    const timer = setTimeout(() => {
      if (!isCalling && !isInCall) {
        setIsCalling(true)
      }
    }, 5000)

    return () => clearTimeout(timer)
  }, [isCalling, isInCall])

  const handleInitiateCall = async () => {
    try {
      await createCall({
        data: {
          callType: 'AUDIO',
          callStatus: 'ONGOING',
          callerUserId: user?.id || '',
          calleeUserId: params.contactId,
        },
      })
      setIsInCall(true)
      enqueueSnackbar('Call initiated successfully', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to initiate call', { variant: 'error' })
    }
  }

  const handleAnswerCall = () => {
    setIsCalling(false)
    setIsInCall(true)
    enqueueSnackbar('Call answered', { variant: 'success' })
  }

  const handleEndCall = () => {
    setIsInCall(false)
    setIsCalling(false)
    enqueueSnackbar('Call ended', { variant: 'info' })
  }

  const handleToggleMute = () => {
    setIsMuted(!isMuted)
    enqueueSnackbar(isMuted ? 'Microphone unmuted' : 'Microphone muted', {
      variant: 'info',
    })
  }

  if (isLoading) {
    return (
      <PageLayout layout="narrow">
        <Text>Loading...</Text>
      </PageLayout>
    )
  }

  return (
    <PageLayout layout="narrow">
      <Row justify="center" align="middle" style={{ minHeight: '80vh' }}>
        <Col xs={24} sm={20} md={16} lg={12}>
          <Space
            direction="vertical"
            size="large"
            style={{ width: '100%', textAlign: 'center' }}
          >
            <Title level={2}>Audio Call</Title>
            <Text>Contact: {contact?.name}</Text>
            {!isInCall && !isCalling && (
              <Button
                type="primary"
                icon={<PhoneOutlined />}
                onClick={handleInitiateCall}
              >
                Initiate Call
              </Button>
            )}
            {isCalling && (
              <Space direction="vertical">
                <Text>Incoming call from {contact?.name}</Text>
                <Button type="primary" onClick={handleAnswerCall}>
                  Answer
                </Button>
                <Button danger onClick={handleEndCall}>
                  Decline
                </Button>
              </Space>
            )}
            {isInCall && (
              <Space direction="vertical">
                <Text>In call with {contact?.name}</Text>
                <Space>
                  <Button
                    icon={isMuted ? <AudioMutedOutlined /> : <AudioOutlined />}
                    onClick={handleToggleMute}
                  >
                    {isMuted ? 'Unmute' : 'Mute'}
                  </Button>
                  <Button danger onClick={handleEndCall}>
                    End Call
                  </Button>
                </Space>
              </Space>
            )}
          </Space>
        </Col>
      </Row>
    </PageLayout>
  )
}
