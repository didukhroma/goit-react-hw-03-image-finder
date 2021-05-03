import axios from 'axios';
import settings from '../../settings/settings';
const { API_KEY, BASE_URL } = settings;
const options = {
  imageType: 'photo',
  orientation: 'horizontal',
  resultsPerPage: 12,
};
const apiService = async (query, page) => {
  const request = `${BASE_URL}?image_type=${options.imageType}&orientation=${options.orientation}&q=${query}&page=${page}&per_page=${options.resultsPerPage}&key=${API_KEY}`;
  try {
    const response = await axios.get(request);
    const {
      data: { hits },
    } = response;
    return hits;
  } catch (error) {
    alert('Please enter a more specific word');
    return null;
  }
};
export default apiService;
