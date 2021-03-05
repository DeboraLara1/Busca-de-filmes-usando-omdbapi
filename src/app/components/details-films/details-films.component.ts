import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { detailsModel } from 'src/app/model/details.model';
import { FavoriteSharedService } from 'src/app/service/favorite-shared.service';
import { SearchApiService } from 'src/app/service/search-api.service';

@Component({
  selector: 'app-details-films',
  templateUrl: './details-films.component.html',
  styleUrls: ['./details-films.component.scss']
})
export class DetailsFilmsComponent implements OnInit {
  details
  constructor(private activevatedRoute: ActivatedRoute, private searchApiService: SearchApiService, private router: Router, private favoriteSharedService: FavoriteSharedService) { }

  ngOnInit() {
    console.log(this.activevatedRoute.snapshot.params.id);
    try {
      const result: any = this.searchApiService.getAllFilmsId(this.activevatedRoute.snapshot.params.id);
      this.details = result;
    } catch (e) {
      console.log(e)
    }
  }

  setSelectedFilm(filmId: any) {
    console.log(filmId)
    this.favoriteSharedService.setSelectedFilm(filmId);

    this.router.navigate(['/favorite']);
  }
}
