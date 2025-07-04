import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/Products.css";

function Products({ addToCart }) {
  const [alertVisible, setAlertVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [outOfStockClicked, setOutOfStockClicked] = useState(null);

  const itemsPerPage = 6;
  const navigate = useNavigate();
  const productsContainerRef = useRef(null);

  const showAlert = () => {
    setAlertVisible(true);
    setTimeout(() => {
      setAlertVisible(false);
    }, 5000);
  };

  const handleOutOfStockClick = (productId) => {
    setOutOfStockClicked(productId);
    setTimeout(() => {
      setOutOfStockClicked(null);
    }, 5000);
  };

  const products = [
    {
      id: 6,
      name: "Shoulder bag",
      brand: "Bag",
      price: ["850৳"],
      oldPrice: [""],
      image: "/img/pp17.jpg",
      images: ["/img/pp17.jpg", "/img/pp18.jpeg", "/img/pp19.jpeg"],
      model: {
        color: "Red",
      },

      stock: "in-stock",
      features:
        "Made from glossy PU leather in a striking red shade, this 9.5x5.5 inch bag features an adjustable strap, secure zipper closure, and a sleek, stylish design that perfectly complements your bold personality.",

      colors: ["Red"],

      specifications: {
        Origin: "China",
        Material: "PU leather",
        Height: " ↕️ 5.5 inch",
        Width: "↔️ 9.5 inch",
      },

      description: "Glossy, bold and effortlessly stylish – just like you. ❤️",
    },

    {
      id: 5,
      name: "Shoulder bag",
      brand: "Bag",
      price: ["850৳"],
      oldPrice: [""],
      image: "/img/pp14.jpg",
      images: ["/img/pp14.jpg", "/img/pp15.jpeg", "/img/pp16.jpeg"],

      model: {
        color: "Black",
      },

      stock: "in-stock",
      features:
        "Crafted from glossy PU leather, this bold and compact 9.5x5.5 inch bag is effortlessly stylish. It features an adjustable strap, secure zipper closure, and a well-organized interior—perfect for your standout look.",

      colors: ["Black"],

      specifications: {
        Origin: "China",
        Material: "PU leather",
        Height: " ↕️ 5.5 inch",
        Width: "↔️ 9.5 inch",
      },

      description: "Glossy, bold and effortlessly stylish – just like you. ❤️",
    },

    {
      id: 4,
      name: "Shoulder bag",
      brand: "Bag",
      price: ["950৳"],
      oldPrice: [""],
      image: "/img/pp12.jpg",
      images: ["/img/pp12.jpg", "/img/pp11.jpeg", "/img/pp13.jpeg"],

      model: {
        color: "Light Pink",
      },

      stock: "in-stock",
      features:
        "Made from premium PU leather in a soft light pink shade, this stylish 11.7x5.6 inch bag features a spacious 5-inch inner compartment, adjustable strap, and secure zipper closure—designed to impress and made to adore.",

      colors: ["Light Pink"],

      specifications: {
        Origin: "China",
        Material: "PU leather",
        Height: " ↕️ 5.6 inch",
        Width: "↔️ 11.7 inch",
        InnerSpace: "Spacious of 5 inch",
      },

      description: "Designed to Impress, Made to Adore.",
    },

    {
      id: 7,
      name: "Shoulder bag",
      brand: "Bag",
      price: ["850৳"],
      oldPrice: [""],
      image: "/img/pp20.jpg",
      images: [
        "/img/pp20.jpg",
        "/img/pp21.jpeg",
        "/img/pp22.jpeg",
        "/img/pp23.jpeg",
      ],
      model: {
        color: "White",
      },

      stock: "in-stock",
      features:
        "Crafted from durable PU leather in a clean white shade, this 8.7x5.1 inch bag offers a sleek, stylish design with an adjustable strap and secure zipper closure—designed to impress and made to last.",

      colors: ["White"],

      specifications: {
        Origin: "China",
        Material: "PU leather",
        Height: " ↕️ 5.1 inch",
        Width: "↔️ 8.7 inch",
      },

      description: "Designed to impress, made to last ✨",
    },

    {
      id: 8,
      name: "Shoulder bag",
      brand: "Bag",
      price: ["850৳"],
      oldPrice: [""],
      image: "/img/pp24.jpg",
      images: ["/img/pp24.jpg"],
      model: {
        color: "Red",
      },

      stock: "in-stock",
      features:
        "Made from high-quality PU leather in a vibrant red shade, this 11.2x5.1 inch bag can be used as a one-shoulder or hand-held accessory. With ample space for mobile phones, wallets, lipsticks, and keys, it’s designed to complement every look, adding a touch of style and functionality.",

      colors: ["Red"],

      specifications: {
        Origin: "China",
        Material: "PU leather",
        Height: " ↕️ 5.1 inch",
        Width: "↔️ 11.2 inch",
        Use: "One shoulder/hand held",
        Capacity: "Mobile phones, wallets, lipsticks, keys etc",
      },

      description: "This bag Designed to compliment your every look 🌸🫶💯",
    },

    {
      id: 9,
      name: "Shoulder bag",
      brand: "Bag",
      price: ["850৳"],
      oldPrice: [""],
      image: "/img/pp25.jpg",
      images: ["/img/pp25.jpg"],
      model: {
        color: "Blue",
      },

      stock: "in-stock",
      features:
        "Crafted from durable PU leather in a bold blue shade, this 7.6x6 inch bag is perfect for one-shoulder or hand-held use. With ample space for mobile phones and lipsticks, it’s designed for the woman who knows how to blend style with substance.",

      colors: ["Blue"],

      specifications: {
        Origin: "China",
        Material: "PU leather",
        Height: " ↕️ 6 inch",
        Width: "↔️ 7.6 inch",
        Use: "One shoulder/hand held",
        Capacity: " Mobile phones, lipsticks etc",
      },

      description:
        "A bag designed for the woman who knows style and substance. 🌸🎀",
    },

    // Your other product data...
  ];

  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProducts = products.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const scrollToProductsContainer = () => {
    if (productsContainerRef.current) {
      const offset = -170;
      const elementPosition =
        productsContainerRef.current.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;

    scrollToProductsContainer();
    setLoading(true);

    setTimeout(() => {
      setCurrentPage(page);
      setLoading(false);
    }, 500);
  };

  useEffect(() => {
    if (currentPage !== 1) {
      scrollToProductsContainer();
    }
  }, [currentPage]);

  const handleProductClick = (product, e) => {
    // Check if the click was on the out-of-stock button
    const isOutOfStockButton = e.target.closest(".btn.out-of-stock");
    if (isOutOfStockButton) {
      e.preventDefault();
      e.stopPropagation();
      handleOutOfStockClick(product.id);
      return;
    }
    // Check if the click was on the View Details button
    const isViewDetailsButton = e.target.closest(".btn.buy-now");
    if (!isViewDetailsButton && product.stock === "out-of-stock") {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="wrapper">
      <div className="products-container">
        <h2>New Arrivals</h2>
        {loading && <div className="loading-spinner"></div>}

        <div
          className={`product-grid ${loading ? "loading" : ""}`}
          ref={productsContainerRef}
        >
          {displayedProducts.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={(e) => handleProductClick(product, e)}
              style={{
                cursor: product.stock === "in-stock" ? "pointer" : "default",
              }}
            >
              {product.stock === "out-of-stock" && (
                <div className="out-of-stock-badge">Out of Stock</div>
              )}

              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <div className="product-details">
                <h3 style={{ fontSize: "14px" }}>{product.name}</h3>
                {product.model && (product.model.GB || product.model.color) && (
                  <p
                    className="product-model"
                    style={{ fontSize: "14px", marginBottom: "0rem" }}
                  >
                    <span style={{ display: "none" }}>
                      {product.model.GB && `${product.model.GB}`}
                    </span>
                    {product.model.color && `${product.model.color}`}
                  </p>
                )}
                <div key={product.price[0]}>
                  <p className="product-price">
                    {product.price[0]}{" "}
                    <span className="old-price">{product.oldPrice[0]}</span>
                  </p>
                </div>
                <div className="product-buttons">
                  <button
                    style={{
                      backgroundColor: "#ffffff",
                      color: "#000000",
                      border: "1px solid #000",
                    }}
                    className="btn buy-now"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/product/${product.id}`, {
                        state: { product },
                      });
                    }}
                  >
                    View Details
                  </button>
                  {product.stock === "in-stock" ? (
                    <button
                      className="btn add-to-cart"
                      onClick={(e) => {
                        e.stopPropagation();
                        const link = document.createElement("a");
                        link.href = product.link; // Your affiliate URL
                        link.target = "_blank";
                        link.rel = "nofollow noopener noreferrer";
                        link.click();
                      }}
                    >
                      Buy on Amazon
                    </button>
                  ) : (
                    <button
                      className="btn out-of-stock"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOutOfStockClick(product.id);
                      }}
                      style={{ backgroundColor: "#ff4444" }}
                    >
                      {outOfStockClicked === product.id
                        ? "Out of Stock"
                        : "Out of Stock"}
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {products.length > itemsPerPage && (
          <div className="pagination">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className={`pagination-button ${
                currentPage === 1 ? "disabled" : ""
              }`}
              disabled={currentPage === 1}
            >
              Prev
            </button>
            {[...Array(totalPages)].map((_, index) => {
              const page = index + 1;
              if (
                page === 1 ||
                page === totalPages ||
                (page >= currentPage - 1 && page <= currentPage + 1)
              ) {
                return (
                  <button
                    key={page}
                    onClick={() => handlePageChange(page)}
                    className={`pagination-button ${
                      currentPage === page ? "active" : ""
                    }`}
                  >
                    {page}
                  </button>
                );
              } else if (
                (page === 2 && currentPage > 4) ||
                (page === totalPages - 1 && currentPage < totalPages - 3)
              ) {
                return (
                  <span key={page} className="pagination-dots">
                    ...
                  </span>
                );
              }
              return null;
            })}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className={`pagination-button ${
                currentPage === totalPages ? "disabled" : ""
              }`}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        )}

        {alertVisible && (
          <div className="custom-alert">
            <img
              className="alert-image"
              src="./img/right.png"
              alt="Success Icon"
            />
            <div className="alert-message">Successfully added product</div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Products;
