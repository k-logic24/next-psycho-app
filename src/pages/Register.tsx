import React, { useState } from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import { Form, Button } from 'react-bootstrap'
import { useCollection } from '@nandorojo/swr-firestore'

import Layout from '@/layouts/default'
import { FormProps, DataProps, NewDataProps } from '@/types'

const Register: React.FC<FormProps> = () => {
  const [isTitleValidate, setTitleValidate] = useState(false)
  const [isQuestionValidate, setQuestionValidate] = useState(false)
  const [isNormalValidate, setNormalValidate] = useState(false)
  const [isAbnormalValidate, setAbnormalValidate] = useState(false)
  const { register, handleSubmit } = useForm<DataProps>()

  const { add } = useCollection<NewDataProps>('information')
  const router = useRouter()
  const [title, setTitle] = useState('')
  const [question, setQuestion] = useState('')
  const [normal, setNormal] = useState('')
  const [abnormal, setAbnormal] = useState('')

  // 登録内容をアクションに引き渡す
  const newData: NewDataProps = {
    title: title,
    question: question,
    normal: normal,
    abnormal: abnormal,
  }
  const handleClickAdd = () => {
    // @ts-ignore
    add(newData)

    router.push('/list')
    alert('登録しました')
  }

  // validate
  const onSubmit = (data: DataProps) => {
    // // validation
    // data.title === '' ? setTitleValidate(true) : setTitleValidate(false)
    // data.question === ''
    //   ? setQuestionValidate(true)
    //   : setQuestionValidate(false)
    // data.normal === '' ? setNormalValidate(true) : setNormalValidate(false)
    // data.abnormal === ''
    //   ? setAbnormalValidate(true)
    //   : setAbnormalValidate(false)

    // // 通ったらhandleclickadd
    // if (data.title && data.question && data.normal && data.abnormal !== '') {
    //   handleClickAdd && handleClickAdd()
    // }

    handleClickAdd()
  }

  return (
    <>
      <Head>
      <title>psycho-app | 問題登録</title>
      <meta name="description" content="サイコパスアプリ 問題登録ページ"/>
      </Head>
      <Layout title="問題登録">
        <div className="content-box">
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
        </div>
      </Layout>
    </>
  )
}

export default Register
