import Layout from '../../layout/Layout'
import Card from '../../components/Card'

export default function Home() {
  return (
    <Layout>
      {/* <!-- Header--> */}
      <header className='bg-dark py-5'>
        <div className='container px-4 px-lg-5 my-5'>
          <div className='text-center text-white'>
            <h1 className='display-4 fw-bolder'>Services</h1>
            <p className='lead fw-normal text-white-50 mb-0'>Shop and Go</p>
          </div>
        </div>
      </header>
      {/* products list */}
      <section className='py-5'>
        <h2 className='text-center'>Products</h2>
        <div className='container px-4 px-lg-5 mt-5'>
          <div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
        <div className='text-center align-items-center'>
          <button className='btn btn-outline-primary '>
            Next Page
          </button>
        </div>
      </section>
    </Layout>
  )
}
