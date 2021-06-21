import Layout from '../../layout/Layout'
import Card from '../../components/Card'

export default function Home({ products }) {
  console.log('PRODUCTS', products)
  return (
    <Layout>
      {/* <!-- Header--> */}
      <header className='bg-dark py-5'>
        <div className='container px-4 px-lg-5 my-5'>
          <div className='text-center text-white'>
            <h1 className='display-4 fw-bolder'>Prodcuts</h1>
            <p className='lead fw-normal text-white-50 mb-0'>Shop and Go</p>
          </div>
        </div>
      </header>
      {/* products list */}
      <section className='py-5'>
        <h2 className='text-center'>Products</h2>
        <div className='container mt-5'>
          <div className='row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center'>
            {products.map((product) => (
              <Card key={product.id} name={product.name} image={product.cover_image.formats.medium.url} price={product.price} />
            ))}
          </div>
        </div>
        <div className='text-center align-items-center'>
          <button className='btn btn-outline-primary '>View</button>
        </div>
      </section>
    </Layout>
  )
}

export async function getStaticProps(context) {
  // get all products
  const res = await fetch('https://ecom-cms-strapi.herokuapp.com/products')
  const products = await res.json()

  return {
    props: {
      products,
    },
  }
}
