import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

import { selectData } from '@/api'
import { RootState } from '@/store'
import { DataProps } from '@/store/types'
import Layout from '@/layouts/default'

const Edit = () => {
  const currentData = useSelector<RootState, DataProps>(state => state.select)
  const [data, setData] = useState<DataProps>({
    title: '',
    question: '',
    normal: '',
    abnormal: ''
  })
  const router = useRouter()
  const { edit } = router.query

  useEffect(() => {
    if (typeof edit === 'string') {
      // selectData(edit)
      //   .then(res => {
      //     setData(res)
      //   })
    }
  }, [setData])

  return (
    <Layout>
      <button onClick={() => console.log(currentData)}>test</button>
    </Layout>
  )
}

export default Edit