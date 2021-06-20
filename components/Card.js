import Image from 'next/image'

const Card = ({ name, price, image }) => {
  return (
    <div className='col mb-5'>
      <div className='card h-100'>
        <Image
          className='card-img-top'
          src='/po.png'
          alt='image goes here'
          layout='fill'
        />
        <div className='card-body p-4'>
          <div className='text-center'>
            <h5 className='fw-bolder'>Fancy Product</h5>
            $40.00 - $80.00
          </div>
          <div className='card-footer p-4 pt-0 border-top-0 bg-transparent'>
            <div className='text-center'>
              <button className='btn btn-outline-dark mt-auto'>
                View options
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card
