import settings from '../../settings/settings';
const { API_KEY, BASE_URL } = settings;
class ApiService {
  constructor() {
    this.imageType = 'photo';
    this.orientation = 'horizontal';
    this.query = null;
    this.page = 1;
    this.resultsPerPage = 12;
  }

  async fetchRequest() {
    let query = this.query.trim();
    if (query === null || query === '') return;
    const response = await fetch(this.createRequest(this.query));
    if (!response.ok) throw response;
    return await response.json();
  }
  createRequest() {
    return `${BASE_URL}?image_type=${this.imageType}&orientation=${this.orientation}&q=${this.query}&page=${this.page}&per_page=${this.resultsPerPage}&key=${API_KEY}`;
  }
  nextPage() {
    this.page += 1;
    return this.fetchRequest();
  }
  newPage() {
    this.page = 1;
    return this.fetchRequest();
  }
}
const Api = new ApiService();
export default Api;
