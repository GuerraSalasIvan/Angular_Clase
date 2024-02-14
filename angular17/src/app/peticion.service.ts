import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeticionService {

  apiUrl = 'https://api.themoviedb.org/3';
  apiKey = '665eddc29536d1ffc4e5fdace47ae8c7';

  constructor(private http: HttpClient) { }

  getPopularMovies() {
    const url = `${this.apiUrl}/movie/popular?api_key=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}

