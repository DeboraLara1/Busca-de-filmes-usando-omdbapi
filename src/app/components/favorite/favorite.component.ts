import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FavoriteSharedService } from 'src/app/service/favorite-shared.service';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  selectedFilms
  constructor(private favoriteSharedService: FavoriteSharedService) { }

  ngOnInit(): void {
    this.selectedFilms = this.favoriteSharedService.getSelectedFilms();
    if (this.selectedFilms[0].length > 1) {
      this.selectedFilms = Array.of(JSON.parse(localStorage.getItem("selectedFilms")))[0]
    }
    console.log(this.selectedFilms);
  }
}
