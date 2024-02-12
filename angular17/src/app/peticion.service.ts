import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeticionService {

  apiUrlTopRated = 'https://api.themoviedb.org/3/movie/top_rated'
  apiKey = '665eddc29536d1ffc4e5fdace47ae8c7';

  constructor(private http: HttpClient) { }

    getTopRated(){
      const url = `${this.apiUrlTopRated}&api_key=${this.apiKey}`;
      return this.http.get(url)
    }
      
       
}

