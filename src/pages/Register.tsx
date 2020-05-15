import React from 'react'
import {Form, Button} from 'react-bootstrap'

import Layout from '@/layouts/default'

const Home = () => {
  return (
    <Layout title="問題登録" description="各項目を記入して登録が可能です。">
      <Form.Group controlId="title">
        <Form.Label className="font-weight-bold">題名</Form.Label>
        <Form.Control
          type="text"
        />
      </Form.Group>
      <Form.Group controlId="question">
        <Form.Label className="font-weight-bold">題名</Form.Label>
        <Form.Control
          as="textarea"
          rows="5"
        />
      </Form.Group>
      <Form.Group controlId="normal">
        <Form.Label className="font-weight-bold">一般回答</Form.Label>
        <Form.Control
          as="textarea"
          rows="5"
        />
      </Form.Group>
      <Form.Group controlId="abnormal">
        <Form.Label className="font-weight-bold">サイコパス回答</Form.Label>
        <Form.Control
          as="textarea"
          rows="5"
        />
      </Form.Group>
      <Button variant="primary">登録する</Button>
    </Layout>
  )
}

export default Home