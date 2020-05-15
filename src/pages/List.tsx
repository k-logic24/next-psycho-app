import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {
  ListGroup,
  Row,
  Col,
  Button,
} from 'react-bootstrap'

import { fetchData } from '@/api'
// import { RootState } from '@/store'
import { DataProps } from '@/store/types'

import Layout from '@/layouts/default'

const List = () => {
  const [data, setData] = useState<object[]>([])

  useEffect(() => {
    fetchData()
      .then(res => setData(res))
  }, [setData])

  return (
    <Layout title="問題一覧" description={"問題から一般回答とサイコパスの思考を知ることができます。"}>
      <ListGroup>
      {data.map((item: DataProps) => (
        <ListGroup.Item key={item.id}>
          <Row className="justify-content-between">
            <Col className="my-sm-auto" sm={6}>
              <p className="mb-sm-0">
                {item.title}: {item.id}
              </p>
            </Col>
            <Col sm="auto">
              <Button variant="primary">問題を見る</Button>
            </Col>
          </Row>
        </ListGroup.Item>
      ))}
      </ListGroup>
    </Layout>
  )
}

export default List