import {get} from '../request';
import {Movie} from "../models/movie-model";
import { MovieDetail } from '../models/movie-detail-model';

const API_KEY = '27d1e883aeb1a36f7523ab8ea65bb786'

export class MovieService {
    static getMovieList(page:number): Promise<Movie> {
        return get(`discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}&with_watch_monetization_types=flatrate`).then(response => response.getBody());
    }

    static getMovieById(id:string): Promise<MovieDetail> {
        return get(`movie/${id}?api_key=${API_KEY}&language=en-US`).then(response => response.getBody());
    }
}
