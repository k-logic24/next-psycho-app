import React, {useState} from 'react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { Form, Button } from 'react-bootstrap'
import { useDocument } from '@nandorojo/swr-firestore'

import { DataProps, NewDataProps } from '@/types'
import Layout from '@/layouts/default'

const Edit = () => {
  // routerからidをとってくる
  const router = useRouter()
  const { id } = router.query

  // firestoreで該当idのデータ
  const {
    data,
    update,
  } = useDocument<DataProps>(`information/${id}`, { listen: true })

  const [title, setTitle] = useState(data?.title)
  const [question, setQuestion] = useState(data?.question)
  const [normal, setNormal] = useState(data?.normal)
  const [abnormal, setAbnormal] = useState(data?.abnormal)

  const handleClickEdit = async() => {
    if (title && question && normal && abnormal) {
      const newData: NewDataProps = {
        title: title,
        question: question,
        normal: normal,
        abnormal: abnormal,
      }
      alert('更新しました')

      await update(newData)
      router.push('/list')
    }
  }

  return (
    <>
      <Head>
        <title>psycho-app | {data?.title}編集</title>
        <meta name="description" content="サイコパスアプリ 問題編集ページ"/>
      </Head>
      <Layout
        title={`「${data?.title}」の編集`}
      >
        <div className="content-box">
        <Form.Group controlId="title">
          <Form.Label className="font-weight-bold">タイトル</Form.Label>
            <Form.Control
              type="text"
              defaultValue={data?.title}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setTitle(e.target.value)
              }
            />
          </Form.Group>
          <Form.Group controlId="question">
            <Form.Label className="font-weight-bold">内容</Form.Label>
            <Form.Control
              as="textarea"
              defaultValue={data?.question}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setQuestion(e.target.value)
              }
            />
          </Form.Group>
          <Form.Group controlId="normal">
            <Form.Label className="font-weight-bold">一般回答</Form.Label>
            <Form.Control
              as="textarea"
              defaultValue={data?.normal}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setNormal(e.target.value)
              }
            />
          </Form.Group>
          <Form.Group controlId="abnormal">
            <Form.Label className="font-weight-bold">サイコパス回答</Form.Label>
            <Form.Control
              as="textarea"
              defaultValue={data?.abnormal}
              onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                setAbnormal(e.target.value)
              }
            />
          </Form.Group>
          <Button variant="primary" onClick={handleClickEdit}>
            完了
          </Button>
        </div>
      </Layout>
    </>
  )
}

export default Edit
