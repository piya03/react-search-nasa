import axios from "axios";

export const todayImgAPI = () => {
  return axios(
    `${process.env.REACT_APP_BASE_URL}?api_key=${process.env.REACT_APP_API_KEY}`
  )
    .then((res) => {
      if (res?.status === 200) {
        return res;
      }
    })
    .catch((err) => {
      console.log(err);
      return {
        isError: true,
        err: err,
      };
    });
};

//search api
export const searchAPI = (val, page) => {
  return axios(`https://images-api.nasa.gov/search?q=${val}&page=${page}`)
    .then((res) => {
      if (res?.status === 200) {
        return res;
      }
    })
    .catch((err) => {
      console.log(err);
      return {
        isError: true,
        err: err,
      };
    });
};
