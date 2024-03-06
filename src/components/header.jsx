import React, { useEffect, useState } from "react";
import mainLogo1 from "../img/Manna Kitchen Logo.png";
import mainLogo2 from "../img/Manna Kitchen Logo.png";
import mainLogo3 from "../img/Manna Kitchen Logo.png";

export const Header = (props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [mainLogo1, mainLogo2, mainLogo3];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds (5000 milliseconds)

    return () => clearInterval(intervalId);
  }, []);

  return (
    <header id="header">
      <div className="intro" style={{ backgroundImage: `url(${images[currentImageIndex]})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover', backgroundColor: 'rgb(255, 255, 255)', height: '6rem' }}>
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text" style={{ position: 'relative', textAlign: 'center', marginTop: '2rem', marginBottom: '2rem' }}>
                {/* Removed the h1 element */}
                <p style={{ fontSize: '10rem' }}>
                  {props.data ? props.data.paragraph : "Loading"}
                </p>

                <div className="button-container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '2rem' }}>
                <a
                    href="https://www.doordash.com/store/manna-kitchen-auckland-27642015/?event_type=autocomplete&pickup=false"
                    className="btn btn-custom btn-lg page-scroll shining-button box-style"
                    style={{ marginBottom: '1rem' }}
                  >
                    Order Now
                  </a>
                  <a
                    href="#Contact"
                    className="btn btn-custom btn-lg page-scroll shining-button box-style"
                    style={{ marginBottom: '1rem' }}
                  >
                    Contact Us/Reservation
                  </a>

                  <a
                    href="#portfolio"
                    className="btn btn-custom btn-lg page-scroll shining-button box-style"
                    style={{ marginBottom: '10rem' }}
                  >
                    Restaurant Menu
                  </a>
                </div>

                <script src="//code.tidio.co/pyrul9dl4isngp3ftlgvakecwuj8uxk0.js" async></script>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
