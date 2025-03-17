import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="cnt-1">
        <h4>Contact us 24/7 +1 50 537 53 082</h4>
        <h4>🔥 The Biggest Sale Ever 50% Off</h4>
        <div className="lnks">
          <a className="lnk" href="#">
            Wishlist
          </a>
          <a className="lnk" href="#">
            Account
          </a>
        </div>
      </div>
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
        <i class="fa-solid fa-infinity"></i> Infinite
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <a className="nav-link active" href="#">
                Home
              </a>
            </li>
            <li className="nav-item item-1">
              <a href='#' type="button" class="nav-link link-2">Store<i class="fa-solid fa-angle-down"></i></a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Products <i class="fa-solid fa-angle-down"></i>
              </a>
              <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pages <i class="fa-solid fa-angle-down"></i>
              </a>
              <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Account <i class="fa-solid fa-angle-down"></i>
              </a>
              <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><hr class="dropdown-divider"/></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Docs
              </a>
            </li>
          </ul>

          <div className="navbar-end">
            <ul>
              <li><button className='end-link'><i class="fa-regular fa-moon"></i></button></li>
              <li><button className='end-link'><i class="fa-solid fa-cart-shopping"></i></button></li>
              <li><button className='end-link'><i class="fa-solid fa-magnifying-glass"></i></button></li>
            </ul>  
          </div>         

          {/* <form className="search-form d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;