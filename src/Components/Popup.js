import "./Popup.css";
import CloseIcon from "@material-ui/icons/Close";
import { useState } from "react";

function Popup() {
  const [isActive, setIsActive] = useState("false");

  const toggleActive = (e) => {
    e.preventDefault();
    setIsActive(!isActive);
  }; 
  return (
    <div className={isActive ? "popup hidden__popup" : "popup hide__popup"}>
      <div className="popup__content">
        <div className="popup__close" onClick={toggleActive}>
          <svg>
            <CloseIcon />
          </svg>
        </div>
        <div className="popup__left">
          <div className="popup-img__container">
            <img
              src="https://louisle.s3-ap-southeast-1.amazonaws.com/category/popup"
              alt="popup"
              className="popup__img"
            />
          </div>
        </div>
        <div className="popup__right">
          <div className="right__content">
            <h1>
              Get Discount
              <span>30%</span>
              Off
            </h1>
            <p>
              Sign up to our newsletter and save 30% for your next purchase.No
              spam, we promise!
            </p>
            <form action="#">
              <input
                type="email"
                className="popup__form"
                placeholder="Enter your email address"
              />
              <a href="/">Subscribes</a>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
