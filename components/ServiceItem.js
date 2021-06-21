const ServiceItem = ({ name, description }) => {
  return (
    <div class='row mt-4 mb-3'>
      <div class='col-md-7'>
        <a href='#'>
          <img
            class='img-fluid rounded mb-3 mb-md-0'
            src='http://placehold.it/700x300'
            alt=''
          />
        </a>
      </div>
      <div class='col-md-5'>
        <h3>{name}</h3>
        <p>
          {description}
        </p>
        <a class='btn btn-primary' href='#'>
          View service
        </a>
      </div>
    </div>
  )
}

export default ServiceItem
