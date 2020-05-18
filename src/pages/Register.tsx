import React, { useState } from 'react'
import { useRouter } from 'next/router'

import Layout from '@/layouts/default'
import RegisterForm from '@/components/RegisterForm'
import { FormProps } from '@/types'
import { addData } from '@/api'

const Register: React.FC<FormProps> = () => {
  const router = useRouter()
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
    addData(newData)
    alert('登録しました')

    router.push('/list')
  }

  return (
    <Layout title="問題登録">
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
