import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="cnt-1">
        <h4>Contact us 24/7 +1 50 537 53 082</h4>
        <h4>🔥 The Biggest Sale Ever 50% Off</h4>
        <div className="lnks">
          <a className="lnk-1" href="#">
            Wishlist
          </a>
          <a className="lnk-2" href="#">
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
            <li className="nav-item">
              <a className="nav-link" href="#">
                Store
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Pages
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Docs
              </a>
            </li>
          </ul>

          <form className="search-form d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
