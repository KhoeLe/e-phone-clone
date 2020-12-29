import "./Banner.css";
import "@glidejs/glide/dist/css/glide.core.min.css";
import { useEffect, useRef } from "react";
import Glide, { Controls, Swipe,Autoplay } from "@glidejs/glide/dist/glide.modular.esm";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import { SliderData } from "./Glider/SliderData";

function Banner({ id }) {
  const carouselRef = useRef(null);

  function MyEvent(Glide, Components, Events) {
    var Example = {
      // mount() {
      //   Events.emit('example.mount');
      // },

      method() {
        console.log(Glide.index);
      },
    };

    Events.on("run.after", function () {
      Example.method();
    });

    return { Example };
  }

  useEffect(() => {
    const opts = {
      type: "carousel",
      startAt: 0,
      autoplay: 3000,
      hoverpause: true,
      perView: 1,
      animationDuration: 800,
      animationTimingFunc: "linear",
    };

    
    const glide = new Glide(carouselRef.current, opts);

    setTimeout(() => {
      glide.mount({ Controls, Swipe, MyEvent, Autoplay });
    }, 0);
  }, []);

  return (
    <div className="hero">
      {/* <div className="glide" id="glide__1"> */}
      <div className={`glide-carousel-${id}`} ref={carouselRef}>
        <div className="glide__track" data-glide-el="track">
          <ul className="glide__slides">
            {SliderData.map((item) => {
              return (
                <li className="glide__slide" key={item.img}>
                  <div className="hero__center">
                    <div className="hero__left">
                      <span>New Inspirations 2020</span>
                      <h1>Phone made for you</h1>
                      <p>{item.title}</p>
                      <a href="/">
                        <button className="hero__btn">SHOP NOW</button>
                      </a>
                    </div>
                    <div className="hero__right">
                      <div className="hero__img-container">
                        <img
                          src={item.image}
                          alt=""
                          className="banner_01"
                          style={{ maxWidth: "85%" }}
                        />
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
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
              <ArrowBackIcon />
            </svg>
          </button>
          <button
            className="glide__arrow glide__arrow--right"
            data-glide-dir=">"
          >
            <svg>
              <ArrowForwardIcon />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
