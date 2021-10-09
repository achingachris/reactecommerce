import { Container } from 'react-bootstrap'
import Head from 'next/head'

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>The Shop</title>
      </Head>
      <main>{children}</main>
    </>
  )
}

export default Layout
