import React, { useState, useEffect } from 'react'
import { Typography, Card, Radio, Button, Space, message } from 'antd'
import { QuestionCircleOutlined, CheckCircleOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function TakeQuizPage() {
  const { quizId } = useParams()
  const navigate = useNavigate()
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})

  const { data: quiz, isLoading: isQuizLoading } = Api.quiz.findUnique.useQuery(
    {
      where: { id: quizId },
      include: { questions: { include: { choices: true } } },
    },
  )

  const { mutateAsync: createQuizAttempt } =
    Api.quizAttempt.create.useMutation()

  useEffect(() => {
    if (quiz) {
      const initialAnswers: Record<string, string> = {}
      quiz.questions.forEach(question => {
        initialAnswers[question.id] = ''
      })
      setAnswers(initialAnswers)
    }
  }, [quiz])

  if (isQuizLoading) {
    return <PageLayout layout="full-width">Loading...</PageLayout>
  }

  if (!quiz) {
    return <PageLayout layout="full-width">Quiz not found</PageLayout>
  }

  const handleAnswerChange = (questionId: string, choiceId: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: choiceId }))
  }

  const handleNextQuestion = () => {
    if (currentQuestionIndex < quiz.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
    }
  }

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1)
    }
  }

  const handleSubmitQuiz = async () => {
    try {
      const quizAttempt = await createQuizAttempt({
        data: {
          quizId: quiz.id,
          userId: quiz.userId,
          startTime: new Date().toISOString(),
          endTime: new Date().toISOString(),
          quizAttemptAnswers: {
            create: Object.entries(answers).map(([questionId, choiceId]) => ({
              questionId,
              choiceId,
              isCorrect:
                quiz.questions
                  .find(q => q.id === questionId)
                  ?.choices.find(c => c.id === choiceId)?.isCorrect || false,
            })),
          },
        },
      })

      message.success('Quiz submitted successfully!')
      navigate(`/quizzes/${quiz.id}/results`)
    } catch (error) {
      message.error('Failed to submit quiz. Please try again.')
    }
  }

  const currentQuestion = quiz.questions[currentQuestionIndex]

  return (
    <PageLayout layout="full-width">
      <Card style={{ maxWidth: 800, margin: '0 auto' }}>
        <Title level={2}>
          <QuestionCircleOutlined /> Take Quiz
        </Title>
        <Paragraph>
          Answer the following questions to complete the quiz.
        </Paragraph>

        <Title level={4}>
          Question {currentQuestionIndex + 1} of {quiz.questions.length}
        </Title>
        <Paragraph>{currentQuestion.text}</Paragraph>

        {currentQuestion.imageUrl && (
          <img
            src={currentQuestion.imageUrl}
            alt="Question"
            style={{ maxWidth: '100%', marginBottom: 16 }}
          />
        )}

        <Radio.Group
          onChange={e => handleAnswerChange(currentQuestion.id, e.target.value)}
          value={answers[currentQuestion.id]}
        >
          <Space direction="vertical">
            {currentQuestion.choices.map(choice => (
              <Radio key={choice.id} value={choice.id}>
                {choice.text}
              </Radio>
            ))}
          </Space>
        </Radio.Group>

        <div
          style={{
            marginTop: 24,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Button
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            Previous
          </Button>
          {currentQuestionIndex < quiz.questions.length - 1 ? (
            <Button type="primary" onClick={handleNextQuestion}>
              Next
            </Button>
          ) : (
            <Button
              type="primary"
              icon={<CheckCircleOutlined />}
              onClick={handleSubmitQuiz}
            >
              Submit Quiz
            </Button>
          )}
        </div>
      </Card>
    </PageLayout>
  )
}
