import { NewsSections } from "./Glider/newsection";
import { useEffect, useRef } from "react";
import Glide, { Controls, Swipe ,Breakpoints,Autoplay } from "@glidejs/glide/dist/glide.modular.esm";
import "@glidejs/glide/dist/css/glide.core.min.css";
import "./NewsSection.css";

function NewsSection({ id }) {
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
    perView: 3,
    rewin: false,
    autoplay: 3000,
    animationDuration: 800,
    animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
    breakpoints: {
      998: {
        perView: 2,
      },
      768: {
        perView: 1,
      },
      },
    };

    const glide = new Glide(carouselRef.current, opts);

    setTimeout(() => {
      glide.mount({ Controls, Swipe, MyEvent,Breakpoints , Autoplay});
    }, 0);
  }, []);

  // console.log(NewsSections);

  return (
    <div className="NewsSections">
      <section className="section news" id="news">
        <div className="container">
          <div className="title__container">
            <div className="section__titles">
              <div className="section__title active">
                <span className="dot" />
                <h1 className="primary__title">Phone News</h1>
              </div>
            </div>
          </div>
          <div className="news__container">
            <div className={`glide-carousel-${id}`} ref={carouselRef}>
              <div className="glide__track" data-glide-el="track">
                <ul className="glide__slides">
                  {NewsSections.map((item) => {
                    return (
                      <li className="glide__slide" key={item.id}>
                        <div className="new__card">
                          <div className="card__header">
                            <img src={item.image} alt="" />
                          </div>
                          <div className="card__footer">
                            <h3>{item.title}</h3>
                            <span>{item.rules}</span>
                            <p>{item.description}</p>
                            <a href="/">
                              <button>Read More</button>
                            </a>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section newsletter" id="contact">
        <div className="container">
          <div className="newsletter__content">
            <div className="newsletter__data">
              <h3>SUBSCRIBE TO OUR NEWSLETTER</h3>
              <p>
                A short sentence describing what someone will receive by
                subscribing
              </p>  
            </div>
            <form action="#">
              <input
                type="email"
                placeholder="Enter your email address"
                className="newsletter__email"
              />
              <a className="newsletter__link" href="/">
                subscribe
              </a>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default NewsSection;
