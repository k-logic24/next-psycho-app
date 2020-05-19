import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

import { DataProps, NewDataProps } from '@/types'
import { RootState } from '@/store'
import { thunkedFetch } from '@/store/action'
import Layout from '@/layouts/default'
import EditForm from '@/components/EditForm'
import { editData } from '@/api'

const Edit = () => {
  const dispatch = useDispatch()
  const currentData = useSelector<RootState, DataProps>(
    (state) => state.select
  )
  const router = useRouter()
  const { id } = router.query

  const [title, setTitle] = useState('')
  const [question, setQuestion] = useState('')
  const [normal, setNormal] = useState('')
  const [abnormal, setAbnormal] = useState('')

  useEffect(() => {
    if (typeof id === 'string') {
      dispatch(thunkedFetch(id))
    }
  }, [thunkedFetch])

  const handleClickEdit = async () => {
    const newData: NewDataProps = {
      id: id,
    }
    if (title !== '') newData.title = title
    if (question !== '') newData.question = question
    if (normal !== '') newData.normal = normal
    if (abnormal !== '') newData.abnormal = abnormal
    editData(newData)

    if (typeof id === 'string') {
      dispatch(thunkedFetch(id))
    }
    alert('更新しました')

    router.push('/list')
  }

  return (
    <>
      <Head>
        <title>psycho-app | {currentData.title}編集</title>
        <meta name="description" content="サイコパスアプリ 問題編集ページ"/>
      </Head>
      <Layout
        title={`「${currentData.title}」の編集`}
      >
        <div className="content-box">
          <EditForm
            currentData={currentData}
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
