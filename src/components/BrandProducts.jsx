import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/BrandProducts.css";

function BrandProducts({ addToCart }) {
  const [alertVisible, setAlertVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");
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
      id: 31,
      name: "Bomber Jacket",
      brand: "jacket",
      price: ["$33.98"],
      oldPrice: [""],
      image: "/img/ms93.png",
      images: ["/img/ms93.png", "/img/ms94.jpg", "/img/ms95.jpg"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/TACVASEN-Lightweight-Jacket-Spring-Flight/dp/B07VGQTMYD?ref_=Oct_d_obs_d_1045830_1&pd_rd_w=ieQt3&content-id=amzn1.sym.3077d44e-b53e-482e-b605-9df89d795020&pf_rd_p=3077d44e-b53e-482e-b605-9df89d795020&pf_rd_r=3D6SZ86G711MWECH8R45&pd_rd_wg=uJX11&pd_rd_r=5c73609b-3746-4471-88be-ccc222c2a082&pd_rd_i=B07VGQTMYD",

      features:
        "TACVASEN Men's Bomber Jacket Lightweight Casual Spring Fall Windbreaker Zip Up Coat with Pocket",

      specifications: {
        FabricType: "Polyester",
        CareInstructions: "Machine Wash",
      },
    },

    {
      id: 32,
      name: "Lightweight Jacket",
      brand: "jacket",
      price: ["$33"],
      oldPrice: [""],
      image: "/img/ms96.png",
      images: ["/img/ms96.png", "/img/ms97.jpg", "/img/ms98.jpg"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/dp/B089B3YH4X/ref=sspa_dk_detail_1?pd_rd_i=B089B3YH4X&pd_rd_w=YnmW7&content-id=amzn1.sym.c4606765-78ec-444e-9319-716ceb6c5a61&pf_rd_p=c4606765-78ec-444e-9319-716ceb6c5a61&pf_rd_r=1AXA820PGSDZD6E20K4P&pd_rd_wg=6Vx2O&pd_rd_r=72bf7144-f3cb-4029-a591-6aa2df5b91c2&s=apparel&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&th=1&psc=1",

      features:
        "TACVASEN Men's Lightweight Jacket Casual Spring Fall Windbreaker Bomber Zip Up Coat With Pocket",

      specifications: {
        FabricType: "100% Polyester",
        CareInstructions: "Hand Wash Only",
      },
    },
    {
      id: 33,
      name: "Lightweight Jacket",
      brand: "jacket",
      price: ["$31"],
      oldPrice: [""],
      image: "/img/ms99.png",
      images: ["/img/ms99.png", "/img/ms100.jpg", "/img/ms101.jpg"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/dp/B0C1CF21MG/ref=sspa_dk_detail_3?pd_rd_i=B0C1CF21MG&pd_rd_w=R1epe&content-id=amzn1.sym.7446a9d1-25fe-4460-b135-a60336bad2c9&pf_rd_p=7446a9d1-25fe-4460-b135-a60336bad2c9&pf_rd_r=VZQJB8HB16VS7XSZ2J7R&pd_rd_wg=4qXQY&pd_rd_r=ecae54ba-0866-48f5-a92b-56876fb764a0&s=apparel&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWw&th=1&psc=1",

      features:
        "TACVASEN Men's Lightweight Jacket Spring Bomber Fall Windbreaker Casual Stylish Coats with Pockets",

      specifications: {
        FabricType: "Polyester",
        CareInstructions: "Hand Wash Only",
        Origin: "Imported",
      },
    },
    {
      id: 34,
      name: "Bomber Jacket",
      brand: "jacket",
      price: ["$33"],
      oldPrice: [""],
      image: "/img/ms102.png",
      images: ["/img/ms102.png", "/img/ms103.jpg", "/img/ms104.jpg"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/dp/B0B3X5JGZ6/ref=sspa_dk_detail_1?psc=1&pd_rd_i=B0B3X5JGZ6&pd_rd_w=kzKXN&content-id=amzn1.sym.c4606765-78ec-444e-9319-716ceb6c5a61&pf_rd_p=c4606765-78ec-444e-9319-716ceb6c5a61&pf_rd_r=AXJH1HCPTCJR1BPBTCM2&pd_rd_wg=ZZgfE&pd_rd_r=54d050ea-4c12-4a3b-a47e-3c7d267e4ae7&s=apparel&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM",

      features:
        "TACVASEN Men's Bomber Jacket Lightweight Casual Spring Fall Windbreaker Zip Up Coat with Pocket",

      specifications: {
        FabricType: "Polyester",
        CareInstructions: "Hand Wash Only",
      },
    },
    {
      id: 35,
      name: "Lightweight Jacket ",
      brand: "jacket",
      price: ["$33"],
      oldPrice: [""],
      image: "/img/ms105.png",
      images: ["/img/ms105.png", "/img/ms106.jpg", "/img/ms107.jpg"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/dp/B0B51V3H4R/ref=sspa_dk_detail_1?pf_rd_p=c4606765-78ec-444e-9319-716ceb6c5a61&pf_rd_r=2AYN0N2G06R6N3S54HBE&pd_rd_wg=GbG7F&pd_rd_w=YZBhe&content-id=amzn1.sym.c4606765-78ec-444e-9319-716ceb6c5a61&pd_rd_r=c0be6180-bace-4950-a8c1-bae0db3e5ab4&s=apparel&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&th=1&psc=1",

      features:
        "TACVASEN Men's Lightweight Jacket Casual Spring Fall Windbreaker Bomber Zip Up Coat With Pocket",

      specifications: {
        CareInstructions: "Hand Wash Only",
      },
    },
    {
      id: 36,
      name: "Bomber Jacket",
      brand: "jacket",
      price: ["$42"],
      oldPrice: [""],
      image: "/img/ms108.png",
      images: ["/img/ms108.png", "/img/ms109.jpg", "/img/ms110.jpg"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/dp/B07VQJ8QGP/ref=sspa_dk_detail_2?psc=1&pd_rd_i=B07VQJ8QGP&pd_rd_w=1ncPg&content-id=amzn1.sym.c4606765-78ec-444e-9319-716ceb6c5a61&pf_rd_p=c4606765-78ec-444e-9319-716ceb6c5a61&pf_rd_r=GG58RT8RMF4A6JQNSCT6&pd_rd_wg=NQOkW&pd_rd_r=e6836639-396f-4dd4-9a3c-4cc19178aca8&s=apparel&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM",

      features:
        "TACVASEN Men's Jackets-Bomber Jacket Fall Winter Warm Windbreaker Full Zip Casual Padded Coats",

      specifications: {
        FabricType: "Polyester",
        CareInstructions: "Hand Wash Only",
      },
    },
    {
      id: 37,
      name: "Bomber Jacket",
      brand: "jacket",
      price: ["$39"],
      oldPrice: [""],
      image: "/img/ms111.png",
      images: ["/img/ms112.png", "/img/ms113.jpg", "/img/ms114.jpg"],

      model: {},

      stock: "in-stock",
      link: "https://www.amazon.com/dp/B0CJ8RQCH7/ref=sspa_dk_detail_5?pd_rd_i=B0CJ8RQCH7&pd_rd_w=lB3jn&content-id=amzn1.sym.c4606765-78ec-444e-9319-716ceb6c5a61&pf_rd_p=c4606765-78ec-444e-9319-716ceb6c5a61&pf_rd_r=CKG4ZFTPZ3CC24ADR7XB&pd_rd_wg=8noNP&pd_rd_r=9168cbf6-1a87-4632-9bb4-63aea4692f90&s=apparel&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWxfdGhlbWF0aWM&th=1&psc=1",

      features:
        "TACVASEN Men's Bomber Jackets Thermal Quilted Jacket Water Resistant Warm Winter Coats",

      specifications: {
        FabricType: "Polyester",
        CareInstructions: "Hand Wash Only",
      },
    },
    // Your other product data...
  ];

  // Filter products based on the selected filter
  const filteredProducts =
    selectedFilter === "All"
      ? products
      : products.filter((product) => product.brand === selectedFilter);

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const displayedProducts = filteredProducts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const scrollToProductsContainer = () => {
    if (productsContainerRef.current) {
      const offset = -220;
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

    setLoading(true);
    setCurrentPage(page);

    setTimeout(() => {
      setLoading(false);
      scrollToProductsContainer();
    }, 500);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedFilter]);

  useEffect(() => {
    if (currentPage !== 1 || selectedFilter !== "All") {
      scrollToProductsContainer();
    }
  }, [currentPage, selectedFilter]);

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
    <div className="products-container">
      <h2>Top Brand Products</h2>
      {/* Filter Buttons */}
      <div className="filter-buttons">
        {["All", "jacket", "Samsung", "Xiaomi", "Vivo", "OnePlus", "Oppo"].map(
          (filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFilter(filter)}
              className={`filter-button ${
                selectedFilter === filter ? "active" : ""
              }`}
            >
              {filter}
            </button>
          )
        )}
      </div>
      {loading && <div className="loading-spinner"></div>}
      <div
        className={`products-grid ${loading ? "loading" : ""}`}
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
                  style={{ fontSize: "14px", display: "none" }}
                  className="product-model"
                >
                  {product.model.GB && `${product.model.GB}`}{" "}
                  {product.model.color && `, ${product.model.color}`}
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
                    navigate(`/product/${product.id}`, { state: { product } });
                  }}
                >
                  View Details
                </button>
                {product.stock === "in-stock" ? (
                  <button
                    className="btn add-to-cart"
                    onClick={(e) => {
                      e.stopPropagation();
                      addToCart({
                        ...product,
                        selectedColor: product.model.color,
                        selectedStorage: product.model.GB,
                        price: product.price[0],
                        quantity: 1,
                      });
                      showAlert();
                    }}
                  >
                    Add to Cart
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

      {filteredProducts.length > itemsPerPage && (
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
  );
}

export default BrandProducts;
