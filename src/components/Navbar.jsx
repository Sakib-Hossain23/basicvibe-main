import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../assets/styles/Navbar.css";

const Navbar = ({
  cart,
  searchQuery,
  setSearchQuery,
  setIsSearchModalOpen,
  setIsRegisterModalOpen,
}) => {
  // State for managing menu and dropdowns
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSmartWatchDropdownOpen, setIsSmartWatchDropdownOpen] =
    useState(false);
  const [isSmartWatchSubDropdownOpen, setIsSmartWatchSubDropdownOpen] =
    useState(false);
  const [isCoverDropdownOpen, setIsCoverDropdownOpen] = useState(false);
  const [isCoverSubDropdownOpen, setIsCoverSubDropdownOpen] = useState(false);
  const [isLaptopDesktopDropdownOpen, setIsLaptopDesktopDropdownOpen] =
    useState(false);
  const [isLaptopDesktopSubDropdownOpen, setIsLaptopDesktopSubDropdownOpen] =
    useState(false);
  const [isPowerAccessoriesDropdownOpen, setIsPowerAccessoriesDropdownOpen] =
    useState(false);
  const [
    isPowerAccessoriesSubDropdownOpen,
    setIsPowerAccessoriesSubDropdownOpen,
  ] = useState(false);

  const [activeButton, setActiveButton] = useState(null);
  const navigate = useNavigate();
  const location = useLocation(); // Get current URL

  // Set the active button based on the current route
  useEffect(() => {
    if (location.pathname === "/") setActiveButton("home");
    else if (location.pathname === "/cart") setActiveButton("cart");
    else if (location.pathname === "/blog") setActiveButton("blog");
    else if (location.pathname === "/phone") setActiveButton("phone");
  }, [location.pathname]); // Re-run when the location changes

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Close all dropdowns and menus
  const closeAllMenus = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
    setIsSmartWatchDropdownOpen(false);
    setIsSmartWatchSubDropdownOpen(false);
    setIsCoverDropdownOpen(false);
    setIsCoverSubDropdownOpen(false);
    setIsLaptopDesktopDropdownOpen(false);
    setIsLaptopDesktopSubDropdownOpen(false);
    setIsPowerAccessoriesDropdownOpen(false);
    setIsPowerAccessoriesSubDropdownOpen(false);
  };

  // Handle search input change
  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setIsSearchModalOpen(true);
  };

  // Handle search on Enter key press
  const handleSearchKeyPress = (e) => {
    if (e.key === "Enter" && searchQuery.trim() !== "") {
      setIsSearchModalOpen(true);
    }
  };

  // Handle user icon click
  const handleUserClick = () => {
    setIsRegisterModalOpen(true);
  };

  // Prevent default link behavior
  const preventDefaultLink = (e) => {
    e.preventDefault();
  };

  // Handle button click for active state
  const handleButtonClick = (button) => {
    setActiveButton(button);
  };

  // Define button styles with active state
  const buttonStyles = (button) => {
    const isActive = activeButton === button;
    return {
      backgroundColor: "#000000",
      boxShadow: isActive ? "0 0 15px #009a9a" : "none",
      width: "47px",
      height: "47px",
      color: "#ffffff",
    };
  };

  return (
    <nav className="navbar">
      {/* Top section of the navbar */}
      <div className="navbar-top">
        {/* Logo section */}
        <Link
          to="/"
          className="footer-button"
          onClick={() => {
            closeAllMenus();
            window.scrollTo(0, 0);
          }}
        >
          <div className="navbar-logo">
            <img
              src="/img/bvvv.png"
              alt="GoGadget Store Logo"
              className="logo-tilt"
              style={{
                height: "35px",
                width: "auto",
                marginLeft: "11px",
                marginBottom: "-13px",
              }}
            />
            <p>BasicVibe</p>
          </div>
        </Link>

        {/* Search bar */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
            onKeyPress={handleSearchKeyPress}
          />
          <button onClick={() => setIsSearchModalOpen(true)}>
            <i className="fas fa-search"></i>
          </button>
        </div>

        {/* Icons section */}
        <div className="navbar-icons">
          {/* Home button */}
          <div className="navbar-item">
            <Link
              to="/"
              className="footer-button"
              onClick={() => {
                window.scrollTo(0, 0);
                handleButtonClick("home");
              }}
            >
              <button
                className="btn btn-md-square rounded-circle d-flex flex-column align-items-center justify-content-center"
                style={buttonStyles("home")}
              >
                <i className="fas fa-home text-white"></i>
                <span
                  className="text-white"
                  style={{
                    fontSize: "9px",
                    marginTop: "-4px",
                    marginBottom: "-3px",
                  }}
                ></span>
              </button>
            </Link>
          </div>

          {/* Cart button */}
          <div className="navbar-item">
            <button
              className="btn btn-md-square rounded-circle position-relative d-flex flex-column align-items-center justify-content-center"
              style={buttonStyles("cart")}
              onClick={() => {
                handleButtonClick("cart");
                navigate("/cart");
              }}
            >
              <i className="fas fa-shopping-cart"></i>
              <span
                className="badge bg-danger position-absolute"
                style={{
                  top: "-9px",
                  right: "-9px",
                  fontSize: "0.6rem",
                  padding: "0.2rem 0.4rem",
                  minWidth: "1.5rem",
                  textAlign: "center",
                }}
              >
                {cart.length}
              </span>
              <span
                className="text-white"
                style={{
                  fontSize: "9px",
                  marginTop: "-4px",
                  marginBottom: "-3px",
                }}
              >
                Cart
              </span>
            </button>
          </div>

          {/* Phone button */}
          <div className="navbar-item">
            <button
              className="e"
              style={{
                backgroundColor: "#ffffff",
                border: "1.5px solid #000000",
                borderRadius: "3px",
                cursor: "text",
              }}
            >
              <button
                className="btn"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#ffffff",
                  color: "#000000",
                  padding: "-1px 15px",
                  borderRadius: "3px",
                  fontSize: "1rem",
                  gap: "8px",
                  border: "none",
                  fontWeight: "bold",
                  boxShadow:
                    activeButton === "phone" ? "0 0 15px #f7941d" : "none",
                  cursor: "text",
                }}
              >
                <img
                  src="img/bvvv.png"
                  alt="Fashion Logo"
                  style={{
                    width: "30px",
                    height: "30px",
                    marginLeft: "1px",
                    marginBottom: "-5px",
                    marginTop: "-4px",

                    borderRadius: "50%",
                    border: "1px dashed #000000",
                    backgroundColor: "#000",
                  }}
                />
                Your_vibe_attracts_your_tribe
              </button>
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="menu-button" onClick={toggleMenu}>
            <i className={`fas ${isOpen ? "fa-times" : "fa-bars"}`}></i>
          </button>
        </div>
      </div>

      {/* Bottom section of the navbar (dropdowns) */}
      <div className={`navbar-bottom ${isOpen ? "menu-open" : ""}`}>
        <ul>
          {/* Phones & Tablets Dropdown */}
          <li
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
            className="dropdown"
          >
            <Link to="/notfound" onClick={(e) => e.preventDefault()}>
              Men's Fashion <i className="fas fa-caret-down"></i>
            </Link>

            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li
                  onMouseEnter={() => setIsSmartWatchSubDropdownOpen(true)}
                  onMouseLeave={() => setIsSmartWatchSubDropdownOpen(false)}
                >
                  <Link to="/men's-shoes" onClick={closeAllMenus}>
                    Shoes
                  </Link>
                </li>

                <li>
                  <Link to="/men-clothes" onClick={closeAllMenus}>
                    clothing
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Laptop & Desktop Dropdown */}
          <li
            onMouseEnter={() => setIsLaptopDesktopDropdownOpen(true)}
            onMouseLeave={() => setIsLaptopDesktopDropdownOpen(false)}
            className="dropdown"
          >
            <Link to="/notfound" onClick={(e) => e.preventDefault()}>
              Women's Fashion <i className="fas fa-caret-down"></i>
            </Link>

            {isLaptopDesktopDropdownOpen && (
              <ul className="dropdown-menu">
                <li
                  onMouseEnter={() => setIsLaptopDesktopSubDropdownOpen(true)}
                  onMouseLeave={() => setIsLaptopDesktopSubDropdownOpen(false)}
                >
                  <Link to="/nails" onClick={closeAllMenus}>
                    Nails
                  </Link>
                  {isLaptopDesktopSubDropdownOpen && (
                    <ul className="sub-dropdown-menu"></ul>
                  )}
                </li>
                <li>
                  <Link to="/hairstyles" onClick={closeAllMenus}>
                    Hairstyles
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Smart Watch Dropdown */}
          <li
            onMouseEnter={() => setIsSmartWatchDropdownOpen(true)}
            onMouseLeave={() => setIsSmartWatchDropdownOpen(false)}
            className="dropdown"
          >
            <Link to="/notfound" onClick={(e) => e.preventDefault()}>
              Beauty & Personal Care<i className="fas fa-caret-down"></i>
            </Link>

            {isSmartWatchDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <Link to="/nails" onClick={closeAllMenus}>
                    Nails
                  </Link>
                </li>
                <li>
                  <Link to="/hairstyles" onClick={closeAllMenus}>
                    Hairstyles
                  </Link>
                </li>
              </ul>
            )}
          </li>

          {/* Blog link */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
