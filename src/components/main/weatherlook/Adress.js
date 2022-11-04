import Axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Temporal } from '@js-temporal/polyfill';
import mascot from '../../../assets/image/cloth.png';
import './Adress.css'
const Adress = (props) => {
  const latitude = props.latitude;
  const longitude = props.longitude
  const [adress, setAdress] = useState('');
  var now = Temporal.Now.plainDateISO();
  var date = now.toString().split('-');
  var today = new Date();
  var week = new Array('SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT');
  var days = week[today.getDay()];
  let a;
  useEffect(() => {
    // console.log(geolocation.longitude + ","+ geolocation.latitude)
    // console.log(longitude + ","+ latitude)
    if(props.latitude !== null && props.longitude !== null ){
    const get = Axios({
      method: 'get',
      url: 'https://dapi.kakao.com/v2/local/geo/coord2address',
      headers: {'Authorization': 'KakaoAK 09dc46dd9ad0f57db70992f57195739b'},
      params: {
        x: props.longitude,
        y: props.latitude
      }
    })
    .then(function (response) {
      // console.log(response.data);
      setAdress(response.data);
      setAdress(response.data.documents[0].address.address_name);
    });

    }
  }, [props.longitude, props.latitude]);



  return (
    <div className="Adress_Component">
      <p className="Adress_infoText">{ a = adress.substr(0, 5) }</p>
      <div className="Adress_infoText_DayinfoBox">
        <p className="Adress_infoText_DayinfoText">{days}</p>
        <p className="Adress_infoText_DayinfoText">{date[0]}/{date[1]}/{date[2]}</p>
      </div>
      <div className="Adress_MascotBox">
      <p  className="speech-bubble" >이 날씨엔 이 옷임</p>
        <img src={mascot} alt='' className="Adress_Mascot"/>
      </div>

    </div>
  )
};

export default Adress;