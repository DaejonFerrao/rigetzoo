import "./Carousel.css";

import tiger from "../Images/tiger.jpeg";

const Carousel = () => {
  return (
    <div className="slideshow-container">

      <div className="mySlides fade">
        <div className="numbertext">1 / 3</div>
        <img src={tiger} style="width:100%">
          <div className="Text">Caption One</div>
        </img>
      </div>

      <div className="mySlides fade">
        <div className="numbertext">2 / 3</div>
        <img src={tiger} style="width:100%">
          <div className="Text">Caption Two</div>
        </img>
      </div>

      <div className="mySlides fade">
        <div className="numbertext">3 / 3</div>
        <img src={tiger} style="width:100%">
          <div className="Text">Caption Three</div>
        </img>
      </div>

      <a className="prev" onclick="plusSlides(-1)">&#10094;</a>
      <a className="prev" onclick="plusSlides(1)">&#10095;</a>

      <div style="text-align:center">
        <span className="dot" onClick="currentSlide(1)"></span>
        <span className="dot" onClick="currentSlide(2)"></span>
        <span className="dot" onClick="currentSlide(3)"></span>
      </div>

    </div>
  )
}

export default Carousel;