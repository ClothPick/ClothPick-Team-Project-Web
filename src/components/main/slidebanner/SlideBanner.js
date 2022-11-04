import React from "react";
import './SlideBanner.css'
import ResourMethod from "../../../apis/ResourcesMethod";
const colors = ["#0088FE", "#00C49F", "#FFBB28"];
const delay = 3500;
const SlideBanner = () => {
    const [index, setIndex] = React.useState(0);
    const [bannerlist, setBannerList] = React.useState([]);
    const [foldername, setFolderName] = React.useState('');
    const [check, setCheck] = React.useState(true);

    const timeoutRef = React.useRef(null);
    function resetTimeout() {
        if (timeoutRef.current) {
          clearTimeout(timeoutRef.current);
        }
      }

    React.useEffect(() => {
      if(check){
        const get = ResourMethod.BannerList();
        const getData = () => {
          get.then(data => {
            for(let i=0; i<data.length; i++){
              setBannerList(bannerlist => [...bannerlist, `http://192.168.0.101:8087/api/v1/displayimg/resources/banner/${data[0].split('_', 1)}/${data[i]}`])
            }
            // console.log(`http://localhost:8087/api/v1/displayimg/resources/banner/${data[0].split('_', 1)}/${data[0]}`);
            // console.log(bannerlist);
            // setBannerLists(bannerlist);
            setCheck(false);
          });
        };
        getData();
      }

        resetTimeout();
        timeoutRef.current = setTimeout(
          () =>
            setIndex((prevIndex) =>
              prevIndex === bannerlist.length - 1 ? 0 : prevIndex + 1
            ),
          delay
        );
        return () => {
            resetTimeout();
          };
      }, [index]);

    return(

        <div className="SlideBanner_Slideshow">
        <div className="SlideBanner_SlideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
          {bannerlist && bannerlist.map((data, index) => (
            <div className="SlideBanner_Slide"
                 key={index}>
                      <img src={data} alt='' className="SlideBanner_Img"/>
             </div>
          ))}
        </div>

        <div className="SlideBanner_SlideshowDots">
        {
        bannerlist && bannerlist.map((_, idx) => (
          <div key={idx}
          className={`SlideBanner_SlideshowDot${index === idx ? " active" : ""}`}
          onClick={() => {
            setIndex(idx);
          }}></div>
        ))

        }
      </div>
      </div>

    )
}
export default SlideBanner;