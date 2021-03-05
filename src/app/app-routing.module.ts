import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DetailsFilmsComponent } from './components/details-films/details-films.component';
import { FavoriteComponent } from './components/favorite/favorite.component';
import { HomeComponent } from './components/home/home.component';
import { SearchFilmsComponent } from './components/search-films/search-films.component';

const routes: Routes = [{
  path: "",
  component: HomeComponent
},
{
  path: "searchFilms",
  component: SearchFilmsComponent
},
{
  path: "searchFilms/details/:id",
  component: DetailsFilmsComponent
},
{
  path: "favorite",
  component: FavoriteComponent
}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
