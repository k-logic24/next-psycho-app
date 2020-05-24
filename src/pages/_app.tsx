import React from 'react'
import { AppProps } from 'next/app'
// @ts-ignore
import NextNprogress from 'nextjs-progressbar'
import 'firebase/firestore'
import { Fuego, FuegoProvider } from '@nandorojo/swr-firestore'
import 'bootstrap/scss/bootstrap.scss'

import firebaseConfig from '@/firebase/firebaseConfig'
import '@/style/style.scss'

const fuego = new Fuego(firebaseConfig)
const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <FuegoProvider fuego={fuego}>
      <NextNprogress />
      <Component {...pageProps} />
    </FuegoProvider>
  )
}

export default App
