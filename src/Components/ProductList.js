import "./ProductList.css";
import Product from "./Product";
import { useState, useEffect } from "react";
import {items }from "./data/data.json"
import AOS from 'aos';



function ProductList() {

  const [products, setProducts] = useState(items)
  const [category, setCategory] = useState("All Products")

  const handleFilterChange = (e) => {
      //changes state 
      const target = e.target.closest(".section__title");
      if (!target) return;
      const id = target.dataset.id;
      setCategory(id)
  }
  
  useEffect(() => {
      let filteredProducts = items;

      if (category !== "All Products") {
          filteredProducts = filteredProducts.filter(product => product.category === category)
      }
      setProducts(filteredProducts)
      //variable being listened for change
  }, [category])

  useEffect(() => {
    AOS.init({
      duration : 2000
    });
  },[])
 
  return (
    <section className="category__section section" id="category" data-aos={"fade-up"}>
      <div className="tab__list">
        <div className="title__container tabs">
          <div className="section__titles category__titles" onClick={handleFilterChange} >
            <div
              className="section__title filter-btn active" 
              
              data-id="All Products"
            >
              <span className="dot" />
              <h1 className="primary__title">All Products</h1>
            </div>
          </div>
          <div className="section__titles" onClick={handleFilterChange}>
            <div
              className="section__title filter-btn "
              data-id="Trending Products"
            >
              <span className="dot" />
              <h1 className="primary__title">Trending Products</h1>
            </div>
          </div>
          <div className="section__titles" onClick={handleFilterChange}>
            <div
              className="section__title filter-btn "
              data-id="Special Products"
            >
              <span className="dot" />
              <h1 className="primary__title">Special Products</h1>
            </div>
          </div>
          <div className="section__titles" onClick={handleFilterChange}>
            <div
              className="section__title filter-btn "
              data-id="Featured Products"
            >
              <span className="dot" />
              <h1 className="primary__title">Featured Products</h1>
            </div>
          </div>
        </div>

            <div className="category__container">
                  <div className="category__center">
                    {products.map((items) =>(
                        <Product  key={items.id} image={items.image} title={items.title} price={items.price} id={items.id}/>
                          ))}
               
                  </div>
            </div>
      </div>
    </section>
  );
}

export default ProductList;
