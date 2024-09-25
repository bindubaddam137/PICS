import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: "Client-ID udF59BwxXDSYJaWy1W5Apcgti1gZkueGdJ5DqQIgiAY",
    },
    params: {
      query: "term",
    },
  });
  //console.log(response);
  return response.data.results;
};
export default searchImages;
