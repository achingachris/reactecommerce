import Image from 'next/image'

const ServiceItem = ({ name, description }) => {
  return (
    <div className='row mt-4 mb-3'>
      <div className='col-md-7'>
        <a href='#'>
          <Image
            className='img-fluid rounded mb-3 mb-md-0'
            src='/cd2c.png'
            layout="fill"
            alt='image not found'
          />
        </a>
      </div>
      <div className='col-md-5'>
        <h3>{name}</h3>
        <p>
          {description}
        </p>
        <a className='btn btn-primary' href='#'>
          View service
        </a>
      </div>
    </div>
  )
}

export default ServiceItem
