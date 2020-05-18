import React from 'react'
import { AppProps } from 'next/app'
import { Provider } from 'react-redux'
// @ts-ignore
import NextNprogress from 'nextjs-progressbar'
import 'bootstrap/scss/bootstrap.scss'
import '@/style/style.scss'

import store from '@/store'

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <Provider store={store}>
        <NextNprogress />
        <Component {...pageProps} />
      </Provider>
    </>
  )
}

export default App
