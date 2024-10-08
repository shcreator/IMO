'use client'

import { useState, useEffect } from 'react'
import { Typography, Button, Space, Row, Col } from 'antd'
import {
  VideoCameraOutlined,
  AudioOutlined,
  AudioMutedOutlined,
  VideoCameraAddOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function VideoCallPage() {
  const router = useRouter()
  const params = useParams<{ contactId: string }>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [isCallActive, setIsCallActive] = useState(false)
  const [isCameraOn, setIsCameraOn] = useState(true)
  const [isMicOn, setIsMicOn] = useState(true)

  const { data: contact, isLoading } = Api.user.findUnique.useQuery({
    where: { id: params.contactId },
  })
  const { mutateAsync: createCall } = Api.call.create.useMutation()

  useEffect(() => {
    // Simulating incoming call
    const timer = setTimeout(() => {
      if (!isCallActive) {
        enqueueSnackbar('Incoming video call...', { variant: 'info' })
      }
    }, 5000)

    return () => clearTimeout(timer)
  }, [isCallActive])

  const handleStartCall = async () => {
    try {
      await createCall({
        data: {
          callType: 'VIDEO',
          startTime: new Date().toISOString(),
          callStatus: 'ACTIVE',
          callerUser: { connect: { id: user?.id } },
          calleeUser: { connect: { id: params.contactId } },
        },
      })
      setIsCallActive(true)
      enqueueSnackbar('Video call started', { variant: 'success' })
    } catch (error) {
      enqueueSnackbar('Failed to start video call', { variant: 'error' })
    }
  }

  const handleEndCall = () => {
    setIsCallActive(false)
    enqueueSnackbar('Video call ended', { variant: 'info' })
  }

  const toggleCamera = () => setIsCameraOn(!isCameraOn)
  const toggleMic = () => setIsMicOn(!isMicOn)

  if (isLoading) {
    return <PageLayout layout="narrow">Loading...</PageLayout>
  }

  return (
    <PageLayout layout="narrow">
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        <Title level={2}>Video Call</Title>
        <Text>You are in a video call with {contact?.name}</Text>

        <Row
          justify="center"
          align="middle"
          style={{
            minHeight: '300px',
            background: '#f0f0f0',
            borderRadius: '8px',
          }}
        >
          {isCallActive ? (
            <Col>
              <VideoCameraOutlined style={{ fontSize: '64px' }} />
              <Text>Video call in progress</Text>
            </Col>
          ) : (
            <Col>
              <VideoCameraAddOutlined style={{ fontSize: '64px' }} />
              <Text>Start a video call</Text>
            </Col>
          )}
        </Row>

        <Row justify="center" gutter={16}>
          <Col>
            <Button
              type="primary"
              icon={<VideoCameraOutlined />}
              onClick={isCallActive ? handleEndCall : handleStartCall}
              danger={isCallActive}
            >
              {isCallActive ? 'End Call' : 'Start Call'}
            </Button>
          </Col>
          <Col>
            <Button
              icon={
                isCameraOn ? (
                  <VideoCameraOutlined />
                ) : (
                  <VideoCameraAddOutlined />
                )
              }
              onClick={toggleCamera}
              disabled={!isCallActive}
            >
              {isCameraOn ? 'Turn Off Camera' : 'Turn On Camera'}
            </Button>
          </Col>
          <Col>
            <Button
              icon={isMicOn ? <AudioOutlined /> : <AudioMutedOutlined />}
              onClick={toggleMic}
              disabled={!isCallActive}
            >
              {isMicOn ? 'Mute Mic' : 'Unmute Mic'}
            </Button>
          </Col>
        </Row>
      </Space>
    </PageLayout>
  )
}
