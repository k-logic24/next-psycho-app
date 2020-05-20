import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'
import { Form, Button } from 'react-bootstrap'

import { DataProps, NewDataProps } from '@/types'
import { RootState } from '@/store'
import { editData } from '@/api'

const EditForm = () => {
  const router = useRouter()
  const { id } = router.query
  const currentData = useSelector<RootState, DataProps>(
    (state) => state.select
  )
  const [title, setTitle] = useState('')
  const [question, setQuestion] = useState('')
  const [normal, setNormal] = useState('')
  const [abnormal, setAbnormal] = useState('')

  useEffect(() => {
    setTitle(currentData.title)
    setQuestion(currentData.question)
    setNormal(currentData.normal)
    setAbnormal(currentData.abnormal)
  }, [currentData])

  const handleClickComplete = () => {
    const newData: NewDataProps = {
      title: title,
      question: question,
      normal: normal,
      abnormal: abnormal,
      id: id
    }
    editData(newData)

    alert('更新しました')
    router.push('/list')
  }

  return (
    <>
      <Form.Group controlId="title">
        <Form.Label className="font-weight-bold">タイトル</Form.Label>
        <Form.Control
          type="text"
          defaultValue={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
      </Form.Group>
      <Form.Group controlId="question">
        <Form.Label className="font-weight-bold">内容</Form.Label>
        <Form.Control
          as="textarea"
          defaultValue={question}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setQuestion(e.target.value)
          }
        />
      </Form.Group>
      <Form.Group controlId="normal">
        <Form.Label className="font-weight-bold">一般回答</Form.Label>
        <Form.Control
          as="textarea"
          defaultValue={normal}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setNormal(e.target.value)
          }
        />
      </Form.Group>
      <Form.Group controlId="abnormal">
        <Form.Label className="font-weight-bold">サイコパス回答</Form.Label>
        <Form.Control
          as="textarea"
          defaultValue={abnormal}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
            setAbnormal(e.target.value)
          }
        />
      </Form.Group>
      <Button variant="primary" onClick={handleClickComplete}>
        完了
      </Button>
    </>
  )
}

export default EditForm
