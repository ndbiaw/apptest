import React from 'react'
import { Typography, Card, List, Space, Tag } from 'antd'
import { CheckCircleOutlined, CloseCircleOutlined } from '@ant-design/icons'
const { Title, Text, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function QuizResultsPage() {
  const { quizId } = useParams()

  const { data: quizAttempt, isLoading } = Api.quizAttempt.findFirst.useQuery({
    where: { quizId },
    include: {
      quiz: true,
      quizAttemptAnswers: {
        include: {
          question: {
            include: {
              choices: true,
            },
          },
          choice: true,
        },
      },
    },
    orderBy: { createdAt: 'desc' },
  })

  if (isLoading) {
    return <PageLayout layout="full-width">Loading...</PageLayout>
  }

  if (!quizAttempt) {
    return <PageLayout layout="full-width">No quiz attempt found.</PageLayout>
  }

  const totalQuestions = quizAttempt.quizAttemptAnswers.length
  const correctAnswers = quizAttempt.quizAttemptAnswers.filter(
    answer => answer.isCorrect,
  ).length
  const score = ((correctAnswers / totalQuestions) * 100).toFixed(2)

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: '800px', margin: '0 auto', padding: '24px' }}>
        <Title level={2}>Quiz Results</Title>
        <Paragraph>
          Here are your results for the quiz "{quizAttempt.quiz.title}".
        </Paragraph>

        <Card style={{ marginBottom: '24px' }}>
          <Space direction="vertical" size="large">
            <div>
              <Text strong>Start Time:</Text>{' '}
              {dayjs(quizAttempt.startTime).format('MMMM D, YYYY HH:mm:ss')}
            </div>
            <div>
              <Text strong>End Time:</Text>{' '}
              {dayjs(quizAttempt.endTime).format('MMMM D, YYYY HH:mm:ss')}
            </div>
            <div>
              <Text strong>Score:</Text> {score}%
            </div>
            <div>
              <Text strong>
                Correct Answers: {correctAnswers} / {totalQuestions}
              </Text>
            </div>
          </Space>
        </Card>

        <Title level={3}>Question Review</Title>
        <List
          dataSource={quizAttempt.quizAttemptAnswers}
          renderItem={(answer, index) => (
            <List.Item>
              <Card
                title={`Question ${index + 1}`}
                extra={
                  answer.isCorrect ? (
                    <Tag color="success" icon={<CheckCircleOutlined />}>
                      Correct
                    </Tag>
                  ) : (
                    <Tag color="error" icon={<CloseCircleOutlined />}>
                      Incorrect
                    </Tag>
                  )
                }
                style={{ width: '100%' }}
              >
                <Paragraph>{answer.question.text}</Paragraph>
                <Paragraph>
                  <Text strong>Your Answer:</Text> {answer.choice.text}
                </Paragraph>
                {!answer.isCorrect && (
                  <Paragraph>
                    <Text strong>Correct Answer:</Text>{' '}
                    {answer.question.choices.find(choice => choice.isCorrect)
                      ?.text || 'N/A'}
                  </Paragraph>
                )}
              </Card>
            </List.Item>
          )}
        />
      </div>
    </PageLayout>
  )
}
