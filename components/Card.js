import Image from 'next/image'

const Card = ({ name, price, image }) => {
  return (
    <div className='col-lg-6 mb-4'>
      <div className='card h-100'>
        <a href='#'>
          <Image
            className='card-img-top'
            src={image}
            width={700}
            height={400}
            alt=''
          />
        </a>
        <div className='card-body'>
          <h4 className='card-title'>
            <a href='#'>{name}</a>
          </h4>
          <p className='card-text'>USD. {price}</p>
          <a href='#' className='btn btn-primary'>
            View
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
