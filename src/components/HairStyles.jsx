import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../assets/styles/BrandProducts.css";

function Hairstyles({ addToCart }) {
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
      id: 58,
      name: "44 Pieces Accessories",
      brand: "Prom",
      subBrand: "Prom Hairstyles",
      price: ["৳990"],
      oldPrice: [""],
      image: "/img/ms177.jpg",
      images: ["/img/ms177.jpg", "/img/ms178.jpg", "/img/ms179.jpg"],

      model: {},

      stock: "out-of-stock",
      features:
        "44 Pieces Wedding Hair Accessories: Faux Pearl Crystal Comb Clips, U-shaped Flower Rhinestone Pearl Hair Clips for Bride and Bridesmaids (Classic Style)",

      specifications: {
        Material: "Metal",
        Brand: "Maitys",
        HairType: "fine, All",
        Size: "Small (44 Count)",
        PowerSource: "Manual",
      },
    },
    {
      id: 59,
      name: "5 Pieces Accessories",
      brand: "Prom",
      subBrand: "Prom Hairstyles",
      price: ["৳900"],
      oldPrice: [""],
      image: "/img/ms180.jpg",
      images: ["/img/ms180.jpg", "/img/ms181.jpg", "/img/ms182.jpg"],

      model: {},

      stock: "in-stock",
      features:
        "5 Pieces Bride Hair Pins Rhinestone Bridal Hair Piece for Women Crystal Hair Accessories for Bride Bridesmaids Flower Girls(Silver)",

      specifications: {
        Brand: "LAPOHI",
        HairType: "All",
        Color: "Silver",
        AgeRangeDescription: "Adult",
        Embellishment: "Rhinestone",
      },
    },
    {
      id: 60,
      name: "JAKAWIN Pearl",
      brand: "Prom",
      subBrand: "Prom Hairstyles",
      price: ["৳900"],
      oldPrice: [""],
      image: "/img/ms185.jpg",
      images: ["/img/ms185.jpg", "/img/ms183.jpg", "/img/ms184.jpg"],

      model: {},

      stock: "in-stock",
      features:
        "JAKAWIN Pearl Wedding Hair Vine Silver Rhinestone Bridal Prom Hair Piece Accessories for Women HV192 (1 Silver)",

      description: `• High-Quality Material: Bridal hair vine is crafted with pearls, crystal rhinestones, and durable alloy for a stunning, long-lasting design.
• Elegant Color Options: Available in silver, rose gold, and gold, these pearl hair accessories offer a beautiful and elegant touch to any look.
• Perfect for Special Occasions: This hair jewelry for women is ideal for weddings, engagements, and proms, and is sure to win you many compliments.
• Thoughtful Gift Idea: Prom hair accessories make wonderful gifts for moms, daughters, sisters, and best friends—bringing joy with their delicate beauty.
• Versatile and Stylish: The bride headpiece can enhance any hairstyle, adding a delicate sparkle to an up-do or any formal style effortlessly.
`,
    },

    {
      id: 61,
      name: "Wedding Hair Comb",
      brand: "Prom",
      subBrand: "Prom Hairstyles",
      price: ["৳650"],
      oldPrice: [""],
      image: "/img/ms186.jpg",
      images: ["/img/ms186.jpg", "/img/ms187.jpg", "/img/ms188.jpg"],

      model: {},

      stock: "in-stock",
      features:
        "Casdre Crystal Bride Wedding Hair Comb Pearl Bridal Hair Piece Hair Accessories for Women and Girls (A Silver)",

      specifications: {
        Material: "Pearl, Crystal",
        Brand: "CASDRE",
        HairType: "All",
        Size: "Small",
        PowerSource: "Manual",
      },
    },
    {
      id: 62,
      name: "CASDRE Flower",
      brand: "Prom",
      subBrand: "Prom Hairstyles",
      price: ["৳780"],
      oldPrice: [""],
      image: "/img/ms189.jpg",
      images: ["/img/ms189.jpg", "/img/ms190.jpg", "/img/ms191.jpg"],

      model: {},

      stock: "in-stock",
      features:
        "CASDRE Flower Bride Wedding Hair Vine Pearl Bridal Headpiece Leaf Hair Accessories Hair Piece for Women and Girls (A Silver)",

      specifications: {
        Color: "A Silver",
        AgeRangeDescription: "Adult",
        Occasion: "Wedding",
        Material: "Crystal",
        NumberOfItems: "1",
      },
    },
    {
      id: 63,
      name: "2Pcs Rhinestone",
      brand: "Prom",
      subBrand: "Prom Hairstyles",
      price: ["৳800"],
      oldPrice: [""],
      image: "/img/ms192.jpg",
      images: ["/img/ms192.jpg", "/img/ms193.jpg", "/img/ms194.jpg"],

      model: {},

      stock: "in-stock",
      features:
        "2Pcs Rhinestone Hair Clips Crystal Pearl Hair Barrettes for Women Wedding Bridesmaid Flower Hair Accessories Jewerly for Bridal,Wedding,Party,Prom (Gold Gold)",

      specifications: {
        Brand: "AOREAS",
        HairType: "All",
        Color: "Gold+Gold",
        AgeRangeDescription: "Adult",
        Style: "Classic",
      },
    },
    {
      id: 64,
      name: "10 Pcs Mini Pearl ",
      brand: "Prom",
      subBrand: "Prom Hairstyles",
      price: ["৳700"],
      oldPrice: [""],
      image: "/img/ms195.jpg",
      images: ["/img/ms195.jpg", "/img/ms196.jpg", "/img/ms197.jpg"],

      model: {},

      stock: "in-stock",
      features:
        "10 Pcs Small Mini Pearl Claw Clips with Flower Design, Sweet Artificial Bangs Clips Decorative Hair Accessories for Women Girls",

      specifications: {
        Brand: "LINXI",
        HairType: "curly, All",
        Color: "Golden,White",
        AgeRangeDescription: "Adult",
        Style: "Elegant",
      },
    },

    {
      id: 65,
      name: "6 Pcs Bridal Hair Pins",
      brand: "Prom",
      subBrand: "Prom Hairstyles",
      price: ["৳900"],
      oldPrice: [""],
      image: "/img/ms198.jpg",
      images: ["/img/ms198.jpg", "/img/ms199.jpg", "/img/ms200.jpg"],

      model: {},

      stock: "in-stock",
      features:
        "6 Pcs Bridal Hair Pins, Gorgeous Rhinestone Wedding Hair Clips with Crystal Pearl Flowers, Silver Leaf Wedding Hairpin Bride Hair Clip for Women Bridesmaids Party Dance Prom Birthday Favors",

      specifications: {
        Brand: "WYVAS",
        HairType: "All",
        Color: "Silver",
        AgeRangeDescription: "Adult",
        Style: "Modern",
      },
    },
    {
      id: 66,
      name: "4Pcs Rhinestone",
      brand: "Prom",
      subBrand: "Prom Hairstyles",
      price: ["৳850"],
      oldPrice: [""],
      image: "/img/ms201.jpg",
      images: ["/img/ms201.jpg", "/img/ms202.jpg", "/img/ms203.jpg"],

      model: {},

      stock: "in-stock",
      features:
        "4Pcs Rhinestone Hair Clips Silver Gold Crystal Prom Barrettes Fancy Flower French Hairpins Sparkle Wedding Prom First Communion Accessories for Women Girls Bridal Thick Long Hair",

      specifications: {
        Brand: "Evherv",
        HairType: "All",
        Color: "Silver",
        AgeRangeDescription: "Adult",
        Style: "Classic",
      },
    },
    {
      id: 67,
      name: "SWEETV Crystal",
      brand: "Prom",
      subBrand: "Prom Hairstyles",
      price: ["৳750"],
      oldPrice: [""],
      image: "/img/ms204.jpg",
      images: ["/img/ms204.jpg", "/img/ms205.jpg", "/img/ms206.jpg"],

      model: {},

      stock: "in-stock",
      features:
        "SWEETV Crystal Bride Wedding Hair Comb Silver Rhinestone Hair Pieces Leaf Bridal Side Combs Headpiece for Women and Girls",

      specifications: {
        Material: "Metal",
        Brand: "SWEETV",
        HairType: "All",
        Size: "6.29*12.59 Inch",
        PowerSource: "Manual",
      },
    },
    {
      id: 68,
      name: "SWEETV Wedding",
      brand: "Prom",
      subBrand: "Prom Hairstyles",
      price: ["৳760"],
      oldPrice: [""],
      image: "/img/ms207.jpg",
      images: ["/img/ms207.jpg", "/img/ms208.jpg", "/img/ms209.jpg"],

      model: {},

      stock: "in-stock",
      features:
        "SWEETV Wedding Hair Comb Bridal Hair Pieces Rhinestone Bride Hair Clips Crystal Bridal Headband Elegant Hair Vine Sparkling Wedding Hair Accessories for Women and Girls",

      specifications: {
        Brand: "SWEETV",
        Color: "Silver-B",
        AgeRangeDescription: "Adult",
        UnitCount: "1.0 Count",
        NumberOfItems: "1",
      },
    },
    {
      id: 69,
      name: "SWEETV Bridal",
      brand: "Prom",
      subBrand: "Prom Hairstyles",
      price: ["৳870"],
      oldPrice: [""],
      image: "/img/ms210.jpg",
      images: ["/img/ms210.jpg", "/img/ms211.jpg", "/img/ms212.jpg"],

      model: {},

      stock: "in-stock",
      features:
        "SWEETV Bridal Hair Comb, Rhinestone & Alloy Wedding Hair Accessories, Pearl Bridal Hair Pieces, Hair Side Comb for Women and Girls",

      specifications: {
        Brand: "SWEETV",
        HairType: "All",
        Size: "5.9*2.36 Inch",
        PowerSource: "Manual",
        NumberOfItems: "1",
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
        <h2>Hairstyles</h2>
        {/* Filter Buttons */}
        <div className="filter-buttons">
          {[].map((filter) => (
            <button
              key={filter}
              onClick={() => handleFilterChange(filter)}
              className={`filter-button ${
                selectedFilter === filter ? "active" : ""
              }`}
              disabled={filterLoading}
              style={{
                fontFamily: "'Montserrat', sans-serif", // Add your desired font family here
                fontWeight: selectedFilter === filter ? "bold" : "bold",
                // Add any other consistent styles you want to maintain
              }}
            >
              {filter}
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

export default Hairstyles;
