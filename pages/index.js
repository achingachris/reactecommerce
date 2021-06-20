import Image from 'next/image'
import Link from 'next/link'
import Layout from '../layout/Layout'
import Card from '../components/Card'

export default function Home() {
  return (
    <Layout>
      {/* <!-- Header--> */}
      <div className='container col-xxl-8 px-4 py-5'>
        <div className='row flex-lg-row-reverse align-items-center g-5 py-5'>
          <div className='col-10 col-sm-8 col-lg-6'>
            <Image
              src='/bootstrap-themes.png'
              className='d-block mx-lg-auto img-fluid'
              alt='Bootstrap Themes'
              width='700'
              height='500'
              loading='lazy'
            />
          </div>
          <div className='col-lg-6'>
            <h1 className='display-5 fw-bold lh-1 mb-3'>
              Responsive left-aligned hero with image
            </h1>
            <p className='lead'>
              Quickly design and customize responsive mobile-first sites with
              Bootstrap, the world’s most popular front-end open source toolkit,
              featuring Sass variables and mixins, responsive grid system,
              extensive prebuilt components, and powerful JavaScript plugins.
            </p>
            <div className='d-grid gap-2 d-md-flex justify-content-md-start'>
              <button
                type='button'
                className='btn btn-primary btn-lg px-4 me-md-2'
              >
                Primary
              </button>
              <button
                type='button'
                className='btn btn-outline-secondary btn-lg px-4'
              >
                Default
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* products */}
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
          <Link href='/products'>
            <button className='btn btn-outline-primary '>
              View All Products
            </button>
          </Link>
        </div>
      </section>
      {/* Services */}
      <section className='py-5'>
        <h2 className='text-center'>Services</h2>
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
            <Card />
          </div>
        </div>
        <div className='text-center align-items-center'>
          <Link href='/services'>

          <button className='btn btn-outline-primary '>
            View All Services
          </button>
          </Link>
        </div>
      </section>
    </Layout>
  )
}
