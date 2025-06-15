import React, { useState, useEffect, useCallback } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import "../assets/styles/ModalPage.css";
import RelatedProducts from "./RelatedProducts";

const colorMap = {
  Black: "#000000",
  "Light Grey": "#D3D3D3",
  White: "#FFFFFF",
  Khaki: "#C3B091",
  Brown: "#A52A2A",
  Beige: "#F5F5DC",
  "Moon Gray": "#D1D1D1",
  "Ironhide Black": "#2E2E2E",
  "Dark Blue": "#00008B",
  "Light Teal": "#20B2AA",
  "Deep Rosewood": "#65000B",
  "Army Green": "#4B5320",
  "Heather Navy": "#36454F",
  "Light Pink": "#FFB6C1",
  Blue: "#0000FF",
  Grey: "#808080",
  "Light Gray": "#D3D3D3",
};

const ModalPage = ({ addToCart, products }) => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const productFromState = location.state?.product;
  const productFromId = products.find((p) => p.id === parseInt(id));
  const product = productFromState || productFromId;

  const [selectedImage, setSelectedImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState("");
  const [selectedColor, setSelectedColor] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [oldPrice, setOldPrice] = useState(null);
  const [activeTab, setActiveTab] = useState("description");
  const [showWhatsAppChat, setShowWhatsAppChat] = useState(false);
  const [whatsAppMessage, setWhatsAppMessage] = useState("");
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [sizeGuideVisible, setSizeGuideVisible] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (product) {
      const images = product.images || [product.image];
      setSelectedImage(images[0]);
      setQuantity(1);
      setCurrentPrice(product.price?.[0] || 0);
      setOldPrice(product.oldPrice?.[0] || null);
      setCurrentImageIndex(0);

      const hasSpecifications =
        product.specifications &&
        Object.keys(product.specifications).length > 0;
      setActiveTab(hasSpecifications ? "specifications" : "description");

      // Automatically select the first color if only one exists
      if (product.colors?.length === 1) {
        setSelectedColor(product.colors[0]);
        // Set the corresponding image if available
        if (product.images && product.images.length >= 1) {
          setSelectedImage(product.images[0]);
        }
      }

      if (product.sizes?.length === 1) {
        setSelectedSize(product.sizes[0]);
      }

      setWhatsAppMessage(
        `Hi, I'm interested in the ${product.name} (Size: ${
          product.sizes?.join(", ") || "N/A"
        }). Can you tell me more about it?`
      );
    }
  }, [product, id]);

  useEffect(() => {
    if (selectedColor && product?.images) {
      const colorIndex = product.colors.indexOf(selectedColor);
      if (colorIndex !== -1 && product.images[colorIndex]) {
        setSelectedImage(product.images[colorIndex]);
        setCurrentImageIndex(colorIndex);
      }
    }
  }, [selectedColor, product]);

  const handleKeyDown = useCallback(
    (e) => {
      const images = product?.images || (product?.image ? [product.image] : []);
      if (images.length <= 1) return;

      if (e.key === "ArrowRight") {
        e.preventDefault();
        const nextIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(nextIndex);
        setSelectedImage(images[nextIndex]);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        const prevIndex =
          (currentImageIndex - 1 + images.length) % images.length;
        setCurrentImageIndex(prevIndex);
        setSelectedImage(images[prevIndex]);
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
      }
    },
    [currentImageIndex, product]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  const renderSizeGuide = () => {
    if (product.subBrand === "men's t-shirts" || product.brand === "t-shirt") {
      return (
        <>
          <h3>Men's T-Shirt Size Guide</h3>
          <table className="size-guide-table">
            <thead>
              <tr>
                <th>Size</th>
                <th>Chest (inches)</th>
                <th>Length (inches)</th>
                <th>EU Size</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Small</td>
                <td>34-36</td>
                <td>27</td>
                <td>46-48</td>
              </tr>
              <tr>
                <td>Medium</td>
                <td>38-40</td>
                <td>28</td>
                <td>50-52</td>
              </tr>
              <tr>
                <td>Large</td>
                <td>42-44</td>
                <td>29</td>
                <td>54-56</td>
              </tr>
              <tr>
                <td>X-Large</td>
                <td>46-48</td>
                <td>30</td>
                <td>58-60</td>
              </tr>
              <tr>
                <td>XX-Large</td>
                <td>50-52</td>
                <td>31</td>
                <td>62-64</td>
              </tr>
            </tbody>
          </table>
          <div className="size-guide-tips">
            <h4>How to measure:</h4>
            <p>1. Chest: Measure around the fullest part of your chest</p>
            <p>
              2. Length: Measure from the highest point of the shoulder to the
              bottom hem
            </p>
          </div>
        </>
      );
    } else if (
      product.subBrand === "Men's Shoes" ||
      product.brand === "Shoes"
    ) {
      return (
        <>
          <h3>Men's Shoe Size Guide</h3>
          <table className="size-guide-table">
            <thead>
              <tr>
                <th>US Size</th>
                <th>EU Size</th>
                <th>UK Size</th>
                <th>Inches</th>
                <th>CM</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>7</td>
                <td>40</td>
                <td>6</td>
                <td>9.25"</td>
                <td>23.5</td>
              </tr>
              <tr>
                <td>8</td>
                <td>41</td>
                <td>7</td>
                <td>9.5"</td>
                <td>24.1</td>
              </tr>
              <tr>
                <td>9</td>
                <td>42</td>
                <td>8</td>
                <td>9.875"</td>
                <td>25.1</td>
              </tr>
              <tr>
                <td>10</td>
                <td>43</td>
                <td>9</td>
                <td>10.2"</td>
                <td>25.9</td>
              </tr>
              <tr>
                <td>11</td>
                <td>44</td>
                <td>10</td>
                <td>10.5"</td>
                <td>26.7</td>
              </tr>
              <tr>
                <td>12</td>
                <td>45</td>
                <td>11</td>
                <td>10.875"</td>
                <td>27.6</td>
              </tr>
            </tbody>
          </table>
          <div className="size-guide-tips">
            <h4>How to measure:</h4>
            <p>1. Place your foot on a piece of paper and trace around it</p>
            <p>2. Measure the length from heel to toe</p>
            <p>3. Compare your measurement to the size chart</p>
          </div>
        </>
      );
    } else if (
      product.subBrand === "Men's Jacket" ||
      product.brand === "jacket"
    ) {
      return (
        <>
          <h3>Men's Jacket Size Guide</h3>
          <table className="size-guide-table">
            <thead>
              <tr>
                <th>Size</th>
                <th>Chest (inches)</th>
                <th>Waist (inches)</th>
                <th>Length (inches)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Small</td>
                <td>34-36</td>
                <td>28-30</td>
                <td>25-26</td>
              </tr>
              <tr>
                <td>Medium</td>
                <td>38-40</td>
                <td>32-34</td>
                <td>26-27</td>
              </tr>
              <tr>
                <td>Large</td>
                <td>42-44</td>
                <td>36-38</td>
                <td>27-28</td>
              </tr>
              <tr>
                <td>X-Large</td>
                <td>46-48</td>
                <td>40-42</td>
                <td>28-29</td>
              </tr>
              <tr>
                <td>XX-Large</td>
                <td>50-52</td>
                <td>44-46</td>
                <td>29-30</td>
              </tr>
            </tbody>
          </table>
          <div className="size-guide-tips">
            <h4>How to measure:</h4>
            <p>1. Chest: Measure around the fullest part of your chest</p>
            <p>2. Waist: Measure around your natural waistline</p>
            <p>
              3. Length: Measure from the base of the collar to the bottom hem
            </p>
          </div>
        </>
      );
    }
    return null;
  };

  const handleWhatsAppClick = () => {
    const phoneNumber = "+8801753847196";
    const encodedMessage = encodeURIComponent(whatsAppMessage);
    const whatsappUrl = isMobile
      ? `https://wa.me/${phoneNumber}?text=${encodedMessage}`
      : `https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleThumbnailClick = (image, index) => {
    setSelectedImage(image);
    setCurrentImageIndex(index);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleQuantityChange = (type) => {
    if (type === "decrement" && quantity > 1) {
      setQuantity(quantity - 1);
    } else if (type === "increment") {
      setQuantity(quantity + 1);
    }
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const generateCartItemId = () => {
    const colorPart = selectedColor
      ? `/${selectedColor.replace(/\s+/g, "/").toLowerCase()}`
      : "";
    const sizePart = selectedSize
      ? `-${selectedSize.replace(/\s+/g, "/").toLowerCase()}`
      : "";
    return `${product.id}${colorPart}${sizePart}`;
  };

  const handleAddToCart = () => {
    const finalColor =
      product.colors?.length === 1 ? product.colors[0] : selectedColor;

    if (product.colors?.length > 1 && !finalColor) {
      setAlertMessage("Please select a color");
      setAlertVisible(true);
      setTimeout(() => setAlertVisible(false), 5000);
      return;
    }

    if (product.sizes?.length > 0 && !selectedSize) {
      setAlertMessage("Please select a size");
      setAlertVisible(true);
      setTimeout(() => setAlertVisible(false), 5000);
      return;
    }

    const numericPrice = parseFloat(
      String(currentPrice).replace(/[^0-9.-]+/g, "")
    );

    let cartImage = selectedImage;
    if (product.colors?.length === 1 && product.images?.length >= 1) {
      cartImage = product.images[0];
    }

    const cartItem = {
      id: generateCartItemId(),
      productId: product.id,
      name: product.name,
      brand: product.brand,
      price: numericPrice,
      displayPrice: currentPrice,
      image: cartImage,
      quantity: quantity,
      selectedColor: finalColor,
      selectedSize: selectedSize,
      stock: product.stock,
      model: product.model || {},
      specifications: product.specifications,
      description: product.description,
      features: product.features,
    };

    addToCart(cartItem);

    setAlertMessage("Successfully added product");
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 4000);
  };

  const handleBuyNow = () => {
    const finalColor =
      product.colors?.length === 1 ? product.colors[0] : selectedColor;

    if (product.colors?.length > 1 && !finalColor) {
      setAlertMessage("Please select a color");
      setAlertVisible(true);
      setTimeout(() => setAlertVisible(false), 5000);
      return;
    }

    if (product.sizes?.length > 0 && !selectedSize) {
      setAlertMessage("Please select a size");
      setAlertVisible(true);
      setTimeout(() => setAlertVisible(false), 5000);
      return;
    }

    const numericPrice = parseFloat(
      String(currentPrice).replace(/[^0-9.-]+/g, "")
    );

    let cartImage = selectedImage;
    if (product.colors?.length === 1 && product.images?.length >= 1) {
      cartImage = product.images[0];
    }

    const cartItem = {
      id: generateCartItemId(),
      productId: product.id,
      name: product.name,
      brand: product.brand,
      price: numericPrice,
      displayPrice: currentPrice,
      image: cartImage,
      quantity: quantity,
      selectedColor: finalColor,
      selectedSize: selectedSize,
      stock: product.stock,
      model: product.model || {},
      specifications: product.specifications,
      description: product.description,
      features: product.features,
    };

    addToCart(cartItem);
    navigate("/cart");
  };

  const handleOutOfStockClick = () => {
    setAlertMessage("This product is currently out of stock");
    setAlertVisible(true);
    setTimeout(() => setAlertVisible(false), 5000);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleSizeGuide = () => {
    setSizeGuideVisible(!sizeGuideVisible);
  };

  if (!product) {
    return (
      <div className="modal-page-container">
        <p>Product not found. Please go back.</p>
      </div>
    );
  }

  const availableTabs = [];
  if (
    product.specifications &&
    Object.keys(product.specifications).length > 0
  ) {
    availableTabs.push("specifications");
  }
  if (product.description) {
    availableTabs.push("description");
  }
  if (product.warranty) {
    availableTabs.push("warranty");
  }

  const images = product.images || (product.image ? [product.image] : []);

  return (
    <>
      <div className="wrapper">
        <div className="modal-page-container">
          <div className="content-wrapper">
            <div className="left-section">
              <img
                src={selectedImage || product.image}
                alt={product.name}
                className="main-image"
                tabIndex="0"
              />
              <div className="thumbnails">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Thumbnail ${index + 1}`}
                    className={selectedImage === image ? "selected" : ""}
                    onClick={() => handleThumbnailClick(image, index)}
                  />
                ))}
              </div>
            </div>

            <div className="right-section">
              <h2 style={{ textAlign: "start" }} className="color">
                {product.name}
              </h2>
              <p
                className="price color"
                style={{ marginTop: "16px", marginBottom: "-6px" }}
              >
                {currentPrice}
                {oldPrice && (
                  <span
                    className="old-price color"
                    style={{ display: oldPrice ? "inline" : "none" }}
                  >
                    {oldPrice}
                  </span>
                )}
              </p>
              <p
                className={`stock-status ${product.stock}`}
                style={{ fontSize: "14px" }}
              >
                Status:{" "}
                <span
                  style={{
                    color: product.stock === "in-stock" ? "#28A745" : "red",
                    fontWeight: "bold",
                    lineHeight: "3",
                    fontSize: "14px",
                  }}
                >
                  {product.stock === "in-stock" ? "In Stock" : "Out of Stock"}
                </span>
              </p>

              {product.features && (
                <div
                  className="product-features"
                  style={{ margin: "16px 0", marginTop: "-15px" }}
                >
                  <h4
                    style={{
                      marginBottom: "8px",
                      fontSize: "16px",
                      fontWeight: "600",
                      color: "#333",
                    }}
                  >
                    Details:
                  </h4>
                  <h5
                    style={{
                      fontSize: "14px",
                      color: "#333",
                      lineHeight: "1.5",
                      marginTop: "0",
                      marginBottom: "-7px",
                    }}
                  >
                    {product.features}
                  </h5>
                </div>
              )}

              <div
                className={`whatsapp-chat-container ${
                  showWhatsAppChat ? "expanded" : ""
                }`}
                onClick={() => !showWhatsAppChat && setShowWhatsAppChat(true)}
              >
                {showWhatsAppChat ? (
                  <div className="whatsapp-chat-box">
                    <div className="whatsapp-header">
                      <div className="whatsapp-info">
                        <div>
                          <h4>WhatsApp Support</h4>
                          <p>Typically replies within minutes</p>
                        </div>
                      </div>
                      <button
                        className="close-chat"
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowWhatsAppChat(false);
                        }}
                      >
                        ×
                      </button>
                    </div>
                    <div className="whatsapp-message-box">
                      <textarea
                        value={whatsAppMessage}
                        onChange={(e) => setWhatsAppMessage(e.target.value)}
                        placeholder="Type your message..."
                      />
                    </div>
                    <button
                      className="send-whatsapp-buttonn"
                      onClick={handleWhatsAppClick}
                    >
                      {isMobile ? "Open WhatsApp" : "Open WhatsApp"}
                    </button>
                  </div>
                ) : (
                  <div className="whatsapp-buttonn">
                    {isMobile ? "Message on WhatsApp" : "Message on WhatsApp"}
                  </div>
                )}
              </div>

              {product.colors?.length > 0 && (
                <div className="options">
                  <div className="size-header">
                    <p className="color">
                      <strong>Colors:</strong>
                    </p>
                  </div>
                  <div className="color-options">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        className={`color-option-button ${
                          selectedColor === color ? "selected" : ""
                        } ${
                          product.stock === "out-of-stock" ? "disabled" : ""
                        }`}
                        onClick={() => setSelectedColor(color)}
                        disabled={product.stock === "out-of-stock"}
                      >
                        <span
                          className="color-circle"
                          style={{
                            backgroundColor:
                              colorMap[color] || color.toLowerCase(),
                          }}
                        ></span>
                        {color}
                      </button>
                    ))}
                  </div>
                  {selectedColor && (
                    <p className="selected-size-text">
                      Selected Color: <strong>{selectedColor}</strong>
                    </p>
                  )}
                </div>
              )}

              {product.sizes?.length > 0 && (
                <div className="options">
                  <div className="size-header">
                    <p className="color">
                      <strong>Size:</strong>
                    </p>
                    <button
                      className="size-guide-button"
                      onClick={toggleSizeGuide}
                    >
                      Size Guide
                    </button>
                  </div>
                  <div className="size-options">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        className={`size-option-button ${
                          selectedSize === size ? "selected" : ""
                        } ${
                          product.stock === "out-of-stock" ? "disabled" : ""
                        }`}
                        onClick={() => handleSizeClick(size)}
                        disabled={product.stock === "out-of-stock"}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                  {sizeGuideVisible && (
                    <div className="size-guide-popup">
                      <div className="size-guide-content">
                        {renderSizeGuide()}
                        <button
                          className="close-size-guide"
                          onClick={toggleSizeGuide}
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  )}
                  {selectedSize && (
                    <p className="selected-size-text">
                      Selected Size: <strong>{selectedSize}</strong>
                    </p>
                  )}
                </div>
              )}

              <div className="quantity-section">
                <p className="quantity-label">Quantity:</p>
                <div className="quantity-controls">
                  <button
                    onClick={() => handleQuantityChange("decrement")}
                    className="quantity-button"
                  >
                    -
                  </button>
                  <span className="quantity-value">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange("increment")}
                    className="quantity-button"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="action-buttons">
                {product.stock === "in-stock" ? (
                  <>
                    <button
                      className="add-to-cart-button"
                      onClick={handleAddToCart}
                    >
                      Add to Cart
                    </button>
                    <button className="buy-now-button" onClick={handleBuyNow}>
                      Buy Now
                    </button>
                  </>
                ) : (
                  <button
                    className="out-of-stock-button"
                    onClick={handleOutOfStockClick}
                  >
                    Out of Stock
                  </button>
                )}
              </div>

              <button className="return-home" onClick={() => navigate("/")}>
                Return Home
              </button>
            </div>

            <div className="tabs-container mt-5 w-full">
              <div className="tabs flex justify-around border-b pb-2">
                {availableTabs.map((tab) => (
                  <button
                    key={tab}
                    className={`py-2 px-4 font-semibold capitalize tab-button ${
                      activeTab === tab ? "active" : "text-gray-500"
                    }`}
                    onClick={() => handleTabClick(tab)}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="tab-content p-4">
                {activeTab === "specifications" && (
                  <div className="specifications-table">
                    <table className="w-full table-auto border-collapse">
                      <thead>
                        <tr>
                          <th className="px-4 py-2 border border-gray-300 text-left">
                            Specifications
                          </th>
                          <th className="px-4 py-2 border border-gray-300 text-left">
                            Details
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {Object.entries(product.specifications || {}).map(
                          ([key, value]) => (
                            <tr key={key}>
                              <td className="px-4 py-2 border border-gray-300">
                                <strong>{key}:</strong>
                              </td>
                              <td className="px-4 py-2 border border-gray-300">
                                {value}
                              </td>
                            </tr>
                          )
                        )}
                      </tbody>
                    </table>
                  </div>
                )}
                {activeTab === "description" && (
                  <div style={{ color: "#4b5563" }} className="text-gray-700">
                    {product.description ? (
                      <ul className="description-list">
                        {product.description
                          .split("•")
                          .filter((item) => item.trim())
                          .map((item, index) => (
                            <li key={index} className="description-list-item">
                              {item.trim()}
                            </li>
                          ))}
                      </ul>
                    ) : (
                      "No description available"
                    )}
                  </div>
                )}
                {activeTab === "warranty" && (
                  <p style={{ color: "#4b5563" }} className="text-gray-700">
                    {product.warranty || "No warranty information available"}
                  </p>
                )}
              </div>
            </div>
          </div>

          {alertVisible && (
            <div
              className={`custom-alert ${
                alertMessage === "Successfully added product"
                  ? "success-alert"
                  : "error-alert"
              }`}
            >
              <img
                className="alert-image"
                style={
                  alertMessage === "Successfully added product"
                    ? { width: "35px", height: "35px", marginLeft: "5px" } // For right2.png
                    : {
                        width: "35px",
                        height: "35px",
                        marginLeft: "4px",
                        marginRight: "3px",
                      } // For alert2.png
                }
                src={
                  alertMessage === "Successfully added product"
                    ? "../img/right2.png"
                    : "../img/alert2.png"
                }
                alt="Alert Icon"
              />

              <div className="alert-message">{alertMessage}</div>
            </div>
          )}
        </div>
        <RelatedProducts addToCart={addToCart} currentProduct={product} />
      </div>
    </>
  );
};

export default ModalPage;
