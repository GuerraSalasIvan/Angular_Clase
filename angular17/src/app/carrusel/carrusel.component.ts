import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PeticionService } from '../peticion.service';

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.scss']
})

export class CarruselComponent implements OnInit {
  peliculas: any[] = [];

  constructor(private http: HttpClient, private peticionService: PeticionService) {}

  ngOnInit(): void {
    this.peticionService.getPopularMovies().subscribe(data => {
      this.peliculas = data.results;
    });
  }
}
