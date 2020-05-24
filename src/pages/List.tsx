import React, { useState } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import { Row, Col, Button } from 'react-bootstrap'
import classnames from 'classnames'
import { useCollection } from '@nandorojo/swr-firestore'

import Layout from '@/layouts/default'
import DeleteModal from '@/components/DeleteModal'
import { DataProps } from '@/types'

const List = () => {
  // firestore data
  const { data } = useCollection<DataProps>('information')

  const [targetData, setTargetData] = useState<DataProps[]>([{
    title: '',
    question: '',
    normal: '',
    abnormal: '',
  }])
  const [modalShow, setModalShow] = useState(false)
  const classList = (index: number) =>
    classnames('p-2', {
      'bg-light': index % 2 !== 0
    })

  const handleClickDelete = (target: EventTarget) => {
    if (target instanceof HTMLButtonElement) {
      if (data) {
        const filterData = data.filter((item) => item.id === target.value)
        setTargetData(filterData)
        setModalShow(true)
      }
    }
  }

  return (
    <>
    <Head>
      <title>psycho-app | 問題一覧</title>
      <meta name="description" content="サイコパスアプリ 問題一覧ページ"/>
    </Head>
    <Layout title="問題一覧">
      <div className="content-box">
        {data && data.length ? (
          <ul className="mb-0">
            {data.map((item: any, index: number) => (
              <li key={item.id} className={classList(index)}>
                <Row className="justify-content-between">
                  <Col className="my-sm-auto" sm={6}>
                    <p className="mb-sm-0 font-weight-bold">{item.title}</p>
                  </Col>
                  <Col sm="auto">
                    <Button className="p-0" variant="primary">
                      <Link href="/post/[id]" as={`/post/${item.id}`}>
                        <a className="d-block w-100 py-2 px-3">問題を見る</a>
                      </Link>
                    </Button>
                    <Button className="p-0 ml-2" variant="info">
                      <Link href="/edit/[id]" as={`/edit/${item.id}`}>
                        <a className="d-block w-100 py-2 px-3"
                        >編集</a>
                      </Link>
                    </Button>
                    <Button
                      className="ml-2 py-2 px-3"
                      variant="danger"
                      value={item.id}
                      onClick={(e: React.FormEvent<HTMLButtonElement>) =>
                        handleClickDelete(e.target)
                      }
                    >
                      削除
                    </Button>

                    <DeleteModal
                      targetData={targetData}
                      show={modalShow}
                      setModalShow={setModalShow}
                    />
                  </Col>
                </Row>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mb-0">問題がありません</p>
        )}
      </div>
      </Layout>
      </>
  )
}

export default List
