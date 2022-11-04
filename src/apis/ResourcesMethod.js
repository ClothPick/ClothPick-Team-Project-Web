import Instance from "./ResourcesInstance";

async function BannerList() {
  try {
      const response = await Instance.get('/api/v1/resources/banner');
      console.log(response.data);
      return response.data;
  } catch (error) {
      console.log(error);
      return error;
  }
};

async function DailyList() {
  try {
      const response = await Instance.get('/api/v1/resources/daily');
      console.log(response.data);
      return response.data;
  } catch (error) {
      console.log(error);
      return error;
  }
};
async function WeatherList( temp ) {
  try {
      const response = await Instance.get(`/api/v1/resources/weather/${temp}`);
      console.log(response.data);
      return response.data;
  } catch (error) {
      console.log(error);
      return error;
  }
};

async function ColorLukList() {
  try {
      const response = await Instance.get(`/api/v1/resources/lukcolor`);
      console.log(response.data);
      return response.data;
  } catch (error) {
      console.log(error);
      return error;
  }
};

const ResourMethod = {
  BannerList,
  DailyList,
  WeatherList,
  ColorLukList
}

export default ResourMethod;