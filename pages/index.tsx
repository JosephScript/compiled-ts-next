import { NextPageWithLayout } from './_app'
import { ReactElement } from 'react'
import { Main } from '../layouts/Main'
import { styled } from '@compiled/react'

const Home = styled.div`
  color: white;
  font-weight: bold;
  margin-bottom: 16px;
`

const Page: NextPageWithLayout = (/* pageProps */) => (
  <Home>
    This is a demo of Compiled. This should be white text on a purple
    background.
  </Home>
)

Page.displayName = 'DemoPage'

Page.getLayout = (page: ReactElement, pageProps: {}) => (
  <Main {...pageProps}>{page}</Main>
)

export default Page
