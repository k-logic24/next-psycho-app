import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  Form,
  Button,
} from 'react-bootstrap'

import Layout from '@/layouts/default'
import { addAction } from '@/store/action'

const Home: React.FC = () => {
  const dispatch = useDispatch()
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

  // 登録内容をアクションに引き渡す
  const newData = {
    title: title,
    question: question,
    normal: normal,
    abnormal: abnormal,
  }
  const handleClickAdd = () => dispatch(addAction(newData))

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
        <Form.Label className="font-weight-bold">内容</Form.Label>
        <Form.Control
          as="textarea"
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChangeData(e.target.value, 'question')}
        />
      </Form.Group>
      <Form.Group controlId="normal">
        <Form.Label className="font-weight-bold">一般回答</Form.Label>
        <Form.Control
          as="textarea"
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChangeData(e.target.value, 'normal')}
        />
      </Form.Group>
      <Form.Group controlId="abnormal">
        <Form.Label className="font-weight-bold">サイコパス回答</Form.Label>
        <Form.Control
          as="textarea"
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChangeData(e.target.value, 'abnormal')}
        />
      </Form.Group>
      <Button
        variant="primary"
        onClick={handleClickAdd}
      >
        登録する
      </Button>
    </Layout>
  )
}

export default Home