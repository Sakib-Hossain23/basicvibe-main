import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/BrandProducts.css";

function MenShoes2({ addToCart }) {
  const [alertVisible, setAlertVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
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
      id: 16,
      name: "Tennis Shoes",
      brand: "Shoes",
      subBrand: "Men's Sneakers",
      price: ["৳4200"],
      oldPrice: [""],
      image: "/img/ms60.jpg",
      images: ["/img/ms60.jpg", "/img/ms61.jpg", "/img/ms62.jpg"],
      sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],

      model: {},

      stock: "in-stock",

      features:
        "Mens Slip On Wide Walking Shoes Memory Foam Runnning Tennis Shoes Lightweight Breathable Casual Sneakers",
      colors: ["Light Grey"],
      specifications: {
        SoleMaterial: "Phylon",
        OuterMaterial: "Mesh",
        ClosureType: "Pull-On",
      },
    },

    {
      id: 17,
      name: "Hype Sneaker",
      brand: "Shoes",
      subBrand: "Men's Sneakers",
      price: ["৳4100"],
      oldPrice: [""],
      image: "/img/ms55.png",
      images: ["/img/ms55.png", "/img/ms56.jpg", "/img/ms57.jpg"],
      sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],

      model: {},

      stock: "in-stock",

      features:
        "Skechers Men's Hands Free Slip-ins Bobs Squad Chaos-Daily Hype Sneaker",

      colors: ["Grey"],

      specifications: {
        Origin: "Imported",
        SoleMaterial: "Synthetic Rubber",
        ShaftHeight: "Ankle",
        OuterMaterial: "Engineered knit",
      },
    },
    {
      id: 18,
      name: "Sneakers",
      brand: "Shoes",
      subBrand: "Men's Sneakers",
      price: ["৳2300"],
      oldPrice: [""],
      image: "/img/ms52.jpg",
      images: ["/img/ms52.jpg", "/img/ms53.jpg", "/img/ms54.jpg"],
      sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],

      model: {},

      stock: "in-stock",

      features:
        "kufeiti Men's Canvas Black Casual Shoes Sneakers Low Top Lace Up Walking Shoes Sneakers for Men",
      colors: ["Black"],

      specifications: {
        SoleMaterial: "Rubber",
        OuterMaterial: "Canvas",
        ClosureType: "Lace-Up",
      },
    },

    {
      id: 19,
      name: "Dress Shoes",
      brand: "Shoes",
      subBrand: "Men's Dress Shoes",
      price: ["৳3340"],
      oldPrice: [""],
      image: "/img/ms90.png",
      images: ["/img/ms90.png", "/img/ms91.jpg", "/img/ms92.jpg"],
      sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],

      model: {},

      stock: "in-stock",

      features: "Men's Casual Oxfords Dress Shoes Business Formal Sneakers",
      colors: ["Brown"],

      specifications: {
        SoleMaterial: "Rubber",
        OuterMaterial: "Polyurethane (PU)",
        ClosureType: "Lace-Up",
      },
    },

    {
      id: 20,
      name: "Walking Shoes",
      brand: "Shoes",
      subBrand: "Men's Sneakers",
      price: ["৳3390"],
      oldPrice: [""],
      image: "/img/ms66.png",
      images: ["/img/ms66.png", "/img/ms67.jpg", "/img/ms68.jpg"],
      sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],

      model: {},

      stock: "in-stock",

      features:
        "Mens Wide Sneakers Walking Shoes - Wide Slip on Tennis Shoes,Lightweight Breathable Comfortable Running Shoes for Athletic Workout Gym Jogging and Casual Wear Wide Width",
      colors: ["Khaki"],
      specifications: {
        SoleMaterial: "Phylon",
        OuterMaterial: "Knit",
        ClosureType: "Pull-On",
        WaterResistanceLevel: "Not Water Resistant",
      },
    },

    {
      id: 21,
      name: "Walking Shoes",
      brand: "Shoes",
      subBrand: "Men's Sneakers",
      price: ["৳6690"],
      oldPrice: [""],
      image: "/img/ms69.png",
      images: ["/img/ms69.png", "/img/ms70.jpg", "/img/ms71.jpg"],
      sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],

      model: {},

      stock: "in-stock",

      features:
        "FitVille Extra Wide Walking Shoes for Men Wide Width, Hook and Loop Orthopedic Sneakers for Swollen Feet Neuropathy - Rebound Core V8",
      colors: ["Beige"],
      specifications: {
        SoleMaterial: "Rubber",
        OuterMaterial: "Mesh",
        ClosureType: "Hook & Loop",
        WaterResistanceLevel: "Not Water Resistant",
      },
    },

    {
      id: 22,
      name: "Walking Shoes",
      brand: "Shoes",
      subBrand: "Men's Sneakers",
      price: ["৳9950"],
      oldPrice: [""],
      image: "/img/ms72.png",
      images: ["/img/ms72.png", "/img/ms73.jpg", "/img/ms74.jpg"],
      sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],

      model: {},

      stock: "in-stock",

      features:
        "FitVille Men's Walking Shoes Wide Width Diabetic Shoes Orthopedic Sneaker Hook and Loop Running Shoes for Flat Feet Plantar Fasciitis - Rebound Core V7",
      colors: ["Moon Gray"],
      specifications: {
        SoleMaterial: "Rubber",
        OuterMaterial: "Mesh",
        ClosureType: "Hook & Loop",
        WaterResistanceLevel: "Not Water Resistant",
      },
    },
    {
      id: 23,
      name: "Leather Shoes",
      brand: "Shoes",
      subBrand: "Men's Dress Shoes",
      price: ["৳9920"],
      oldPrice: [""],
      image: "/img/ms46.png",
      images: ["/img/ms46.png", "/img/ms47.png", "/img/ms48.png"],
      sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],

      model: {},

      stock: "in-stock",

      features:
        "Gunnar and Troy Sentinel Soft Leather Mens Dress Shoes | Classic Lace-up Wingtip Oxford Shoes | Classic Modern Leather Shoes for Men",
      colors: ["Black"],
      specifications: {
        SoleMaterial: "Ethylene Vinyl Acetate",
        OuterMaterial: "Leather",
        ClosureType: "Lace-Up",
      },
    },

    {
      id: 24,
      name: "Dress Shoes",
      brand: "Shoes",
      subBrand: "Men's Dress Shoes",
      price: ["৳4430"],
      oldPrice: [""],
      image: "/img/ms49.png",
      images: ["/img/ms49.png", "/img/ms50.png", "/img/ms51.png"],
      sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],

      model: {},

      stock: "in-stock",

      features:
        "Gunnar and Troy Thorsson Oxford Mens Dress Shoes | PU Leather Shoes for Men | Classic Wingtip Oxford for Men | Cushioned Dual Density Footbed Tuxedo Shoes | Ironhide Black",
      colors: ["Ironhide Black"],
      specifications: {
        SoleMaterial: "Rubber",
        OuterMaterial: "Faux Leather",
        ClosureType: "Lace-Up",
      },
    },
    {
      id: 25,
      name: "Walking Shoes",
      brand: "Shoes",
      subBrand: "Men's Sneakers",
      price: ["৳4420"],
      oldPrice: [""],
      image: "/img/ms63.png",
      images: ["/img/ms63.png", "/img/ms64.jpg", "/img/ms65.jpg"],
      sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],

      model: {},

      stock: "in-stock",

      features:
        "Walking Shoes for Men Sneakers - Slip on Memory Foam Running Tennis Shoes for Athletic Workout Gym Jogging Indoor Outdoor Lightweight Breathable Casual Sneakers",
      colors: ["Ironhide Black"],
      specifications: {
        SoleMaterial: "MD",
        OuterMaterial: "Knitted, MD",
        ClosureType: "Pull-On",
      },
    },

    {
      id: 26,
      name: "Walking Shoes",
      brand: "Shoes",
      subBrand: "Men's Sneakers",
      price: ["৳3480"],
      oldPrice: [""],
      image: "/img/ms75.png",
      images: ["/img/ms75.png", "/img/ms76.jpg", "/img/ms77.jpg"],
      sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],

      model: {},

      stock: "in-stock",

      features:
        "Bruno Marc Men's KnitFlex Breeze Mesh Sneakers Oxfords Lace-Up Lightweight Casual Walking Shoes",
      colors: ["Black"],
      specifications: {
        FabricType: "100% Textile",
        Origin: "Imported",
        SoleMaterial: "Ethylene Vinyl Acetate",
        OuterMaterial: "Textile",
      },
    },

    {
      id: 27,
      name: "Walking Sneakers",
      brand: "Shoes",
      subBrand: "Men's Sneakers",
      price: ["৳2250"],
      oldPrice: [""],
      image: "/img/ms78.png",
      images: ["/img/ms78.png", "/img/ms79.jpg", "/img/ms80.jpg"],
      sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],

      model: {},

      stock: "in-stock",

      features:
        "Mens Casual Dress Oxfords Shoes Fashion Mesh Work Business Walking Sneakers Comfortable Lightweight Soft Sole",
      colors: ["Dark Blue"],
      specifications: {
        SoleMaterial: "Ethylene Vinyl Acetate",
        OuterMaterial: "Textile",
        ClosureType: "Lace-Up",
      },
    },

    {
      id: 28,
      name: "Sneakers",
      brand: "Shoes",
      subBrand: "Men's Sneakers",
      price: ["৳3550"],
      oldPrice: [""],
      image: "/img/ms81.png",
      images: ["/img/ms81.png", "/img/ms82.jpg", "/img/ms83.jpg"],
      sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],

      model: {},

      stock: "in-stock",

      features: "Bruno Marc Men's Rivera Oxfords Shoes Sneakers",
      colors: ["Black"],
      specifications: {
        FabricType: "Textile",
        SoleMaterial: "Rubber",
        OuterMaterial: "Fabric/Polyurethane",
        ClosureType: "Lace-Up",
      },
    },
    {
      id: 29,
      name: "Mesh Sneakers",
      brand: "Shoes",
      subBrand: "Men's Sneakers",
      price: ["৳2260"],
      oldPrice: [""],
      image: "/img/ms84.png",
      images: ["/img/ms84.png", "/img/ms85.jpg", "/img/ms86.jpg"],
      sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],

      model: {},

      stock: "in-stock",

      features:
        "Mens Mesh Sneakers Oxfords Lace-Up Lightweight Casual Walking Shoes Fashion Sneakers Shoes",
      colors: ["White"],
      specifications: {
        SoleMaterial: "Ethylene Vinyl Acetate",
        OuterMaterial: "Fabric",
        ClosureType: "Lace-Up",
      },
    },

    {
      id: 30,
      name: "Mesh Sneakers",
      brand: "Shoes",
      subBrand: "Men's Sneakers",
      price: ["৳3650"],
      oldPrice: [""],
      image: "/img/ms87.png",
      images: ["/img/ms87.png", "/img/ms88.jpg", "/img/ms89.jpg"],
      sizes: ["US 7", "US 8", "US 9", "US 10", "US 11", "US 12"],

      model: {},

      stock: "in-stock",

      features:
        "Bruno Marc Men's KnitFlex Breeze Mesh Sneakers Oxfords Lace-Up Lightweight Casual Walking Shoes",
      colors: ["Khaki"],
      specifications: {
        SoleMaterial: "Ethylene Vinyl Acetate",
        OuterMaterial: "Textile",
        ClosureType: "Lace-Up",
        WaterResistanceLevel: "Not Water Resistant",
      },
    },
  ];

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
    setLoading(true);
    setSelectedFilter(filter);
    setCurrentPage(1);

    setTimeout(() => {
      setLoading(false);
      scrollToProductsContainer();
    }, 500);
  };

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
    const isViewDetailsButton = e.target.closest(".btn.view-details");
    if (!isViewDetailsButton && product.stock === "out-of-stock") {
      e.preventDefault();
      e.stopPropagation();
      return;
    }
    navigate(`/product/${product.id}`, { state: { product } });
  };

  return (
    <div className="wrapper">
      <div className="products-container" style={{ marginTop: "78px" }}>
        <h2>Men's Shoes Collection</h2>
        <div className="filter-buttons">
          {["All", "Men's Sneakers", "Men's Dress Shoes"].map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`filter-button ${
                selectedFilter === filter ? "active" : ""
              }`}
              disabled={loading}
              style={{
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: selectedFilter === filter ? "bold" : "bold",
              }}
            >
              {filter === "Men's Sneakers"
                ? "Sneakers"
                : filter === "Men's Dress Shoes"
                ? "Dress Shoes"
                : filter}
            </button>
          ))}
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
                <p style={{ fontSize: "12px", color: "#666" }}>
                  <span style={{ display: "none" }}>{product.brand}</span>
                  {product.subBrand && ` ${product.subBrand}`}
                </p>
                <div>
                  <p className="product-price">
                    {Array.isArray(product.price)
                      ? product.price[0]
                      : product.price}{" "}
                    {product.oldPrice && (
                      <span className="old-price">
                        {Array.isArray(product.oldPrice)
                          ? product.oldPrice[0]
                          : product.oldPrice}
                      </span>
                    )}
                  </p>
                </div>
                <div className="product-buttons">
                  <button
                    className="btn view-details"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(`/product/${product.id}`, {
                        state: { product },
                      });
                    }}
                    style={{
                      backgroundColor: "#f27f20",
                      color: "#ffffff",
                      border: "none",
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

export default MenShoes2;
