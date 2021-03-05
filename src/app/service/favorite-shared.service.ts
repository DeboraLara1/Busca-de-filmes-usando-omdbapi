import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteSharedService {

  constructor() { }
  //Para o botão favorite ficar funcional usei o localStorage, mas não é o ideial. O correto seria ter um BD com um Endpoint que pudessemos fazer a chamada.
  getSelectedFilms() {
    return Object.entries(JSON.parse(localStorage.getItem("selectedFilms")))
  }
  setSelectedFilm(selectedFilm: any) {
    if (localStorage.getItem("selectedFilms") != null) {
      var existingData = Array.from(JSON.parse(localStorage.getItem("selectedFilms"))) || [];
      existingData.push(selectedFilm);
      localStorage.setItem("selectedFilms", JSON.stringify(existingData));
    } else {
      localStorage.setItem("selectedFilms", JSON.stringify(selectedFilm));
    }
  }
}
