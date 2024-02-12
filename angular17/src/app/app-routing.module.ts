import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WatchlistComponent } from './watchlist/watchlist.component';
import { peliculaComponent } from './pelicula/pelicula.component';

const routes: Routes = [
  { path: 'watchlist', component: WatchlistComponent},
  { path: 'pelicula', component: peliculaComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
