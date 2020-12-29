import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import DraftsIcon from '@material-ui/icons/Drafts';
import ExploreIcon from '@material-ui/icons/Explore';
import "./Footer.css"

function Footer() {
    
    
  
  return (
    <footer id="footer" className="section footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer-top__box">
            <h3>EXTRAS</h3>
            <a href="/">Brands</a>
            <a href="/">Gift Certificates</a>
            <a href="/">Affiliate</a>
            <a href="/">Specials</a>
            <a href="/">Site Map</a>
          </div>
          <div className="footer-top__box">
            <h3>INFORMATION</h3>
            <a href="/">About Us</a>
            <a href="/">Privacy Policy</a>
            <a href="/">Terms &amp; Conditions</a>
            <a href="/">Contact Us</a>
            <a href="/">Site Map</a>
          </div>
          <div className="footer-top__box">
            <h3>MY ACCOUNT</h3>
            <a href="/">My Account</a>
            <a href="/">Order History</a>
            <a href="/">Wish List</a>
            <a href="/">Newsletter</a>
            <a href="/">Returns</a>
          </div>
          <div className="footer-top__box">
            <h3>CONTACT US</h3>
            <div>
              <span>
                <svg>
                  <RoomIcon/>
                </svg>
              </span>
              42 Dream House, Dreammy street, 7131 Dreamville, USA
            </div>
            <div>
              <span>
                <svg>
                  <PhoneIcon/>
                </svg>
              </span>
              company@gmail.com
            </div>
            <div>
              <span>
                <svg>
                  <DraftsIcon/>
                </svg>
              </span>
              456-456-4512
            </div>
            <div>
              <span>
                <svg>
                  <ExploreIcon/>
                </svg>
              </span>
              Dream City, USA
            </div>
          </div>
        </div>
      </div>
      <div className="footer__bottom">
        <div className="footer-bottom__box"></div>
        <div className="footer-bottom__box"></div>
      </div>      
; 
    </footer>
  );
}

export default Footer;
