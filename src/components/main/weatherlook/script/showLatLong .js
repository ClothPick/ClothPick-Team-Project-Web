// import Axios from "axios";
// import { useState } from "react";
// import { useEffect } from "react";
// import useGeolocation from "react-hook-geolocation";
// import Kakaomethod from "../../../apis/Kakaomethod";
// const ComponentWithGeolocation = () => {
//    const geolocation =  useGeolocation();
//   const [adress, setAdress] = useState('');
//   const [click, setClick] = useState(true);
//   const [longitude, setLongitude] =useState('');
//   const [latitude, setlatitude] =useState('');
//   let aaa = [];
//   let a;
//   useEffect(() => {
//     geo()
//     console.log(geolocation.longitude + ","+ geolocation.latitude)
//     console.log(longitude + ","+ latitude)
//     const get = Axios({
//       method: 'get',
//       url: 'https://dapi.kakao.com/v2/local/geo/coord2address',
//       headers: {'Authorization': 'KakaoAK 09dc46dd9ad0f57db70992f57195739b'},
//       params: {
//         x: 127.1580072,
//         y: 36.815063
//       }
//     })
//     .then(function (response) {
//       console.log(response.data);
//       console.log(response.data.documents[0].address.address_name);
//       setAdress(response.data.documents[0].address.address_name);
//     });


//   }, [click]);

//  const geo = async() => {
//   console.log(geolocation.longitude + ","+ geolocation.latitude)
//   setLongitude(geolocation.longitude);
//   setlatitude(geolocation.latitude);
//  }
//   return !geolocation.error ? (
//     <ul>
//       <li>Latitude: {geolocation.latitude}</li>
//       <li>Longitude: {geolocation.longitude}</li>
//       <li>Location accuracy: {geolocation.accuracy}</li>
//       <li>Altitude: {geolocation.altitude}</li>
//       <li>Altitude accuracy: {geolocation.altitudeAccuracy}</li>
//       <li>Heading: {geolocation.heading}</li>
//       <li>Speed: {geolocation.speed}</li>
//       <li>Timestamp: {geolocation.timestamp}</li>
//       { a = adress.substr(0, 5) }

//     </ul>

//   ) : (
//     <p>No geolocation, sorry.</p>
//   );
// };

// export default ComponentWithGeolocation;