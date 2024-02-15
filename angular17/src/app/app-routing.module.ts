import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { peliculaComponent } from './pelicula/pelicula.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'watchlist', component: WatchlistComponent},
  { path: 'pelicula', component: peliculaComponent},
  { path: 'home', component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
