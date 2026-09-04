import { useState } from "react";
import { Link } from "react-router-dom";
import "./Merch.css";

const products = [
  {
    id: "01",
    name: "$PHREN CORE TEE",
    category: "APPAREL",
    price: 45,
    tag: "THE OG",
  },
  {
    id: "02",
    name: "$PHREN 215 HOODIE",
    category: "APPAREL",
    price: 85,
    tag: "HEAVYWEIGHT",
  },
  {
    id: "03",
    name: "PHILLY THING CAP",
    category: "HEADWEAR",
    price: 35,
    tag: "215",
  },
  {
    id: "04",
    name: "$PHREN SQUAD CREW",
    category: "APPAREL",
    price: 70,
    tag: "SQUAD",
  },
];

function Merch() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");

  const [orderStatus, setOrderStatus] = useState("");
  const [sendingOrder, setSendingOrder] = useState(false);

  const addToCart = (product) => {
    setCart((currentCart) => {
      const existingItem = currentCart.find((item) => item.id === product.id);

      if (existingItem) {
        return currentCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }

      return [...currentCart, { ...product, quantity: 1 }];
    });

    setCartOpen(true);
    setOrderStatus("");
  };

  const changeQuantity = (id, amount) => {
    setCart((currentCart) =>
      currentCart
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };

  const removeFromCart = (id) => {
    setCart((currentCart) => currentCart.filter((item) => item.id !== id));
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const cartTotal = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const formatPrice = (price) => `$${price.toLocaleString("en-US")}`;

  const handleOrderSubmit = async (event) => {
    event.preventDefault();

    if (cart.length === 0) {
      setOrderStatus("Your cart is empty.");
      return;
    }

    if (!customerName.trim() || !customerEmail.trim()) {
      setOrderStatus("Please enter your name and email.");
      return;
    }

    setSendingOrder(true);
    setOrderStatus("");

    const orderDetails = cart
      .map(
        (item) =>
          `${item.name} — ${item.quantity} x ${formatPrice(
            item.price,
          )} = ${formatPrice(item.price * item.quantity)}`,
      )
      .join("\n");

    const message = `NEW $PHREN 215 MERCH ORDER

CUSTOMER
Name: ${customerName}
Email: ${customerEmail}

ORDER
${orderDetails}

TOTAL: ${formatPrice(cartTotal)}

Please contact the customer to confirm availability, delivery/pickup details, and payment.`;

    try {
      const response = await fetch("https://formspree.io/f/mwlkqkpb", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: customerName,
          email: customerEmail,
          subject: "$PHREN 215 Merch Order",
          message,
        }),
      });

      if (!response.ok) {
        throw new Error("Order could not be sent.");
      }

      setOrderStatus(
        "ORDER SENT ✓ We received your order request. The squad will contact you shortly.",
      );

      setCart([]);
      setCustomerName("");
      setCustomerEmail("");
    } catch (error) {
      setOrderStatus("Something went wrong. Please try again in a moment.");
    } finally {
      setSendingOrder(false);
    }
  };

  return (
    <div className="merch-page">
      <header className="merch-nav">
        <Link to="/" className="merch-logo">
          $PHREN <span>215</span>
        </Link>

        <nav className="merch-links">
          <Link to="/">HOME</Link>
          <Link to="/story">STORY</Link>
          <Link to="/squad">SQUAD</Link>
          <Link to="/movement">MOVEMENT</Link>
          <Link to="/merch">MERCH</Link>
          <Link to="/hustles">HUSTLES</Link>
          <Link to="/opportunities">OPPORTUNITIES</Link>
          <Link to="/contact">CONTACT</Link>
        </nav>

        <button
          className="merch-cart"
          type="button"
          onClick={() => setCartOpen(true)}
        >
          CART <span>{cartCount}</span>
        </button>
      </header>

      <main>
        <section className="merch-hero">
          <div className="merch-hero-number">04</div>

          <div className="merch-hero-content">
            <p className="merch-eyebrow">THE $PHREN 215 COLLECTION</p>

            <h1>
              WEAR
              <br />
              THE <span>CODE.</span>
            </h1>

            <p className="merch-hero-text">
              THIS IS MORE THAN MERCH. IT'S A STATEMENT.
              <br />
              BUILT FOR THE ONES WHO KNOW THE HUSTLE.
            </p>

            <a href="#collection" className="merch-hero-button">
              SHOP THE COLLECTION <span>↓</span>
            </a>
          </div>
        </section>

        <section className="merch-collection" id="collection">
          <div className="merch-section-heading">
            <div>
              <p className="merch-eyebrow">THE COLLECTION</p>
              <h2>
                BUILT FOR
                <br />
                THE <span>SQUAD.</span>
              </h2>
            </div>

            <p className="merch-section-copy">
              LIMITED DROPS. HEAVYWEIGHT QUALITY.
              <br />
              NO COMPROMISES.
            </p>
          </div>

          <div className="merch-grid">
            {products.map((product) => (
              <article className="merch-product-card" key={product.id}>
                <div className="merch-product-image">
                  <div className="merch-product-number">{product.id}</div>

                  <div className="merch-product-tag">{product.tag}</div>

                  <div className="merch-product-placeholder">
                    <span>$PHREN</span>
                    <strong>215</strong>
                  </div>
                </div>

                <div className="merch-product-info">
                  <div>
                    <p className="merch-product-category">{product.category}</p>

                    <h3>{product.name}</h3>
                  </div>

                  <strong className="merch-product-price">
                    {formatPrice(product.price)}
                  </strong>
                </div>

                <button
                  className="merch-add-button"
                  type="button"
                  onClick={() => addToCart(product)}
                >
                  ADD TO CART <span>↗</span>
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="merch-manifesto">
          <div className="merch-manifesto-number">215</div>

          <div className="merch-manifesto-content">
            <p className="merch-eyebrow">MORE THAN A NUMBER</p>

            <h2>
              THE CODE
              <br />
              <span>IS THE BRAND.</span>
            </h2>

            <p>
              LOYALTY. HUSTLE. CONVICTION. MOVEMENT.
              <br />
              WE DON'T JUST WEAR IT. WE LIVE IT.
            </p>
          </div>
        </section>

        <section className="merch-cta">
          <p className="merch-eyebrow">READY?</p>

          <h2>
            GET IN THE
            <br />
            <span>SQUAD.</span>
          </h2>

          <Link to="/squad" className="merch-cta-button">
            JOIN THE SQUAD <span>→</span>
          </Link>
        </section>
      </main>

      {cartOpen && (
        <div className="merch-cart-overlay" onClick={() => setCartOpen(false)}>
          <aside
            className="merch-cart-drawer"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="merch-cart-header">
              <div>
                <p className="merch-eyebrow">YOUR BAG</p>
                <h2>
                  CART <span>{cartCount}</span>
                </h2>
              </div>

              <button
                className="merch-cart-close"
                type="button"
                onClick={() => setCartOpen(false)}
              >
                ×
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="merch-empty-cart">
                <div className="merch-empty-number">00</div>

                <h3>YOUR CART IS EMPTY.</h3>

                <p>PICK SOMETHING FROM THE COLLECTION AND GET IN THE CODE.</p>

                <button type="button" onClick={() => setCartOpen(false)}>
                  CONTINUE SHOPPING →
                </button>
              </div>
            ) : (
              <>
                <div className="merch-cart-items">
                  {cart.map((item) => (
                    <div className="merch-cart-item" key={item.id}>
                      <div className="merch-cart-item-art">
                        <span>$PHREN</span>
                        <strong>215</strong>
                      </div>

                      <div className="merch-cart-item-details">
                        <p>{item.category}</p>

                        <h3>{item.name}</h3>

                        <div className="merch-cart-item-bottom">
                          <div className="merch-quantity">
                            <button
                              type="button"
                              onClick={() => changeQuantity(item.id, -1)}
                            >
                              −
                            </button>

                            <span>{item.quantity}</span>

                            <button
                              type="button"
                              onClick={() => changeQuantity(item.id, 1)}
                            >
                              +
                            </button>
                          </div>

                          <strong>
                            {formatPrice(item.price * item.quantity)}
                          </strong>
                        </div>

                        <button
                          className="merch-remove"
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                        >
                          REMOVE
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="merch-cart-summary">
                  <div>
                    <span>SUBTOTAL</span>
                    <strong>{formatPrice(cartTotal)}</strong>
                  </div>

                  <p>
                    FINAL DELIVERY/PICKUP DETAILS AND PAYMENT WILL BE CONFIRMED
                    BY THE $PHREN 215 SQUAD.
                  </p>
                </div>

                <form
                  className="merch-checkout-form"
                  onSubmit={handleOrderSubmit}
                >
                  <h3 className="merch-checkout-heading">SEND ORDER REQUEST</h3>

                  <input
                    type="text"
                    placeholder="YOUR NAME"
                    value={customerName}
                    onChange={(event) => setCustomerName(event.target.value)}
                    required
                  />

                  <input
                    type="email"
                    placeholder="YOUR EMAIL"
                    value={customerEmail}
                    onChange={(event) => setCustomerEmail(event.target.value)}
                    required
                  />

                  <p className="merch-order-note">
                    This sends your order request to the $PHREN 215 team. We
                    will contact you to confirm everything.
                  </p>

                  <button
                    className="merch-order-button"
                    type="submit"
                    disabled={sendingOrder}
                  >
                    {sendingOrder ? "SENDING..." : "SEND ORDER REQUEST →"}
                  </button>

                  {orderStatus && (
                    <p
                      className={`merch-order-status ${
                        orderStatus.startsWith("ORDER SENT")
                          ? "success"
                          : "error"
                      }`}
                    >
                      {orderStatus}
                    </p>
                  )}
                </form>
              </>
            )}
          </aside>
        </div>
      )}

      <footer className="merch-footer">
        <Link to="/" className="merch-footer-logo">
          $PHREN <span>215</span>
        </Link>

        <div className="merch-footer-links">
          <Link to="/">HOME</Link>
          <Link to="/story">STORY</Link>
          <Link to="/squad">SQUAD</Link>
          <Link to="/movement">MOVEMENT</Link>
          <Link to="/merch">MERCH</Link>
          <Link to="/hustles">HUSTLES</Link>
          <Link to="/opportunities">OPPORTUNITIES</Link>
          <Link to="/contact">CONTACT</Link>
        </div>

        <p>© 2026 $PHREN 215. BUILT DIFFERENT.</p>
      </footer>
    </div>
  );
}

export default Merch;
