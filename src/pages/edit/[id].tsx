import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useRouter } from 'next/router'

import { RootState } from '@/store'
import { DataProps } from '@/store/types'
import { thunkedFetch } from '@/store/action'
import Layout from '@/layouts/default'

const Edit = () => {
  const dispatch = useDispatch()
  const currentData = useSelector<RootState, DataProps>(state => state.select)
  const router = useRouter()
  const { edit } = router.query

  useEffect(() => {
    if (typeof edit === 'string') {
      dispatch(thunkedFetch(edit))
    }
  }, [thunkedFetch])

  return (
    <Layout>
      <button onClick={() => console.log(currentData)}>test</button>
    </Layout>
  )
}

export default Edit