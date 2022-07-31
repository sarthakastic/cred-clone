import React, { useRef, useState } from "react";
import { useEffect } from "react";
import "./product.css";

const Product = () => {
  const [showAnimation, setShowAnimation] = useState(false);

  const ref = useRef(null);

  const toggleAnimation = (e) => {
    if (e[0]?.isIntersecting) {
      setShowAnimation(true);
    }
  };
  const options = {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(toggleAnimation, options);
    if (!showAnimation) {
      if (ref.current) {
        observer.observe(ref.current);
      }
    }
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  });

  return (
    <div
      className={`product ${showAnimation ? "scale-up-ver-bottom" : ""}`}
      ref={ref}
    >
        { showAnimation &&(
      <div className="showcase-wrapper">
        <img
          className="showcase-ui showcase-1"
          src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-2.png"
          alt=""
        />
        <img
          className="showcase-ui showcase-2"
          src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/left-1.png"
          alt=""
        />
        <img
          className="showcase-ui showcase-3"
          src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/center.png"
          alt=""
        />
        <img
          className="showcase-ui showcase-4"
          src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-1.png"
          alt=""
        />
        <img
          className="showcase-ui showcase-5"
          src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/right-2.png"
          alt=""
        />
      </div>)}
    </div>
  );
};

export default Product;
