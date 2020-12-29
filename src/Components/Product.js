import StarIcon from "@material-ui/icons/Star";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import VisibilityIcon from "@material-ui/icons/Visibility";
import LoopIcon from "@material-ui/icons/Loop";
// import { ProductData } from "./Glider/product";
import "./Product.css";

function Product({products}) {

  return (
    <div className="category__center">
      {products.map((item) => {
        return (
          <div className="product category__product">
            <div className="product__header">
              <img src={item.image} alt="" />
            </div>
            <div className="product__footer">
              <h3>{item.title}</h3>
              <div className="ratting">
                <svg>
                  <StarIcon />
                </svg>
                <svg>
                  <StarIcon />
                </svg>
                <svg>
                  <StarIcon />
                </svg>
                <svg>
                  <StarIcon />
                </svg>
              </div>
              <div className="product__price">
                <h4>${item.price}</h4>
                <a href="/">
                  <button type="button" className="product__btn">
                    Add to Card
                  </button>
                </a>
              </div>
              <ul>
                <li>
                    <a href="/">
                      <svg >
                        <VisibilityIcon />
                      </svg>
                    </a>
                </li>
                <li>
                    <a href="/">
                      <svg >
                      <FavoriteBorderIcon />
                      </svg>
                    </a>
                </li>
                <li>
                    <a href="/">
                      <svg >
                      <LoopIcon />
                      </svg>
                    </a>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Product;
