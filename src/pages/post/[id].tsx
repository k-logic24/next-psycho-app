import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from 'react-bootstrap'
import { useRouter } from 'next/router'
import { useDispatch, useSelector } from 'react-redux'
import classnames from 'classnames'

import { RootState } from '@/store'
import { DataProps } from '@/types'
import { thunkedFetch } from '@/store/action'
import Layout from '@/layouts/default'

const Id = () => {
  const [isShow, setShow] = useState(false)
  const router = useRouter()
  const dispatch = useDispatch()
  const currentData = useSelector<RootState, DataProps>(
    (state) => state.select
  )
  const { id } = router.query
  const btnState = classnames({
    'd-none': isShow
  })

  useEffect(() => {
    if (typeof id === 'string') {
      dispatch(thunkedFetch(id))
    }
  }, [thunkedFetch])

  return (
    <>
      <Layout title={currentData.title}>
        <div className="content-box">
          <p className="mb-5">{currentData.question}</p>
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
              <p className="mb-0">{currentData.normal}</p>
            </section>
            <section className="mb-4">
              <h2 className="text-danger">サイコパス回答</h2>
              <p className="mb-0">{currentData.abnormal}</p>
            </section>
            <Link href="/list">
              <a>一覧へもどる</a>
            </Link>
            </>
          }
        </div>
      </Layout>
    </>
  )
}

export default Id
