import './Banner.css'
function Banner() {
  return (
    <div className="hero">
      <div className="glide" id="glide__1">
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            <li className="glide__slide">
              <div className="hero__center">
                <div className="hero__left">
                  <span>New Inspirations 2020</span>
                  <h1>Phone made for you</h1>
                  <p>Trending from mobile and headphones</p>
                  <a href>
                    <button className="hero__btn">SHOP NOW</button>
                  </a>
                </div>
                <div className="hero__right">
                  <div className="hero__img-container">
                    <img
                      src="https://louisle.s3-ap-southeast-1.amazonaws.com/category/banner01"
                      alt=""
                      className="banner_01"
                    />
                  </div>
                </div>
              </div>
            </li>
            <li className="glide__slide">
              <div className="hero__center">
                <div className="hero__left">
                  <span>New Inspirations 2020</span>
                  <h1>Phone made for you</h1>
                  <p>Trending from mobile and headphones</p>
                  <a href>
                    <button className="hero__btn">SHOP NOW</button>
                  </a>
                </div>
                <div className="hero__right">
                  <div className="hero__img-container">
                    <img
                      src="https://louisle.s3-ap-southeast-1.amazonaws.com/category/headphone"
                      alt=""
                      className="banner_02"
                    />
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="glide__bullets" data-glide-el="controls[nav]">
          <button className="glide__bullet" data-glide-dir="=0" />
          <button className="glide__bullet" data-glide-dir="=1" />
          <button className="glide__bullet" data-glide-dir="=2" />
        </div>
        <div className="glide__arrows" data-glide-el="controls">
          <button
            className="glide__arrow glide__arrow--left"
            data-glide-dir="<"
          >
            <svg>
              <use xlinkHref="./images/sprite.svg#icon-arrow-left2" />
            </svg>
          </button>
          <button
            className="glide__arrow glide__arrow--right"
            data-glide-dir=">"
          >
            <svg>
              <use xlinkHref="./images/sprite.svg#icon-arrow-right2" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
