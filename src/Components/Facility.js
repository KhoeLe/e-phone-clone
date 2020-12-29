import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import HeadsetIcon from '@material-ui/icons/Headset';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import "./Facility.css"

function Facility() {
  return (
    <section className="facility__section section" id="facility">
      <div className="container">
        <div className="facility__container">
          <div className="facility__box">
            <div className="facility-img__container">
              <svg>
                <FlightTakeoffIcon/>
              </svg>
            </div>
            <p>Free SHIPPING WORLD WIDE</p>
          </div>
          <div className="facility__box">
            <div className="facility-img__container">
              <svg>
                <CardGiftcardIcon/>
              </svg>
            </div>
            <p>100% MONEY BACK GUARANTEE</p>
          </div>
          <div className="facility__box">
            <div className="facility-img__container">
              <svg>
                <CreditCardIcon/>
              </svg>
            </div>
            <p>MANY PAYMENT GATEWAY</p>
          </div>
          <div className="facility__box">
            <div className="facility-img__container">
              <svg>
                <HeadsetIcon/>
              </svg>
            </div>
            <p>24/7 ONLINE SUPPORT</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Facility;
