import React, { useState } from 'react'
import { Typography, Form, Input, Upload, Button, message } from 'antd'
import { UploadOutlined, FileTextOutlined } from '@ant-design/icons'
const { Title, Paragraph } = Typography
import { useUserContext } from '@/core/context'
import dayjs from 'dayjs'
import { useLocation, useNavigate, useParams } from '@remix-run/react'
import { useUploadPublic } from '@/plugins/upload/client'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function CreateQuizPage() {
  const [form] = Form.useForm()
  const [fileList, setFileList] = useState<any[]>([])
  const navigate = useNavigate()
  const { organizationId } = useParams()
  const { user } = useUserContext()
  const { mutateAsync: uploadFile } = useUploadPublic()
  const createQuizMutation = Api.quiz.create.useMutation()

  const handleUpload = async (file: File) => {
    try {
      const { url } = await uploadFile({ file })
      return url
    } catch (error) {
      console.error('Error uploading file:', error)
      message.error('Failed to upload file')
      return null
    }
  }

  const onFinish = async (values: any) => {
    if (fileList.length === 0) {
      message.error('Please upload a .docx file')
      return
    }

    try {
      const docxFileUrl = await handleUpload(fileList[0].originFileObj)
      if (!docxFileUrl) return

      await createQuizMutation.mutateAsync({
        data: {
          title: values.title,
          description: values.description,
          isPublic: false,
          docxFileUrl,
          userId: user?.id || '',
          organizationId: organizationId || '',
        },
      })

      message.success('Quiz created successfully')
      navigate(`/organizations/${organizationId}/quizzes`)
    } catch (error) {
      console.error('Error creating quiz:', error)
      message.error('Failed to create quiz')
    }
  }

  const beforeUpload = (file: File) => {
    const isDocx =
      file.type ===
      'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    if (!isDocx) {
      message.error('You can only upload .docx files!')
    }
    return isDocx
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 600, margin: '0 auto', padding: '24px' }}>
        <Title level={2}>Create a New Quiz</Title>
        <Paragraph>
          Upload a .docx file with images to automatically create a quiz.
          Provide a title and description for your new quiz.
        </Paragraph>

        <Form form={form} onFinish={onFinish} layout="vertical">
          <Form.Item
            name="title"
            label="Quiz Title"
            rules={[
              { required: true, message: 'Please input the quiz title!' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="description"
            label="Quiz Description"
            rules={[
              { required: true, message: 'Please input the quiz description!' },
            ]}
          >
            <Input.TextArea rows={4} />
          </Form.Item>

          <Form.Item
            name="docxFile"
            label="Upload .docx File"
            rules={[{ required: true, message: 'Please upload a .docx file!' }]}
          >
            <Upload
              beforeUpload={beforeUpload}
              fileList={fileList}
              onChange={({ fileList }) => setFileList(fileList)}
              maxCount={1}
            >
              <Button icon={<UploadOutlined />}>Select File</Button>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              icon={<FileTextOutlined />}
            >
              Generate Quiz
            </Button>
          </Form.Item>
        </Form>
      </div>
    </PageLayout>
  )
}
