import React, { useEffect, useState } from 'react'
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
  const currentData = useSelector<RootState, DataProps>(state => state.select)
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
    let newData: NewDataProps = {
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
  }

  return (
    <Layout title={`「${currentData.title}」の編集`}>
      <EditForm
        setTitle={setTitle}
        setQuestion={setQuestion}
        setNormal={setNormal}
        setAbnormal={setAbnormal}
        handleClickEdit={handleClickEdit}
      />
    </Layout>
  )
}

export default Edit