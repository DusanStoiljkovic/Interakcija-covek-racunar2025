import axios from "axios";

export class MovieService {
  static async getAllMovies(search: string = '') {
    return axios.get(`https://movie.pequla.com/api/movie?search=${search}`);
  }
}