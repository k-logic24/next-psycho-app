import React, { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Button } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { useDocument } from '@nandorojo/swr-firestore'
import classnames from 'classnames'

import { DataProps } from '@/types'
import Layout from '@/layouts/default'

const Id = () => {
  const [isShow, setShow] = useState(false)
  const router = useRouter()
  const { id } = router.query

  const btnState = classnames({
    'd-none': isShow
  })

  // 該当データ取得
  const { data } = useDocument<DataProps>(`information/${id}`, { listen: true })

  return (
    <>
      <Head>
        <title>psycho-app | {data!.title}</title>
        <meta name="description" content="サイコパスアプリ 問題詳細ページ"/>
      </Head>
      <Layout title={data!.title}>
        <div className="content-box">
          <p className="mb-5">{data!.question}</p>
          <Button
            className={btnState}
            variant="secondary"
            onClick={() => setShow(true)}
          >
            回答を見る
          </Button>
          {isShow &&
            <>
            <section className="mb-4">
              <h2 className="text-primary">一般回答</h2>
              <p className="mb-0">{data!.normal}</p>
            </section>
            <section className="mb-4">
              <h2 className="text-danger">サイコパス回答</h2>
              <p className="mb-0">{data!.abnormal}</p>
            </section>
            <Link href="/list">
              <Button variant="secondary">一覧へもどる</Button>
            </Link>
            </>
          }
        </div>
      </Layout>
    </>
  )
}

export default Id
