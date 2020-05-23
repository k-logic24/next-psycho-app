import React, {useEffect, useState} from 'react'
import Head from 'next/head'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

import { editData } from '@/api'
import { DataProps, NewDataProps, FormProps } from '@/types'
import { RootState } from '@/store'
import Layout from '@/layouts/default'
import EditForm from '@/components/EditForm'

const Edit: React.FC<FormProps> = () => {
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

  const handleClickEdit = () => {
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
      <Head>
        <title>psycho-app | {title}編集</title>
        <meta name="description" content="サイコパスアプリ 問題編集ページ"/>
      </Head>
      <Layout
        title={`「${title}」の編集`}
      >
        <div className="content-box">
          <EditForm
            title={title}
            question={question}
            normal={normal}
            abnormal={abnormal}
            setTitle={setTitle}
            setQuestion={setQuestion}
            setNormal={setNormal}
            setAbnormal={setAbnormal}
            handleClickEdit={handleClickEdit}
          />
        </div>
      </Layout>
    </>
  )
}

export default Edit
