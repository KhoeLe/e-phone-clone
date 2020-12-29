import "./Header.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import CloseIcon from '@material-ui/icons/Close';
import ListIcon from '@material-ui/icons/List';
// import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";


function Header() {
 
  const [isActive, setActive] = useState("false");
  const [isActive1 , setActive1] = useState("false");

  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  const [hev, setHev] = useState(false);

  useEffect(() => {
      window.addEventListener("scroll", () =>{
          if(window.scrollY > 100){
              setHev(true)
          } else setHev(false);
      });
      return () =>{
          window.removeEventListener("scroll");
      }
  }, [])   

  useEffect(() => {
    const onScroll = e => {
        setScrollTop(e.target.documentElement.scrollTop);
        setScrolling(e.target.documentElement.scrollTop > scrollTop);
      };
      window.addEventListener("scroll", onScroll);
  
      return () => window.removeEventListener("scroll", onScroll);

  }, [scrollTop]);

  const handleToggle = (e) => {
    e.preventDefault()
    setActive(!isActive);
    setActive1(!isActive)
  };

  return (
    <div className="navigation">
      <div className="container">
        <nav className={`nav ${hev && "fix__nav"}`}>
          <div className="nav__hamburger">
            <svg onClick={handleToggle}>
              {/* <use xlinkHref="../images/sprite.svg#icon-cross" /> */}
              <ListIcon   />
            </svg>
          </div>
          <div className="nav__logo">
          <Link to="/" className="scroll-link">PHONE</Link>
            {/* <a href="/" className="scroll-link">
              PHONE
            </a> */}
          </div>
          <div className={isActive ? "nav__menu open" : "nav__menu"}>
            <div className="menu__top">
              <span className="nav__category">
                PHONE 123
                <a href="/" className="close__toggle" onClick={handleToggle}>
                  <svg >
                    {/* <use xlinkHref="./images/sprite.svg#icon-cross" /> */}
                      <CloseIcon  />
                  </svg>
                </a>
              </span>
            </div>
            <ul className="nav__list">
              <li className="nav__item">
                {/* <a href="/header" className="nav__link scroll-link">
                  Home
                </a> */}
                <Link to="/home" className="nav__link scroll-link">PHONE</Link>
              </li>
              <li className="nav__item">
                <a href="#category" className="nav__link scroll-link">
                  Category
                </a>
              </li>
              <li className="nav__item">
                <a href="#blog" className="nav__link scroll-link">
                  Blog
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link scroll-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="nav__icons">
            <a href="/" className="icon__item">
              <svg className="icon__user">
                {/* <use xlinkHref="./images/sprite.svg#icon-user" /> */}
                <AccountCircleIcon/>
              </svg>
            </a>
            <a href="/" className="icon__item">
              <svg className="icon__search">
                {/* <use xlinkHref="./images/sprite.svg#icon-search" /> */}
                <SearchIcon/>
              </svg>
            </a>
            <a href="/" className="icon__item">
              <svg className="icon__cart">
                {/* <use xlinkHref="./images/sprite.svg#icon-shopping-basket" /> */}
                  <ShoppingBasketIcon/>
              </svg>
              <span id="cart__total">0</span>
            </a>
          </div>
        </nav>
        {/* <a href="/header" className={isActive ? "goto-top show-top scroll-link" : " goto-top scroll-link"} in={!scrolling}  >
           <svg>
              <ArrowUpwardIcon />
           </svg>
        </a>    */}
      </div>
    </div>
  );
}

export default Header;
