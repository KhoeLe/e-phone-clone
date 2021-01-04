import "./Cart.css"

function Cart() {
  return (
    <div>
      <div className="page__title-area">
        <div className="container">
          <div className="page__title-container">
            <ul className="page__titles">
              <li>
                <a href="/">
                  <svg>
                    <use xlinkHref="./images/sprite.svg/icon-home" />
                  </svg>
                </a>
              </li>
              <li className="page__title">Cart</li>
            </ul>
          </div>
        </div>
      </div>
      <section className="section cart__area">
        <div className="container">
          <div className="responsive__cart-area">
            <form className="cart__form">
              <div className="cart__table table-responsive">
                <table width="100%" className="table">
                  <thead>
                    <tr>
                      <th>PRODUCT</th>
                      <th>NAME</th>
                      <th>UNIT PRICE</th>
                      <th>QUANTITY</th>
                      <th>TOTAL</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="product__thumbnail">
                        <a href="/">
                          <img
                            src="https://louisle.s3-ap-southeast-1.amazonaws.com/category/iphone11pro"
                            alt=""
                          />
                        </a>
                      </td>
                      <td className="product__name">
                        <a href="/">Apple iPhone 11</a>
                        <br />
                        <br />
                        <small>White/6.25</small>
                      </td>
                      <td className="product__price">
                        <div className="price">
                          <span className="new__price">$250.99</span>
                        </div>
                      </td>
                      <td className="product__quantity">
                        <div className="input-counter">
                          <div>
                            <span className="minus-btn">
                              <svg>
                                <use xlinkHref="./images/sprite.svg/icon-minus" />
                              </svg>
                            </span>
                            <input
                              type="text"
                              min={1}
                              defaultValue={1}
                              max={10}
                              className="counter-btn"
                            />
                            <span className="plus-btn">
                              <svg>
                                <use xlinkHref="./images/sprite.svg/icon-plus" />
                              </svg>
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="product__subtotal">
                        <div className="price">
                          <span className="new__price">$250.99</span>
                        </div>
                        <a href="/" className="remove__cart-item">
                          <svg>
                            <use xlinkHref="./images/sprite.svg/icon-trash" />
                          </svg>
                        </a>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="cart-btns">
                <div className="continue__shopping">
                  <a href="/">Continue Shopping</a>
                </div>
                <div className="check__shipping">
                  <input type="checkbox" />
                  <span>Shipping(+7$)</span>
                </div>
              </div>
              <div className="cart__totals">
                <h3>Cart Totals</h3>
                <ul>
                  <li>
                    Subtotal
                    <span className="new__price">$250.99</span>
                  </li>
                  <li>
                    Shipping
                    <span>$0</span>
                  </li>
                  <li>
                    Total
                    <span className="new__price">$250.99</span>
                  </li>
                </ul>
                <a href>PROCEED TO CHECKOUT</a>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Cart;
