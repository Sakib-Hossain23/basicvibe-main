import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/BrandProducts.css";

function MenClothes({ addToCart }) {
  const [alertVisible, setAlertVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [filterLoading, setFilterLoading] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState("All");
  const [outOfStockClicked, setOutOfStockClicked] = useState(null);

  const itemsPerPage = 12;
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
      subBrand: "Men's Jacket",
      price: ["৳3350"],
      oldPrice: [""],
      image: "/img/ms93.png",
      images: ["/img/ms93.png", "/img/ms94.jpg", "/img/ms95.jpg"],

      model: {},

      stock: "in-stock",

      features:
        "TACVASEN Men's Bomber Jacket Lightweight Casual Spring Fall Windbreaker Zip Up Coat with Pocket",
      colors: ["Black"],
      sizes: ["Small", "Medium", "Large", "X-Large", "XX-Large"],
      specifications: {
        FabricType: "Polyester",
        CareInstructions: "Machine Wash",
      },
    },

    {
      id: 32,
      name: "Lightweight Jacket",
      brand: "jacket",
      subBrand: "Men's Jacket",
      price: ["৳3450"],
      oldPrice: [""],
      image: "/img/ms96.png",
      images: ["/img/ms96.png", "/img/ms97.jpg", "/img/ms98.jpg"],

      model: {},

      stock: "in-stock",

      features:
        "TACVASEN Men's Lightweight Jacket Casual Spring Fall Windbreaker Bomber Zip Up Coat With Pocket",
      colors: ["Black"],
      sizes: ["Small", "Medium", "Large", "X-Large", "XX-Large"],
      specifications: {
        FabricType: "100% Polyester",
        CareInstructions: "Hand Wash Only",
      },
    },
    {
      id: 33,
      name: "Lightweight Jacket",
      brand: "jacket",
      subBrand: "Men's Jacket",
      price: ["৳3350"],
      oldPrice: [""],
      image: "/img/ms99.png",
      images: ["/img/ms99.png", "/img/ms100.jpg", "/img/ms101.jpg"],

      model: {},

      stock: "in-stock",

      features:
        "TACVASEN Men's Lightweight Jacket Spring Bomber Fall Windbreaker Casual Stylish Coats with Pockets",
      colors: ["Light Grey"],
      sizes: ["Small", "Medium", "Large", "X-Large", "XX-Large"],
      specifications: {
        FabricType: "Polyester",
        CareInstructions: "Hand Wash Only",
        Origin: "Imported",
      },
    },

    {
      id: 38,
      name: "T-Shirts",
      brand: "t-shirts",
      subBrand: "men's t-shirts",
      price: ["৳350"],
      oldPrice: [""],
      image: "/img/ms114.jpg",
      images: [
        "/img/ms114.jpg",
        "/img/ms115.jpg",
        "/img/ms116.jpg",
        "/img/ms117.jpg",
        "/img/ms118.jpg",
      ],

      model: {},

      stock: "in-stock",

      features: "Gildan Men's Crew T-Shirts, Multipack, Style G1100",
      colors: ["Heather Navy"],
      sizes: ["Small", "Medium", "Large", "X-Large", "XX-Large"],
      specifications: {
        FabricType: "100% Cotton",
        CareInstructions: "Machine Wash",
        Origin: "Imported",
        ClosureType: "Pull On",
      },
    },

    {
      id: 41,
      name: "T-Shirts",
      brand: "t-shirts",
      subBrand: "men's t-shirts",
      price: ["৳320"],
      oldPrice: [""],
      image: "/img/ms125.png",
      images: ["/img/ms125.png", "/img/ms126.jpg", "/img/ms127.jpg"],

      model: {},

      stock: "in-stock",

      features:
        "Kingsted T-Shirts for Men Pack - Royally Comfortable - Super Soft Premium Fabric - Well-Crafted Classic Tee",
      colors: ["Light Teal"],
      sizes: ["Small", "Medium", "Large", "X-Large", "XX-Large"],
      specifications: {
        FabricType: "Polycotton",
        CareInstructions: "Machine Wash",
        Origin: "Imported",
        ClosureType: "Side-Seamed",
      },
    },

    {
      id: 39,
      name: "T-Shirts",
      brand: "t-shirts",
      subBrand: "men's t-shirts",
      price: ["৳450"],
      oldPrice: [""],
      image: "/img/ms119.png",
      images: ["/img/ms119.png", "/img/ms120.jpg", "/img/ms121.jpg"],

      model: {},

      stock: "in-stock",

      features:
        "Fresh Clean Threads Crew Neck T-Shirt - Pre Shrunk Soft Fitted Premium Tee - Men’s T- Cotton Poly",
      colors: ["Black"],
      sizes: ["Small", "Medium", "Large", "X-Large", "XX-Large"],
      specifications: {
        FabricType: "60% cotton / 40% polyester jersey knit 145gsm",
        CareInstructions: "Machine Wash",
        Origin: "Imported",
        ClosureType: "Pull On",
      },
    },

    {
      id: 40,
      name: "T-Shirts",
      brand: "t-shirts",
      subBrand: "men's t-shirts",
      price: ["৳460"],
      oldPrice: [""],
      image: "/img/ms122.png",
      images: ["/img/ms122.png", "/img/ms121.jpg", "/img/ms124.jpg"],

      model: {},

      stock: "in-stock",

      features:
        "JMIERR Mens 3 Pack Cotton Hipster Hip Hop Longline Crewneck T-Shirt",
      colors: ["Khaki"],
      sizes: ["Small", "Medium", "Large", "X-Large", "XX-Large"],
      specifications: {
        FabricType: "62%Polyester, 32%Cotton, 6%Elastane",
        CareInstructions: "Machine Wash",
        Origin:
          "We Use American Standard Size: S=(US 38), M=(US 40), L=(US 43), XL=(US 46), 2XL=(US 50), 3XL=(US 52), 4XL=(US 56), 5XL=(US 60).",
        ClosureType: "Pull On",
      },
    },

    {
      id: 37,
      name: "Bomber Jacket",
      brand: "jacket",
      subBrand: "Men's Jacket",
      price: ["৳3350"],
      oldPrice: [""],
      image: "/img/ms111.png",
      images: ["/img/ms111.png", "/img/ms112.jpg", "/img/ms113.jpg"],

      model: {},

      stock: "in-stock",

      features:
        "TACVASEN Men's Bomber Jackets Thermal Quilted Jacket Water Resistant Warm Winter Coats",
      colors: ["Black"],
      sizes: ["Small", "Medium", "Large", "X-Large", "XX-Large"],
      specifications: {
        FabricType: "Polyester",
        CareInstructions: "Hand Wash Only",
      },
    },

    {
      id: 34,
      name: "Bomber Jacket",
      brand: "jacket",
      subBrand: "Men's Jacket",
      price: ["৳3350"],
      oldPrice: [""],
      image: "/img/ms102.png",
      images: ["/img/ms102.png", "/img/ms103.jpg", "/img/ms104.jpg"],

      model: {},

      stock: "in-stock",

      features:
        "TACVASEN Men's Bomber Jacket Lightweight Casual Spring Fall Windbreaker Zip Up Coat with Pocket",
      colors: ["White"],
      sizes: ["Small", "Medium", "Large", "X-Large", "XX-Large"],
      specifications: {
        FabricType: "Polyester",
        CareInstructions: "Hand Wash Only",
      },
    },
    {
      id: 35,
      name: "Lightweight Jacket ",
      brand: "jacket",
      subBrand: "Men's Jacket",
      price: ["৳3450"],
      oldPrice: [""],
      image: "/img/ms105.png",
      images: ["/img/ms105.png", "/img/ms106.jpg", "/img/ms107.jpg"],

      model: {},

      stock: "in-stock",

      features:
        "TACVASEN Men's Lightweight Jacket Casual Spring Fall Windbreaker Bomber Zip Up Coat With Pocket",
      colors: ["White"],
      sizes: ["Small", "Medium", "Large", "X-Large", "XX-Large"],
      specifications: {
        CareInstructions: "Hand Wash Only",
      },
    },
    {
      id: 36,
      name: "Bomber Jacket",
      brand: "jacket",
      subBrand: "Men's Jacket",
      price: ["৳3350"],
      oldPrice: [""],
      image: "/img/ms108.png",
      images: ["/img/ms108.png", "/img/ms109.jpg", "/img/ms110.jpg"],

      model: {},

      stock: "in-stock",

      features:
        "TACVASEN Men's Jackets-Bomber Jacket Fall Winter Warm Windbreaker Full Zip Casual Padded Coats",
      colors: ["Black"],
      sizes: ["Small", "Medium", "Large", "X-Large", "XX-Large"],
      specifications: {
        FabricType: "Polyester",
        CareInstructions: "Hand Wash Only",
      },
    },

    {
      id: 42,
      name: "T-Shirts",
      brand: "t-shirts",
      subBrand: "men's t-shirts",
      price: ["৳320"],
      oldPrice: [""],
      image: "/img/ms128.png",
      images: ["/img/ms128.png", "/img/ms129.jpg", "/img/ms130.jpg"],

      model: {},

      stock: "in-stock",

      features: "Charles Wilson Men's 5 Pack Crew Neck T-Shirt",
      colors: ["Deep Rosewood"],
      sizes: ["Small", "Medium", "Large", "X-Large", "XX-Large"],
      specifications: {
        FabricType: "100% Cotton",
        CareInstructions: "Machine Wash",
        ClosureType: "Pull On",
        NeckStyle: "Crew Neck",
      },
    },
    {
      id: 43,
      name: "T-Shirts",
      brand: "t-shirts",
      subBrand: "men's t-shirts",
      price: ["৳320"],
      oldPrice: [""],
      image: "/img/ms131.png",
      images: ["/img/ms131.png", "/img/ms132.jpg", "/img/ms133.jpg"],

      model: {},

      stock: "in-stock",

      features:
        "COOFANDY Men's Short Sleeve T-Shirts Crew Neck Casual Summer T Shirts 1-3 Pack Basic Tee Shirt",
      colors: ["Army Green"],
      sizes: ["Small", "Medium", "Large", "X-Large", "XX-Large"],
      specifications: {
        FabricType: "Soft Fabric",
        CareInstructions: "Machine Wash",
        Origin: "Imported",
        ClosureType: "Pull On",
      },
    },
    {
      id: 44,
      name: "T-Shirts",
      brand: "t-shirts",
      subBrand: "men's t-shirts",
      price: ["৳350"],
      oldPrice: [""],
      image: "/img/ms134.png",
      images: ["/img/ms134.png", "/img/ms135.jpg", "/img/ms136.jpg"],

      model: {},

      stock: "in-stock",

      features:
        "COOFANDY Men's Henley Shirts Short Sleeve Casual Summer Basic T Shirt Soild Button Tee Top",
      colors: ["Black"],
      sizes: ["Small", "Medium", "Large", "X-Large", "XX-Large"],
      specifications: {
        FabricType: "Soft Fabric",
        CareInstructions: "Machine Wash",
        Origin: "Imported",
        ClosureType: "Button",
      },
    },
  ];

  // Filter products based on the selected filter
  const filteredProducts =
    selectedFilter === "All"
      ? products
      : selectedFilter === "Shoes"
      ? products.filter((product) => product.brand === "Shoes")
      : products.filter((product) => product.subBrand === selectedFilter);

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

  const handleFilterChange = (filter) => {
    setFilterLoading(true);
    setSelectedFilter(filter);

    setTimeout(() => {
      setFilterLoading(false);
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
    const isOutOfStockButton = e.target.closest(".btn.out-of-stock");
    if (isOutOfStockButton) {
      e.preventDefault();
      e.stopPropagation();
      handleOutOfStockClick(product.id);
      return;
    }
    const isViewDetailsButton = e.target.closest(".btn.buy-now");
    if (!isViewDetailsButton && product.stock === "out-of-stock") {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    navigate(`/product/${product.id}`, { state: { product } });
  };

  const handleAddToCart = (product, e) => {
    e.stopPropagation();

    // For t-shirts, redirect to product details page instead of adding to cart directly
    if (product.sizes) {
      navigate(`/product/${product.id}`, { state: { product } });
      return;
    }

    // Extract the first price if price is an array, otherwise use the price directly
    const price = Array.isArray(product.price)
      ? product.price[0]
      : product.price;

    // Remove dollar sign if present and convert to number
    const numericPrice = parseFloat(price.replace(/[^0-9.-]+/g, ""));

    addToCart({
      id: product.id,
      name: product.name,
      brand: product.brand,
      price: numericPrice,
      displayPrice: price, // Keep the original formatted price
      image: product.image,
      quantity: 1,
      stock: product.stock,
      model: product.model || {},
      selectedColor: product.model?.color || "",
      selectedStorage: product.model?.GB || "",
    });

    showAlert();
  };

  return (
    <div className="wrapper">
      <div className="products-container" style={{ marginTop: "78px" }}>
        <h2>Men's Clothes Collection</h2>
        {/* Filter Buttons */}
        <div className="filter-buttons">
          {["All", "Men's Jacket", "men's t-shirts"].map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`filter-button ${
                selectedFilter === filter ? "active" : ""
              }`}
              disabled={filterLoading}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: selectedFilter === filter ? "bold" : "bold",
              }}
            >
              {filter === "men's t-shirts"
                ? "T-shirts"
                : filter === "Men's Jacket"
                ? "Jackets"
                : filter}
            </button>
          ))}
        </div>

        {(loading || filterLoading) && <div className="loading-spinner"></div>}

        <div
          className={`products-grid ${
            loading || filterLoading ? "loading" : ""
          }`}
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
                <p style={{ fontSize: "12px", color: "#666" }}>
                  <span style={{ display: "none" }}>{product.brand}</span>
                  {product.subBrand && ` ${product.subBrand}`}
                </p>

                <div>
                  <p className="product-price">
                    {product.price}{" "}
                    {product.oldPrice && (
                      <span className="old-price">{product.oldPrice}</span>
                    )}
                  </p>
                </div>
                <div className="product-buttons">
                  <button
                    style={{
                      backgroundColor: "#f27f20",
                      color: "#ffffff",
                      border: "none",
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
              disabled={currentPage === 1 || loading}
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
                    disabled={loading}
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
              disabled={currentPage === totalPages || loading}
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

export default MenClothes;
