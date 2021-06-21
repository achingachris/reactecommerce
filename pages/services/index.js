import Layout from '../../layout/Layout'
import ServiceItem from '../../components/ServiceItem'

export default function Home({ services }) {
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
          <div className='justify-content-center'>
            {services.map((service) => (
              <ServiceItem
                key={service.id}
                name={service.name}
                description={service.description}
              />
            ))}
          </div>
        </div>
        <div className='text-center align-items-center'>
          <button className='btn btn-outline-primary '>Next Page</button>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps(context) {
  // get latest services
  const data = await fetch('https://ecom-cms-strapi.herokuapp.com/services')
  const services = await data.json()

  return {
    props: {
      services,
    },
  }
}
