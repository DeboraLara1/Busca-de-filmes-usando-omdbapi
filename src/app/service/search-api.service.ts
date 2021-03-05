import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class SearchApiService {
  // http://www.omdbapi.com/?apikey=700a43f2&s=game
  // http://www.omdbapi.com/?apikey=700a43f2&i=tt0944947
  KEY: string = '700a43f2';
  URL_API = `http://www.omdbapi.com/?apikey=`;

  constructor(private http: HttpClient) { }

  getAllFilms(name: string): Promise<any> {
    const testes = this.http.get(`${this.URL_API}${this.KEY}&s=${name}`).toPromise();
    return testes;
  }

  getAllFilmsId(id: string): Promise<any> {
    const teste = this.http.get(`${this.URL_API}${this.KEY}&i=${id}`).toPromise();
    return teste;
  }

}
