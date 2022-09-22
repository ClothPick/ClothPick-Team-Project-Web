import React from "react";
import './SlideBanner.css'
import Banner01 from '../../../assets/image/bener/image 1.png'
import Banner02 from '../../../assets/image/bener/image 2.PNG'
import Banner03 from '../../../assets/image/bener/image 3.png'
const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const image = [Banner01, Banner02, Banner03];
const delay = 3500;
const SlideBanner = () => {
    const [index, setIndex] = React.useState(0);
    const timeoutRef = React.useRef(null);
    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }
    React.useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === colors.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
        return () => {
            resetTimeout();
          };
      }, [index]);

    return(
    <div className="slideshow">
      <div className="slideshowSlider"
      style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {image.map((image, index) => (
          <div className="slide"
                key={index}>
                    <img src={image} alt=''/>
            </div>
        ))}
      </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div key={idx}
          className={`slideshowDot${index === idx ? " active" : ""}`}
          onClick={() => {
            setIndex(idx);
          }}></div>
        ))}
      </div>
    </div>
    )
}
export default SlideBanner;