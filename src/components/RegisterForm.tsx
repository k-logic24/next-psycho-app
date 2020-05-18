import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useForm } from 'react-hook-form'

import { FormProps, DataProps } from '@/types'

const RegisterForm: React.FC<FormProps> = ({
  setTitle,
  setQuestion,
  setNormal,
  setAbnormal,
  handleClickAdd,
}) => {
  const [isTitleValidate, setTitleValidate] = useState(false)
  const [isQuestionValidate, setQuestionValidate] = useState(false)
  const [isNormalValidate, setNormalValidate] = useState(false)
  const [isAbnormalValidate, setAbnormalValidate] = useState(false)
  const { register, handleSubmit } = useForm<DataProps>()

  const onSubmit = (data: DataProps) => {
    // validation
    data.title === '' ? setTitleValidate(true) : setTitleValidate(false)
    data.question === ''
      ? setQuestionValidate(true)
      : setQuestionValidate(false)
    data.normal === '' ? setNormalValidate(true) : setNormalValidate(false)
    data.abnormal === ''
      ? setAbnormalValidate(true)
      : setAbnormalValidate(false)

    // 通ったらhandleclickadd
    if (data.title && data.question && data.normal && data.abnormal !== '') {
      handleClickAdd && handleClickAdd()
    }
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group controlId="title">
        <Form.Label className="font-weight-bold">タイトル</Form.Label>
        {isTitleValidate && (
          <span className="text-danger d-inline-block ml-3">
            タイトルを記入してください
          </span>
        )}
        <Form.Control
          ref={register}
          type="text"
          name="title"
          defaultValue=""
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
      </Form.Group>
      <Form.Group controlId="question">
        <Form.Label className="font-weight-bold">内容</Form.Label>
        {isQuestionValidate && (
          <span className="text-danger d-inline-block ml-3">
            内容を記入してください
          </span>
        )}
        <Form.Control
          ref={register}
          as="textarea"
          name="question"
          defaultValue=""
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setQuestion(e.target.value)
          }
        />
      </Form.Group>
      <Form.Group controlId="normal">
        <Form.Label className="font-weight-bold">一般回答</Form.Label>
        {isNormalValidate && (
          <span className="text-danger d-inline-block ml-3">
            一般回答を記入してください
          </span>
        )}
        <Form.Control
          ref={register}
          as="textarea"
          name="normal"
          defaultValue=""
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setNormal(e.target.value)
          }
        />
      </Form.Group>
      <Form.Group controlId="abnormal">
        <Form.Label className="font-weight-bold">サイコパス回答</Form.Label>
        {isAbnormalValidate && (
          <span className="text-danger d-inline-block ml-3">
            サイコパス回答を記入してください
          </span>
        )}
        <Form.Control
          ref={register}
          as="textarea"
          name="abnormal"
          defaultValue=""
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setAbnormal(e.target.value)
          }
        />
      </Form.Group>
      <Button type="submit" variant="primary">
        登録する
      </Button>
    </Form>
  )
}

export default RegisterForm
