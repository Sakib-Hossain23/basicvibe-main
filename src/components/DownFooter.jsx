import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "../assets/styles/DownFooter.css";

const DownFooter = ({ cart, setIsRegisterModalOpen }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [activeBtn, setActiveBtn] = useState("/");

  useEffect(() => {
    if (location.pathname !== "call") {
      setActiveBtn(location.pathname);
    }
  }, [location.pathname]);

  const handleUserIconClick = () => {
    setIsRegisterModalOpen(true);
  };

  const handleNavigate = (path) => {
    setActiveBtn(path);
    navigate(path);
  };

  const handleCallClick = () => {
    setActiveBtn("call");

    // Remove "call" active status after 2 seconds
    setTimeout(() => {
      setActiveBtn(location.pathname);
    }, 2000);
  };

  return (
    <footer className="down-footer">
      {/* Home Button */}
      <Link
        to="/"
        className="footer-button"
        onClick={() => {
          setActiveBtn("/");
          window.scrollTo(0, 0);
        }}
      >
        <button
          className={`footer-btn home-btn ${activeBtn === "/" ? "active" : ""}`}
          style={{
            backgroundColor: "#ffffff",
          }}
        >
          <i
            className="fas fa-home footer-icon"
            style={{ color: "#000000" }}
          ></i>
          <span className="footer-label"></span>
        </button>
      </Link>

      {/* Cart Button */}
      <button
        className={`footer-btn cart-btn ${
          activeBtn === "/cart" ? "active" : ""
        }`}
        style={{
          backgroundColor: "#ffffff",
        }}
        onClick={() => handleNavigate("/cart")}
      >
        <i
          className="fas fa-shopping-cart footer-icon"
          style={{ color: "#000000" }}
        ></i>
        <span className="cart-badge">{cart.length}</span>
        <span className="footer-label"></span>
      </button>

      {/* Men's Clothes */}
      <Link
        to="/men-clothes"
        className="footer-link"
        onClick={() => setActiveBtn("/men-clothes")}
      >
        <button
          className={`footer-btn blog-btn ${
            activeBtn === "/men-clothes" ? "active" : ""
          }`}
        >
          <img
            src="img/boy's clothes.jpg"
            alt="Fashion Logo"
            style={{
              width: "44px",
              height: "44px",

              borderRadius: "50%",

              marginTop: "-1px",
            }}
          />
          <span className="footer-label"></span>
        </button>
      </Link>

      {/* Men's Shoes */}
      <Link
        to="/men's-shoes"
        className="footer-link"
        onClick={() => setActiveBtn("/men's-shoes")}
      >
        <button
          className={`footer-btn blog-btn ${
            activeBtn === "/men's-shoes" ? "active" : ""
          }`}
        >
          <img
            src="img/shoes logo.png"
            alt="Fashion Logo"
            style={{
              width: "44px",
              height: "44px",
              backgroundColor: " #ffffff",
              borderRadius: "50%",
              marginTop: "-1px",
            }}
          />
          <span className="footer-label"></span>
        </button>
      </Link>

      {/* Hairstyles */}
      <Link
        to="/hairstyles"
        className="footer-link"
        onClick={() => setActiveBtn("/hairstyles")}
      >
        <button
          className={`footer-btn blog-btn ${
            activeBtn === "/hairstyles" ? "active" : ""
          }`}
        >
          <img
            src="img/prom hairstyles.png"
            alt="Fashion Logo"
            style={{
              width: "44px",
              height: "44px",
              backgroundColor: " #ffffff",
              borderRadius: "50%",
              marginTop: "-1px",
            }}
          />
          <span className="footer-label"></span>
        </button>
      </Link>

      {/* Nails */}
      <Link
        to="/nails"
        className="footer-link"
        onClick={() => setActiveBtn("/nails")}
      >
        <button
          className={`footer-btn blog-btn ${
            activeBtn === "/nails" ? "active" : ""
          }`}
        >
          <img
            src="img/ms1 logo.png"
            alt="Fashion Logo"
            style={{
              width: "44px",
              height: "44px",
              backgroundColor: " #ffffff",
              borderRadius: "50%",
              marginTop: "-1px",
            }}
          />
          <span className="footer-label"></span>
        </button>
      </Link>
    </footer>
  );
};

export default DownFooter;
