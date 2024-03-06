import React from "react";
import logoImage from "../../src/img/Manna Kitchen Logo.png";
import MarqueeComponent from "./MarqueeComponent";
export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <MarqueeComponent/>
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a className="navbar-brand page-scroll" href="#page-top" style={{fontSize: '15px', }}>
            <img src={logoImage} alt="Manna Kitchen Logo" style={{ height: '35px', marginRight: '10px' }} />
            {/* Manna Kitchen Ormiston */}
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            {/* <li>
              <a href="#features" className="page-scroll">
                Features
              </a>
            </li> */}
            {/* <li>
              <a href="#about" className="page-scroll">
                About
              </a>
            </li> */}
            <li>
              <a href="https://www.doordash.com/store/manna-kitchen-auckland-27642015/?event_type=autocomplete&pickup=false" className="page-scroll">
               Order Now
              </a>
            </li>
            
            <li>
              <a href="#portfolio" className="page-scroll">
                Restaurant Menu
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Testimonials
              </a>
            </li>

            <li>
              <a href="#team" className="page-scroll">
                Gallery/Videos
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contact & Reservation
              </a>
            </li>
            <li>
  <a href="https://mannakitchenormiston.tawk.help/article/faq" className="page-scroll" target="_blank" rel="noreferrer">
    Information Hub
  </a>
</li>

          </ul>
        </div>
      </div>
    </nav>
  );
};
