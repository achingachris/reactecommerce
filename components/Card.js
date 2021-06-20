import Image from 'next/image'

const Card = ({ name, price, image }) => {
  return (
    <div className='col mb-5'>
      <div className='card'>
        <Image src='/pop.png' className='card-img-top' alt='...' layout='fill' />
        <div className='card-body'>
          <h5 className='card-title'>Card title</h5>
          <p className='card-text'>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href='#' className='btn btn-primary'>
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
