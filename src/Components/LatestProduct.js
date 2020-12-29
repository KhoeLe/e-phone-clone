import "./LatestProduct.css";
import { useEffect, useRef } from "react";
import Glide, { Controls, Swipe } from "@glidejs/glide/dist/glide.modular.esm";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import StarIcon from "@material-ui/icons/Star";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import VisibilityIcon from "@material-ui/icons/Visibility";
import LoopIcon from "@material-ui/icons/Loop";
import "@glidejs/glide/dist/css/glide.core.min.css";
import { data } from "./Glider/latest";
import AOS from 'aos';

function LatestProduct({ id }) {
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
      // autoplay: 3000,
      hoverpause: true,
      perView: 4,
      animationDuration: 800,
      animationTimingFunc: "ease-in-out",
      breakpoints: {
        1200: {
          perView: 3,
        },
        768: {
          perView: 2,
        },
      },
    };

    const glide = new Glide(carouselRef.current, opts);

    setTimeout(() => {
      glide.mount({ Controls, Swipe, MyEvent });
    }, 0);
  }, []);

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  },[])


  return (
    <section className="section latest__products" id="latest">
      <div className="title__container">
        <div className="section__title active" data-id="Latest Products">
          <span className="dot" />
          <h1 className="primary__title"> Latest Products</h1>
        </div>
      </div>

      <div className="container" data-aos={"fade-up"}>
        <div className={`glide-carousel-${id}`} ref={carouselRef}>
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides latest-center">
              {data.map((item) => {
                return (
                  <li className="glide__slide" key={item.id}>
                    <div className="product">
                      <div className="product__header">
                        <img src={item.image} alt="" />
                      </div>
                      <div className="product__footer">
                        <h3>{item.title}</h3>
                        {/* {JSON.stringify(item)} */}
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
                  </li>
                );
              })}
            </ul>
          </div>


          <div className="glide__arrows" data-glide-el="controls">
            <button
              className="glide__arrow glide__arrow--left"
              data-glide-dir="<"
            >
              <svg>
                <ArrowBackIcon />
                <h2>Hellllllllllllllllllllllllllllllllll</h2>
              </svg>
            </button>
            <button
              className="glide__arrow glide__arrow--right"
              data-glide-dir=">"
            >
              <svg>
                <ArrowForwardIcon />
              </svg>
              Hello
            </button>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export default LatestProduct;
