import { BrowserRouter as Router } from 'react-router-dom'
import { Container } from 'react-bootstrap'

import Meta from './Meta'
import Header from './Header'
import Footer from './Footer'

const Layout = ({ children, title, description, pageName }) => {
  return (
    <Router>
      <Meta title={title} pageName={pageName} description={description} />
      <Header />
      <Container>
        <main className='py-3'>{children}</main>
      </Container>
      <Footer />
    </Router>
  )
}

export default Layout
