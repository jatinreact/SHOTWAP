import React from "react";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
const HomeCrousal = () => {
  const options = {
    loop: true,
    nav: false,
    autoplay: true,
    autoplayHoverPause: true,
    mouseDrag: true,
    margin: 30,
    center: false,
    dots: false,
    smartSpeed: 1500,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1200: {
        items: 3,
      },
    },
  };

  return (
    <>
      <div>
        <div className="mt-5">
          <OwlCarousel className="owl-theme" {...options} loop margin={3} nav>
            <div class="item">
              <h4 className="text-center">Our Clientele</h4>
              <h6 className="text-center">
                Easy to track multiple carriers in one place
              </h6>
              <p className="p-4">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book
              </p>
            </div>
          </OwlCarousel>
          ;
        </div>
      </div>
    </>
  );
};

export default HomeCrousal;
