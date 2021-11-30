export default class RestoService {

  url = 'http://localhost:3004'

  async getResource(url) {
    const responce = await fetch(`${this.url}${url}/`);
    if (!responce.ok) {
      throw new Error('Server Error');
    }
    const result = await responce.json();
    return result;
  }
  
  async getMenuItems() {
    return await this.getResource('/menu/')
  }
}