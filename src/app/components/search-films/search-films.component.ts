import { Component, OnInit } from '@angular/core';
import { SearchApiService } from 'src/app/service/search-api.service';
import { detailsModel } from './../../model/details.model';

@Component({
  selector: 'app-search-films',
  templateUrl: './search-films.component.html',
  styleUrls: ['./search-films.component.scss']
})
export class SearchFilmsComponent implements OnInit {
  filmes: detailsModel[] = [];

  constructor(private GetAllFilms: SearchApiService) { }

  ngOnInit(): void {
  }
  getFilms(event) {
    const filme = event.target.value;
    this.GetAllFilms.getAllFilms(filme).then(res =>
      this.filmes = res.Search
    )
    console.log("res", this.filmes)
  }
}
