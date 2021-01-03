import Banner from "Components/Banner";
import Collection from "Components/Collection";
import Facility from "Components/Facility";
import Footer from "Components/Footer";
import Header from "Components/Header";
import LatestProduct from "Components/LatestProduct";
import NewsSection from "Components/NewsSection";
import Popup from "Components/Popup";
import ProductList from "Components/ProductList";
import ScrollToTop from "Components/ScrollToTop";
import Testimonial from "Components/Testimonial";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />

          <Switch>

            <Route path="/">
                <Popup />
                <Banner />
                <div className='container'>
                <Collection/>
                <LatestProduct  id={1} />
                <ProductList  id={1} />
                </div>
                
                <Facility />
                <Testimonial id={1} />
              
            </Route>

         
          {/* <ScrollToTop /> */}
          </Switch>
              <NewsSection id={1}/>
              <Footer />
      </Router>
    </div>
  );
}

export default App;
