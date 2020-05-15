import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { fetchData } from '@/api'
import { RootState } from '@/store'

import Layout from '@/layouts/default'

const List = () => {
  const [data, setData] = useState(null)
  const currentData = useSelector((state: RootState) => state.update)

  useEffect(() => {
    fetchData()
      .then(res => setData(res))
  }, [])

  return (
    <Layout title="問題一覧" description={"問題から一般回答とサイコパスの思考を知ることができます。"}>
      <button onClick={() => console.log(data)}>test</button>
    </Layout>
  )
}

export default List