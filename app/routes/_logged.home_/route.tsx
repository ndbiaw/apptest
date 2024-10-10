import React, { useState } from 'react'
import { Typography, List, Button, Card, Row, Col, Space, Modal } from 'antd'
import {
  PlusOutlined,
  GlobalOutlined,
  UserOutlined,
  RedoOutlined,
  SwapOutlined,
} from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function HomePage() {
  const { user } = useUserContext()
  const navigate = useNavigate()
  const [showPublicQuizzes, setShowPublicQuizzes] = useState(false)

  const { data: myQuizzes, isLoading: isLoadingMyQuizzes } =
    Api.quiz.findMany.useQuery({
      where: { userId: user?.id },
    })

  const { data: publicQuizzes, isLoading: isLoadingPublicQuizzes } =
    Api.quiz.findMany.useQuery({
      where: { isPublic: true },
    })

  const { data: quizAttempts, isLoading: isLoadingQuizAttempts } =
    Api.quizAttempt.findMany.useQuery({
      where: { userId: user?.id },
      include: {
        quiz: true,
        quizAttemptAnswers: { include: { question: true } },
      },
    })

  const handleCreateQuiz = () => {
    navigate('/organizations/create/quizzes/create')
  }

  const handleTakeQuiz = (quizId: string) => {
    navigate(`/quizzes/${quizId}`)
  }

  const handleViewResults = (quizId: string) => {
    navigate(`/quizzes/${quizId}/results`)
  }

  const handleRedoIncorrectQuestions = (quizId: string) => {
    // Implement the logic to redo incorrect questions
    Modal.info({
      title: 'Redo Incorrect Questions',
      content:
        'This feature is not yet implemented. It will allow you to redo only the questions you answered incorrectly.',
    })
  }

  const handleShuffleQuiz = (quizId: string) => {
    // Implement the logic to shuffle quiz questions and answers
    Modal.info({
      title: 'Shuffle Quiz',
      content:
        'This feature is not yet implemented. It will randomize the order of questions and answers in the quiz.',
    })
  }

  const renderQuizList = (quizzes: any[], isPublic: boolean) => (
    <List
      grid={{ gutter: 16, xs: 1, sm: 2, md: 3, lg: 3, xl: 4, xxl: 4 }}
      dataSource={quizzes}
      renderItem={quiz => (
        <List.Item>
          <Card
            title={quiz.title}
            extra={isPublic ? <GlobalOutlined /> : <UserOutlined />}
            actions={[
              <Button onClick={() => handleTakeQuiz(quiz.id)}>
                Take Quiz
              </Button>,
              <Button
                onClick={() => handleShuffleQuiz(quiz.id)}
                icon={<SwapOutlined />}
              />,
            ]}
          >
            <Text>{quiz.description}</Text>
          </Card>
        </List.Item>
      )}
    />
  )

  return (
    <PageLayout layout="full-width">
      <Row justify="center">
        <Col xs={24} sm={22} md={20} lg={18} xl={16}>
          <Space direction="vertical" size="large" style={{ width: '100%' }}>
            <Title level={2}>Quiz Management Dashboard</Title>
            <Text>
              Manage your quizzes, take public quizzes, and review your quiz
              attempts.
            </Text>

            <Space>
              <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={handleCreateQuiz}
              >
                Create New Quiz
              </Button>
              <Button onClick={() => setShowPublicQuizzes(!showPublicQuizzes)}>
                {showPublicQuizzes
                  ? 'Show My Quizzes'
                  : 'Browse Public Quizzes'}
              </Button>
            </Space>

            {showPublicQuizzes ? (
              <>
                <Title level={3}>Public Quizzes</Title>
                {isLoadingPublicQuizzes ? (
                  <Text>Loading public quizzes...</Text>
                ) : (
                  renderQuizList(publicQuizzes || [], true)
                )}
              </>
            ) : (
              <>
                <Title level={3}>My Quizzes</Title>
                {isLoadingMyQuizzes ? (
                  <Text>Loading your quizzes...</Text>
                ) : (
                  renderQuizList(myQuizzes || [], false)
                )}
              </>
            )}

            <Title level={3}>Recent Quiz Attempts</Title>
            {isLoadingQuizAttempts ? (
              <Text>Loading quiz attempts...</Text>
            ) : (
              <List
                dataSource={quizAttempts}
                renderItem={attempt => (
                  <List.Item
                    actions={[
                      <Button onClick={() => handleViewResults(attempt.quizId)}>
                        View Results
                      </Button>,
                      <Button
                        onClick={() =>
                          handleRedoIncorrectQuestions(attempt.quizId)
                        }
                        icon={<RedoOutlined />}
                      >
                        Redo Incorrect
                      </Button>,
                    ]}
                  >
                    <List.Item.Meta
                      title={attempt.quiz?.title}
                      description={`Score: ${attempt.score || 'N/A'}`}
                    />
                  </List.Item>
                )}
              />
            )}
          </Space>
        </Col>
      </Row>
    </PageLayout>
  )
}
