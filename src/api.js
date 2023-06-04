import axios from "axios"

const searchImages = async (term) => {
  const response = await axios.get("https://api.unsplash.com/search/photos", {
    headers: {
      Authorization: 'Client-ID TagPPn0yj-pm1SljH9maWQN9iFPW4T-_OA3VdqYZR-E'
    },
    params: {
      query: term,
    }
  });

  return response.data.results;
};

export default searchImages;