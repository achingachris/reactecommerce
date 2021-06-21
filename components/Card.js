import Image from 'next/image'

const Card = ({ name, price, image }) => {
  return (
    <div class='col-lg-6 mb-4'>
      <div class='card h-100'>
        <a href='#'>
          <Image
            class='card-img-top'
            src={image}
            width={700}
            height={400}
            alt=''
          />
        </a>
        <div class='card-body'>
          <h4 class='card-title'>
            <a href='#'>{name}</a>
          </h4>
          <p class='card-text'>USD. {price}</p>
          <a href='#' className='btn btn-primary'>
            View
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
