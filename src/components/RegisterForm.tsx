import React from 'react'
import {
  Form,
  Button,
} from 'react-bootstrap'

import {FormProps} from '@/types'

const RegisterForm: React.FC<FormProps> = ({
  setTitle,
  setQuestion,
  setNormal,
  setAbnormal,
  handleClickAdd,
}) => {
  return (
    <>
      <Form.Group controlId="title">
        <Form.Label className="font-weight-bold">タイトル</Form.Label>
        <Form.Control
          type="text"
          name="title"
          defaultValue=""
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="question">
        <Form.Label className="font-weight-bold">内容</Form.Label>
        <Form.Control
          as="textarea"
          name="question"
          defaultValue=""
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setQuestion(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="normal">
        <Form.Label className="font-weight-bold">一般回答</Form.Label>
        <Form.Control
          as="textarea"
          name="normal"
          defaultValue=""
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setNormal(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="abnormal">
        <Form.Label className="font-weight-bold">サイコパス回答</Form.Label>
        <Form.Control
          as="textarea"
          name="abnormal"
          defaultValue=""
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setAbnormal(e.target.value)}
        />
      </Form.Group>
      <Button
        variant="primary"
        onClick={handleClickAdd}
      >
      登録する
      </Button>
    </>
  )
}

export default RegisterForm