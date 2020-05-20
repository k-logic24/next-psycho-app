import React from 'react'
import Head from 'next/head'
import { useSelector, useDispatch } from 'react-redux'

import { DataProps, NewDataProps } from '@/types'
import { RootState } from '@/store'
import Layout from '@/layouts/default'
import EditForm from '@/components/EditForm'

const Edit = () => {
  const currentData = useSelector<RootState, DataProps>(
    (state) => state.select
  )

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
          <EditForm />
        </div>
      </Layout>
    </>
  )
}

export default Edit
