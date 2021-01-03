import { useEffect, useRef } from "react";
import Glide, { Controls, Swipe } from "@glidejs/glide/dist/glide.modular.esm";
import { Ilion } from "./Glider/testimonial"
import "./Testimonial.css";
import "@glidejs/glide/dist/css/glide.core.min.css";

function Testimonial({id}) {

  const carouselRef = useRef(null);
  // console.log(Ilion)

  function MyEvent(Glide, Components, Events) {
    var Example = {
      // mount() {
      //   Events.emit('example.mount');
      // },

      method() {
        // console.log(Glide.index);
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
    perView: 1,
    rewin: false,
    animationDuration: 800,
    animationTimingFunc: "cubic-bezier(0.165, 0.840, 0.440, 1.000)",
    };

    const glide = new Glide(carouselRef.current, opts);

    setTimeout(() => {
      glide.mount({ Controls, Swipe, MyEvent });
    }, 0);
  }, []);

  return (
    <section className="section testimonial" id="testimonial">
      <div className="testimonial__container">
        <div className={`glide-carousel-${id}`} ref={carouselRef}>
          <div className="glide__track" data-glide-el="track">
            <ul className="glide__slides">
              {Ilion.map( (items) => {
                return(
                  <li className="glide__slide" key={items.id}>
                <div className="testimonial__box">
                  <div className="client__image">
                    <img src={items.image} alt="profile" />
                  </div>
                  <p>
                    {items.description}
                  </p>
                  <div className="client__info">
                    <h3>{items.name}</h3>
                    <span>{items.job}</span>
                  </div>
                </div>
              </li>
                )
              })}
            </ul>
            <div className="glide__bullets" data-glide-el="controls[nav]">
            <button className="glide__bullet" data-glide-dir="=0" />
            <button className="glide__bullet" data-glide-dir="=1" />
            <button className="glide__bullet" data-glide-dir="=2" />
            <button className="glide__bullet" data-glide-dir="=3" />
          </div>  
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonial;
