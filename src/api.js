import axios from 'axios';
const API_KEY = process.env.REACT_APP_API_KEY; 

const searchImages = async (term) => {

    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: API_KEY,
        },
        params: {
            query: term,
        }
    });

    return response.data.results;
};

export default searchImages;