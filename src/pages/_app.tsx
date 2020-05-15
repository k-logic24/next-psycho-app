import React from 'react'
import {AppProps} from 'next/app'

import 'bootstrap/scss/bootstrap.scss'
import '@/style/style.scss'

const App: React.FC<AppProps> = ({Component, pageProps}) => {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default App
