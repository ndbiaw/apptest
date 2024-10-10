import React, { useState, useEffect } from 'react'
import { Typography, Form, Input, Button, Space, Card, message } from 'antd'
import { PlusOutlined, MinusCircleOutlined } from '@ant-design/icons'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function EditQuizPage() {
  const { organizationId, quizId } = useParams()
  const navigate = useNavigate()
  const [form] = Form.useForm()

  const {
    data: quiz,
    isLoading,
    refetch,
  } = Api.quiz.findUnique.useQuery({
    where: { id: quizId },
    include: { questions: { include: { choices: true } } },
  })

  const { mutateAsync: updateQuiz } = Api.quiz.update.useMutation()
  const { mutateAsync: createQuestion } = Api.question.create.useMutation()
  const { mutateAsync: updateQuestion } = Api.question.update.useMutation()
  const { mutateAsync: deleteQuestion } = Api.question.delete.useMutation()
  const { mutateAsync: createChoice } = Api.choice.create.useMutation()
  const { mutateAsync: updateChoice } = Api.choice.update.useMutation()
  const { mutateAsync: deleteChoice } = Api.choice.delete.useMutation()

  useEffect(() => {
    if (quiz) {
      form.setFieldsValue({
        title: quiz.title,
        description: quiz.description,
        questions: quiz.questions.map(q => ({
          id: q.id,
          text: q.text,
          choices: q.choices.map(c => ({
            id: c.id,
            text: c.text,
            isCorrect: c.isCorrect,
          })),
        })),
      })
    }
  }, [quiz, form])

  const onFinish = async (values: any) => {
    try {
      await updateQuiz({
        where: { id: quizId },
        data: {
          title: values.title,
          description: values.description,
        },
      })

      for (const question of values.questions) {
        if (question.id) {
          await updateQuestion({
            where: { id: question.id },
            data: { text: question.text },
          })
        } else {
          const newQuestion = await createQuestion({
            data: {
              text: question.text,
              quizId: quizId!,
              order: 0,
            },
          })
          question.id = newQuestion.id
        }

        for (const choice of question.choices) {
          if (choice.id) {
            await updateChoice({
              where: { id: choice.id },
              data: {
                text: choice.text,
                isCorrect: choice.isCorrect,
              },
            })
          } else {
            await createChoice({
              data: {
                text: choice.text,
                isCorrect: choice.isCorrect,
                questionId: question.id,
                order: 0,
              },
            })
          }
        }
      }

      message.success('Quiz updated successfully')
      refetch()
    } catch (error) {
      console.error('Error updating quiz:', error)
      message.error('Failed to update quiz')
    }
  }

  if (isLoading) {
    return <PageLayout layout="full-width">Loading...</PageLayout>
  }

  return (
    <PageLayout layout="full-width">
      <Card style={{ maxWidth: 800, margin: '0 auto' }}>
        <Title level={2}>Edit Quiz</Title>
        <Text>Refine your quiz by editing questions and answers.</Text>
        <Form
          form={form}
          onFinish={onFinish}
          layout="vertical"
          style={{ marginTop: 20 }}
        >
          <Form.Item
            name="title"
            label="Quiz Title"
            rules={[{ required: true }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="description" label="Quiz Description">
            <Input.TextArea />
          </Form.Item>
          <Form.List name="questions">
            {(fields, { add, remove }) => (
              <>
                {fields.map((field, index) => (
                  <Card key={field.key} style={{ marginBottom: 16 }}>
                    <Form.Item
                      {...field}
                      label={`Question ${index + 1}`}
                      required={false}
                      style={{ marginBottom: 0 }}
                    >
                      <Form.Item
                        name={[field.name, 'text']}
                        validateTrigger={['onChange', 'onBlur']}
                        rules={[
                          {
                            required: true,
                            message:
                              'Please input the question text or delete this field.',
                          },
                        ]}
                        noStyle
                      >
                        <Input.TextArea
                          style={{ width: '90%', marginRight: 8 }}
                        />
                      </Form.Item>
                      <MinusCircleOutlined
                        className="dynamic-delete-button"
                        onClick={() => {
                          remove(field.name)
                          const questionId = form.getFieldValue([
                            'questions',
                            field.name,
                            'id',
                          ])
                          if (questionId) {
                            deleteQuestion({ where: { id: questionId } })
                          }
                        }}
                      />
                    </Form.Item>
                    <Form.List name={[field.name, 'choices']}>
                      {(
                        choiceFields,
                        { add: addChoice, remove: removeChoice },
                      ) => (
                        <>
                          {choiceFields.map((choiceField, choiceIndex) => (
                            <Space
                              key={choiceField.key}
                              style={{ display: 'flex', marginBottom: 8 }}
                              align="baseline"
                            >
                              <Form.Item
                                {...choiceField}
                                name={[choiceField.name, 'text']}
                                validateTrigger={['onChange', 'onBlur']}
                                rules={[
                                  {
                                    required: true,
                                    message:
                                      'Please input the choice or delete this field.',
                                  },
                                ]}
                                noStyle
                              >
                                <Input
                                  placeholder="Choice text"
                                  style={{ width: '60%' }}
                                />
                              </Form.Item>
                              <Form.Item
                                {...choiceField}
                                name={[choiceField.name, 'isCorrect']}
                                valuePropName="checked"
                                noStyle
                              >
                                <Button
                                  type={
                                    form.getFieldValue([
                                      'questions',
                                      field.name,
                                      'choices',
                                      choiceField.name,
                                      'isCorrect',
                                    ])
                                      ? 'primary'
                                      : 'default'
                                  }
                                  onClick={() => {
                                    const currentValue = form.getFieldValue([
                                      'questions',
                                      field.name,
                                      'choices',
                                      choiceField.name,
                                      'isCorrect',
                                    ])
                                    form.setFieldsValue({
                                      questions: {
                                        [field.name]: {
                                          choices: {
                                            [choiceField.name]: {
                                              isCorrect: !currentValue,
                                            },
                                          },
                                        },
                                      },
                                    })
                                  }}
                                >
                                  {form.getFieldValue([
                                    'questions',
                                    field.name,
                                    'choices',
                                    choiceField.name,
                                    'isCorrect',
                                  ])
                                    ? 'Correct'
                                    : 'Incorrect'}
                                </Button>
                              </Form.Item>
                              <MinusCircleOutlined
                                onClick={() => {
                                  removeChoice(choiceField.name)
                                  const choiceId = form.getFieldValue([
                                    'questions',
                                    field.name,
                                    'choices',
                                    choiceField.name,
                                    'id',
                                  ])
                                  if (choiceId) {
                                    deleteChoice({ where: { id: choiceId } })
                                  }
                                }}
                              />
                            </Space>
                          ))}
                          <Form.Item>
                            <Button
                              type="dashed"
                              onClick={() => addChoice()}
                              block
                              icon={<PlusOutlined />}
                            >
                              Add Choice
                            </Button>
                          </Form.Item>
                        </>
                      )}
                    </Form.List>
                  </Card>
                ))}
                <Form.Item>
                  <Button
                    type="dashed"
                    onClick={() => add()}
                    block
                    icon={<PlusOutlined />}
                  >
                    Add Question
                  </Button>
                </Form.Item>
              </>
            )}
          </Form.List>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save Changes
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </PageLayout>
  )
}
