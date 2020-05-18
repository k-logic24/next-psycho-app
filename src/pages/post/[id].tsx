import React, { useState, useEffect } from 'react'
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
          <p>{currentData.question}</p>
          <Button
            className={btnState}
            variant="secondary"
            onClick={() => setShow(true)}
          >
            回答を見る
          </Button>
          {isShow &&
            <>
              <p>{currentData.normal}</p>
              <p>{currentData.abnormal}</p>
            </>
          }
        </div>
      </Layout>
    </>
  )
}

export default Id
