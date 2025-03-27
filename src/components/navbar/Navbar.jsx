import React, { useState, useEffect } from 'react';
import DropdownMenu from '../../DropdownMenu'; // Corrected import path
import './Navbar.css';

const Navbar = () => {
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkmode') === 'active'
  );

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add('darkmode');
      localStorage.setItem('darkmode', 'active');
    } else {
      document.body.classList.remove('darkmode');
      localStorage.setItem('darkmode', 'inactive'); // Important to update localStorage when turning off dark mode
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const storeItems = [
    { label: 'Electronic Store', href: '#' },
    { label: 'Fashion Store', href: '#' },
    { label: 'Grocery Store', href: '#' },
    { label: 'Furniture Store', href: '#' },
  ];

  const productItems = [
    { label: 'Large House Devices', href: '#' },
    { label: 'Outdoor Living Products', href: '#' },
    { label: 'Cooking Essentials', href: '#' },
    { label: 'Animal Care Products', href: '#' },
    { label: 'Food Products', href: '#' },
    { label: 'Self-Care Products', href: '#' },
  ];

  const pageItems = [
    { label: 'About', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Contact', href: '#' },
    { label: 'Help Center', href: '#' },
    { label: 'Terms & Conditions', href: '#' },
  ];

  const accountItems = [
    { label: 'Action', href: '#' },
    { label: 'Another Action', href: '#' },
    { label: 'Something else here', href: '#' },
  ];

  return (
    <nav className={darkMode ? "darkmode navbar navbar-expand-lg bg-body-tertiary" : "navbar navbar-expand-lg bg-body-tertiary"}>
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
          <div className="navbar-icon">
            <ion-icon name="infinite-outline" className="nav-icon"></ion-icon>
          </div>
          <h1>Infinite</h1>
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
            <DropdownMenu title="Store" items={storeItems} />
            <DropdownMenu title="Products" items={productItems} />
            <DropdownMenu title="Pages" items={pageItems} />
            <DropdownMenu title="Account" items={accountItems} />
            <li className="nav-item">
              <a className="nav-link" href="#">
                Docs
              </a>
            </li>
          </ul>

          <div className="navbar-end">
            <ul>
              <li>
                <button className='end-link' onClick={toggleDarkMode}>
                  <ion-icon name="moon-outline" className="i moon"></ion-icon>
                  <ion-icon name="sunny-outline" className="i sun"></ion-icon>
                </button>
              </li>
              <li><button className='end-link'><ion-icon name="cart-outline" className="i"></ion-icon></button></li>
              <li>
                <button className='end-link' onClick={() => setShowSearch(!showSearch)}>
                  <ion-icon name="search-outline" className="i" id="src-btn"></ion-icon>
                </button>
                {showSearch && (
                  <ul className='search'>
                    <form className="search-form d-flex">
                      <input
                        className="form-control me-2"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                      />
                      {search && (
                        <ion-icon
                          name="close-outline"
                          className="clear-icon"
                          onClick={() => setSearch("")}
                        ></ion-icon>
                      )}
                      <button className="btn" type="submit">
                        <ion-icon name="arrow-forward-outline" id="arrow-icon"></ion-icon>
                      </button>
                    </form>
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;