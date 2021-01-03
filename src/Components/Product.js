import StarIcon from "@material-ui/icons/Star";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import VisibilityIcon from "@material-ui/icons/Visibility";
import LoopIcon from "@material-ui/icons/Loop";
// import { ProductData } from "./Glider/product";
// import "./Product.css";
import { useDispatch, useSelector } from "react-redux";
import { addCard, selectCard } from "features/cardSlice";

function Product({ id, image, title, price }) {
  const dispatch = useDispatch();

  // const basket = useSelector(selectCard);

  const addtoBasket = () => {
    dispatch(
      addCard({
        id: id,
        title: title,
        image: image,
        price: price,
        quantity:1
      })
    );
  };

  // console.log("products:",basket,);

  return (
    <div className="product category__product">
      <div className="product__header">
        <img src={image} alt="" />
      </div>
      <div className="product__footer">
        <h3>{title}</h3>
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
          <h4>${price}</h4>
          <a>
            <button
              type="button"
              className="product__btn"
              onClick={addtoBasket}
            >
              Add to Card
            </button>
          </a>
        </div>
        <ul>
          <li>
            <a href="/">
              <svg>
                <VisibilityIcon />
              </svg>
            </a>
          </li>
          <li>
            <a href="/">
              <svg>
                <FavoriteBorderIcon />
              </svg>
            </a>
          </li>
          <li>
            <a href="/">
              <svg>
                <LoopIcon />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Product;
