import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ListGroup, Row, Col, Button } from 'react-bootstrap'

import { fetchData } from '@/api'
import { DataProps } from '@/types'
import Layout from '@/layouts/default'
import DeleteModal from '@/components/DeleteModal'

const List = () => {
  const defaultValue = {
    title: '',
    question: '',
    normal: '',
    abnormal: '',
  }
  const [targetData, setTargetData] = useState<DataProps[]>([defaultValue])
  const [modalShow, setModalShow] = useState(false)
  const [data, setData] = useState<DataProps[]>([])

  useEffect(() => {
    fetchData().then((res) => setData(res))
  }, [setData])

  const handleClickModal = (target: EventTarget) => {
    if (target instanceof HTMLButtonElement) {
      const filterData = data.filter((item) => item.id === target.value)
      setTargetData(filterData)
      setModalShow(true)
    }
  }

  return (
    <Layout
      title="問題一覧"
      description={'問題から一般回答とサイコパスの思考を知ることができます。'}
    >
      <div className="content-box">
        {data.length ? (
          <ListGroup>
            {data.map((item: DataProps) => (
              <ListGroup.Item key={item.id}>
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
                        <a className="d-block w-100 py-2 px-3">編集</a>
                      </Link>
                    </Button>
                    <Button
                      value={item.id}
                      className="ml-2 py-2 px-3"
                      variant="danger"
                      onClick={(e: React.FormEvent<HTMLButtonElement>) =>
                        handleClickModal(e.target)
                      }
                    >
                      削除
                    </Button>

                    <DeleteModal
                      targetData={targetData}
                      show={modalShow}
                      setModalShow={setModalShow}
                      setData={setData}
                    />
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        ) : (
          <p className="mb-0">問題がありません</p>
        )}
      </div>
    </Layout>
  )
}

export default List
