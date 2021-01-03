import { useEffect } from "react";
import "./Collection.css"
import AOS from 'aos';
import { Link } from "react-router-dom";


function Collection() {
  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  },[])
  return (

    <section className="section collection" id="collection">
        <div className="collection__container" data-aos={"fade-up"}>
          <div className="collection__box">
            <div className="img__container">
              <img
                src="https://louisle.s3-ap-southeast-1.amazonaws.com/category/headphone"
                alt=""
                className="collection__02"
              />
            </div>
            <div className="collection__content">
              <div className="collection__data">
                <span>New Colors Introduced</span>
                <h1>HeadPhone</h1>
                <li>
                  <Link to='/'>
                     SHOP NOW
                  </Link>
                </li>
               
                {/* <a href="/" className>
                  
                </a> */}
              </div>
            </div>
          </div>
          <div className="collection__box">
            <div className="img__container">
              <img
                src="https://louisle.s3-ap-southeast-1.amazonaws.com/category/iphone11pro"
                alt=""
                className="collection__01"
              />
            </div>
            <div className="collection__content">
              <div className="collection__data">
                <span>Phone Device Present</span>
                <h1>SMARTPHONE</h1>
                <a href="/" >
                  SHOP NOW
                </a>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
}

export default Collection;
