import React, { useState, useEffect, useRef } from 'react';

const DropdownMenu = ({ title, items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <li
      className="nav-item item-1"
      ref={dropdownRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <a href="#" className="nav-link link-2" onClick={() => setIsOpen(!isOpen)}>
        {title} <i className="fa-solid fa-angle-down"></i>
      </a>
      {isOpen && (
        <ul className="dropdown-menu show">
          {items.map((item, index) => (
            <li key={index}>
              <a className="dropdown-item" href={item.href}>
                <span className="item-content">
                  {item.label}
                  <span className="arrow-container">
                    <ion-icon name="chevron-forward-outline" id="frd-icon"></ion-icon>
                  </span>
                </span>
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default DropdownMenu;