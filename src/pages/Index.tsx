import React from 'react'
import Head from 'next/head'

import Layout from '@/layouts/default'

const Home = () => {
  return (
    <>
      <Head>
        <title>My page title</title>
        <meta name="description" content="サイコパスアプリ"/>
      </Head>
      <Layout title="ホーム">
        <p>ここになにか入れる</p>
      </Layout>
    </>
  )
}

export default Home
