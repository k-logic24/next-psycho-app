import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/router'

import { DataProps } from '@/store/types'
import { selectData } from '@/api'
import Layout from '@/layouts/default'

const Id = () => {
  const [data, setData] = useState<DataProps>({
    title: '',
    question: '',
    normal: '',
    abnormal: ''
  })
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    if (typeof id === 'string') {
      selectData(id)
        .then(res => {
          console.log(res)
          setData(res)
        })
    }
  }, [setData])

  return (
    <>
      <Layout title={data.title}>
        {data.question}
        {data.normal}
        {data.abnormal}
        <button onClick={() => console.log(data)}>test</button>
      </Layout>
    </>
  )
}

export default Id