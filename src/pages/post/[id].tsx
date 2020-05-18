import React, { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'

import { RootState } from '@/store'
import { DataProps } from '@/types'
import { thunkedFetch } from '@/store/action'
import Layout from '@/layouts/default'

const Id = () => {
  const dispatch = useDispatch()
  const currentData = useSelector<RootState, DataProps>(
    (state) => state.select
  )
  const router = useRouter()
  const { id } = router.query

  useEffect(() => {
    if (typeof id === 'string') {
      dispatch(thunkedFetch(id))
    }
  }, [thunkedFetch])

  return (
    <>
      <Layout title={currentData.title}>
        {currentData.question}
        {currentData.normal}
        {currentData.abnormal}
        <button onClick={() => console.log(currentData)}>test</button>
      </Layout>
    </>
  )
}

export default Id
