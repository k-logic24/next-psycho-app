import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import Layout from '@/layouts/default'
import { addAction } from '@/store/action'
import RegisterForm from '@/components/RegisterForm'
import { FormProps } from '@/types'

const Register: React.FC<FormProps> = () => {
  const dispatch = useDispatch()
  const [title, setTitle] = useState('')
  const [question, setQuestion] = useState('')
  const [normal, setNormal] = useState('')
  const [abnormal, setAbnormal] = useState('')

  // 登録内容をアクションに引き渡す
  const newData = {
    title: title,
    question: question,
    normal: normal,
    abnormal: abnormal,
  }
  const handleClickAdd = () => {
    alert('登録しました')

    dispatch(addAction(newData))
  }

  return (
    <Layout title="問題登録" description="各項目を記入して登録が可能です。">
      <div className="content-box">
        <RegisterForm
          setTitle={setTitle}
          setQuestion={setQuestion}
          setNormal={setNormal}
          setAbnormal={setAbnormal}
          handleClickAdd={handleClickAdd}
        />
      </div>
    </Layout>
  )
}

export default Register