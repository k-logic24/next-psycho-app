import React, { useState } from 'react'
import {
  Form,
  Button,
} from 'react-bootstrap'

import Layout from '@/layouts/default'

const Home = () => {
  const [title, setTitle] = useState('')
  const [question, setQuestion] = useState('')
  const [normal, setNormal] = useState('')
  const [abnormal, setAbnormal] = useState('')

  const handleChangeData = (value: string, target: string) => {
    switch (target) {
      case 'title':
        setTitle(value)
        break
      case 'question':
        setQuestion(value)
        break
      case 'normal':
        setNormal(value)
        break
      case 'abnormal':
        setAbnormal(value)
        break
    }
  }

  const handleClickUpload = () => {
    const data = {
      title: title,
      question: question,
      normal: normal,
      abnormal: abnormal,
    }

    console.log(data)
  }

  return (
    <Layout title="問題登録" description="各項目を記入して登録が可能です。">
      <Form.Group controlId="title">
        <Form.Label className="font-weight-bold">題名</Form.Label>
        <Form.Control
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => handleChangeData(e.target.value, 'title')}
        />
      </Form.Group>
      <Form.Group controlId="question">
        <Form.Label className="font-weight-bold">題名</Form.Label>
        <Form.Control
          as="textarea"
          rows="5"
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChangeData(e.target.value, 'question')}
        />
      </Form.Group>
      <Form.Group controlId="normal">
        <Form.Label className="font-weight-bold">一般回答</Form.Label>
        <Form.Control
          as="textarea"
          rows="5"
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChangeData(e.target.value, 'normal')}
        />
      </Form.Group>
      <Form.Group controlId="abnormal">
        <Form.Label className="font-weight-bold">サイコパス回答</Form.Label>
        <Form.Control
          as="textarea"
          rows="5"
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChangeData(e.target.value, 'abnormal')}
        />
      </Form.Group>
      <Button
        variant="primary"
        onClick={handleClickUpload}
      >
        登録する
      </Button>
    </Layout>
  )
}

export default Home