const Navbar = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-dark bg-dark'>
      <div className='container'>
        <a className='navbar-brand' href='#'>
          Ecom
        </a>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
            <li className='nav-item'>
              <a className='nav-link active' aria-current='page' href='#'>
                Home
              </a>
            </li>

            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdown'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Explore
              </a>
              <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                <li>
                  <a className='dropdown-item' href='#'>
                    Shops
                  </a>
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Products
                  </a>
                </li>
                <li>
                  <hr className='dropdown-divider' />
                </li>
                <li>
                  <a className='dropdown-item' href='#'>
                    Services
                  </a>
                </li>
              </ul>
            </li>
            <li className='nav-item'>
              <a
                className='nav-link disabled'
                href='#'
                tabindex='-1'
                aria-disabled='true'
              >
                Disabled
              </a>
            </li>
          </ul>
          <form className='d-flex'>
            <button className='btn btn-outline-primary' type='submit'>
              <i className='bi-cart-fill me-1'></i>
              Cart
              <span className='badge bg-primary text-white ms-1 rounded-pill'>
                0
              </span>
            </button>
          </form>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
