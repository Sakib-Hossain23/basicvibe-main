import React from "react";
import { Link } from "react-router-dom";
import "../assets/styles/Cart.css";

const Cart = ({ cart, updateCart }) => {
  const formatPrice = (price) => {
    const num =
      typeof price === "string"
        ? parseFloat(price.replace(/[^0-9.-]+/g, ""))
        : price;
    return Number.isInteger(num) ? num : num.toFixed(2);
  };

  const handleQuantityChange = (operation, index) => {
    const updatedCart = [...cart];
    if (operation === "increase") {
      updatedCart[index].quantity += 1;
    } else if (operation === "decrease" && updatedCart[index].quantity > 1) {
      updatedCart[index].quantity -= 1;
    }
    updateCart(updatedCart);
  };

  const handleRemoveProduct = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    updateCart(updatedCart);
  };

  const calculateSubtotal = () => {
    return cart.reduce((total, product) => {
      const price = parseFloat(product.price) || 0;
      return total + price * product.quantity;
    }, 0);
  };

  const calculateTotalDiscount = () => {
    return cart.reduce((total, product) => {
      if (product.oldPrice) {
        const oldPrice = parseFloat(product.oldPrice.replace(/[^0-9.-]+/g, ""));
        const currentPrice = parseFloat(product.price);
        return total + (oldPrice - currentPrice) * product.quantity;
      }
      return total;
    }, 0);
  };

  const calculateDeliveryCharge = () => 0; // Always free delivery

  const calculateTotal = () => {
    return calculateSubtotal() - calculateTotalDiscount();
  };

  return (
    <div className="wrapper">
      <div className="cart-container">
        <h2>Shopping Cart</h2>
        {cart.length === 0 ? (
          <div className="empty-cart">
            <img
              src="./img/Empty Cart.png"
              alt="Empty Cart"
              className="empty-cart-image"
            />
            <h3>
              Your cart is <span className="highlight">Empty</span>
            </h3>
            <p>Must add items to the cart before you proceed to check out</p>
            <Link to="/">
              <button className="return-home-btn">Return Home</button>
            </Link>
          </div>
        ) : (
          <>
            <div className="cart-table-wrapper">
              <table className="cart-table">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Details</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Total</th>
                    <th>Remove</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((product, index) => (
                    <tr key={index}>
                      <td className="product-image-cell">
                        <img
                          src={
                            product.image || "https://via.placeholder.com/100"
                          }
                          alt={product.name}
                          className="product-imagee"
                        />
                        <div className="mobile-product-name">
                          <strong>{product.name}</strong>
                        </div>
                      </td>
                      <td className="product-details-cell">
                        <div className="product-details">
                          <div
                            className="desktop-product-name"
                            style={{ textAlign: "start" }}
                          >
                            <strong>{product.name}</strong>
                          </div>

                          {product.selectedColor && (
                            <div className="product-variant">
                              <span className="variant-label">Color:</span>
                              <span className="variant-value">
                                {product.selectedColor}
                                {colorMap[product.selectedColor] && (
                                  <span
                                    className="color-circle"
                                    style={{
                                      backgroundColor:
                                        colorMap[product.selectedColor],
                                    }}
                                  ></span>
                                )}
                              </span>
                            </div>
                          )}
                          {product.selectedSize && (
                            <div className="product-variant">
                              <span className="variant-label">Size:</span>
                              <span className="variant-value">
                                {product.selectedSize}
                              </span>
                            </div>
                          )}
                          {product.selectedStorage && (
                            <div className="product-variant">
                              <span className="variant-label">Storage:</span>
                              <span className="variant-value">
                                {product.selectedStorage}
                              </span>
                            </div>
                          )}
                        </div>
                      </td>
                      <td className="product-quantity-cell">
                        <div
                          className="quantity-controls"
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <button
                            onClick={() =>
                              handleQuantityChange("decrease", index)
                            }
                            className="quantity-btn"
                            disabled={product.quantity <= 1}
                          >
                            -
                          </button>
                          <span className="quantity-value">
                            {product.quantity}
                          </span>
                          <button
                            onClick={() =>
                              handleQuantityChange("increase", index)
                            }
                            className="quantity-btn"
                          >
                            +
                          </button>
                        </div>
                      </td>

                      <td className="product-price-cell">
                        <div className="price-container">
                          <span className="current-price">
                            ৳{formatPrice(product.price)}
                          </span>
                          {product.oldPrice && (
                            <span className="old-price">
                              ${formatPrice(product.oldPrice)}
                            </span>
                          )}
                        </div>
                      </td>

                      <td className="product-total-cell">
                        ৳
                        {formatPrice(
                          parseFloat(product.price) * product.quantity
                        )}
                      </td>
                      <td className="product-action-cell">
                        <button
                          onClick={() => handleRemoveProduct(index)}
                          className="delete-btn"
                          aria-label="Remove product"
                        >
                          <img
                            src="./img/remove-icon.png"
                            alt="Remove Product"
                            className="delete-icon"
                          />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="cart-summary">
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>৳{formatPrice(calculateSubtotal())}</span>
              </div>
              <div className="summary-row">
                <span>Delivery Charge:</span>
                <span className="free-delivery">Will be Added</span>
              </div>
              <div className="summary-row">
                <span>Discount:</span>
                <span className="discount-amount">
                  -৳{formatPrice(calculateTotalDiscount())}
                </span>
              </div>
              <div className="summary-row total-row">
                <span>Total: (BDT) </span>
                <span className="total-amount">
                  ৳{formatPrice(calculateTotal())}
                </span>
              </div>
            </div>

            <div className="cart-buttons">
              <Link to="/">
                <button className="continue-btn">Continue Shopping</button>
              </Link>
              <Link to="/checkout">
                <button className="checkout-btn">Check Out</button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

// Color mapping for visual color representation
const colorMap = {};

export default Cart;
