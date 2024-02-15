import { Component } from '@angular/core';
import { PeticionService } from '../peticion.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-watchlist',
  templateUrl: './watchlist.component.html',
  styleUrl: './watchlist.component.scss',
  providers: [PeticionService]
})
export class WatchlistComponent {

  pelis: any[] = [];

  constructor(
    private peticionService: PeticionService,
    private http: HttpClient,
  ) {}

  ngOnInit(): void { 
    this.peticionService.getPopularMovies().subscribe((data: any) => {
      this.pelis = data.results.slice(0,15)
    });
  }
}
