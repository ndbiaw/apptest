import { Typography, Button, Space, Modal, message } from 'antd'
import { DeleteOutlined, ShareAltOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function QuizDetailsPage() {
  const { organizationId, quizId } = useParams()
  const navigate = useNavigate()
  const { user } = useUserContext()

  const { data: quiz, isLoading } = Api.quiz.findUnique.useQuery({
    where: { id: quizId },
    include: { user: true },
  })

  const { mutateAsync: deleteQuiz } = Api.quiz.delete.useMutation()

  const handleDelete = () => {
    Modal.confirm({
      title: 'Are you sure you want to delete this quiz?',
      content: 'This action cannot be undone.',
      okText: 'Yes, delete',
      okType: 'danger',
      cancelText: 'No, cancel',
      onOk: async () => {
        try {
          await deleteQuiz({ where: { id: quizId } })
          message.success('Quiz deleted successfully')
          navigate(`/organizations/${organizationId}`)
        } catch (error) {
          message.error('Failed to delete quiz')
        }
      },
    })
  }

  const handleShare = () => {
    const shareableLink = `${window.location.origin}/quizzes/${quizId}`
    navigator.clipboard.writeText(shareableLink)
    message.success('Shareable link copied to clipboard')
  }

  if (isLoading) {
    return <PageLayout layout="full-width">Loading...</PageLayout>
  }

  if (!quiz) {
    return <PageLayout layout="full-width">Quiz not found</PageLayout>
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '24px' }}>
        <Title level={2}>Quiz Details</Title>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          <div>
            <Title level={3}>{quiz.title}</Title>
            <Paragraph>{quiz.description}</Paragraph>
          </div>
          <div>
            <Paragraph>
              <strong>Created by:</strong> {quiz.user?.name || 'Unknown'}
            </Paragraph>
            <Paragraph>
              <strong>Created at:</strong>{' '}
              {dayjs(quiz.createdAt).format('MMMM D, YYYY h:mm A')}
            </Paragraph>
            <Paragraph>
              <strong>Last updated:</strong>{' '}
              {dayjs(quiz.updatedAt).format('MMMM D, YYYY h:mm A')}
            </Paragraph>
          </div>
          <Space>
            <Button
              type="primary"
              icon={<ShareAltOutlined />}
              onClick={handleShare}
            >
              Share Quiz
            </Button>
            {user?.id === quiz.userId && (
              <Button
                type="primary"
                danger
                icon={<DeleteOutlined />}
                onClick={handleDelete}
              >
                Delete Quiz
              </Button>
            )}
          </Space>
        </Space>
      </div>
    </PageLayout>
  )
}
