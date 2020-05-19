import React from 'react'
import Head from 'next/head'

import Layout from '@/layouts/default'

const Home = () => {
  return (
    <>
      <Head>
        <title>psycho-app | ホーム</title>
        <meta name="description" content="サイコパスアプリ ホーム"/>
      </Head>
      <Layout title="ホーム">
        <p>ようこそ。<br/>こちらはサイコパス診断アプリです。</p>
        <p>問題一覧からサイコパス問題が閲覧できます。<br/>また、編集も可能です。</p>
        <p>問題登録から問題を作成し、登録できます。</p>
      </Layout>
    </>
  )
}

export default Home
