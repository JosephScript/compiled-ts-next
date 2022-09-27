import { NextPage } from 'next'
import { ReactElement, ReactNode } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'

export type NextPageWithLayout<T = unknown> = NextPage<T> & {
  getLayout?: (page: ReactElement, pageProps: any) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const MyApp = (ctx: AppPropsWithLayout) => {
  const { Component, pageProps = {} } = ctx
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      <Head>
        <title>Demo of Compiled in Typescript</title>
      </Head>
      {getLayout(<Component {...pageProps} />, pageProps)}
    </>
  )
}

export default MyApp
