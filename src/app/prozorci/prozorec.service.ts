import { Injectable } from '@angular/core';
import { Prozorec } from '../prozorci/prozorci.component';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class ProzorecService {
  private prozorciUrl = 'api/prozorci';  // URL to web api
  constructor(private http: HttpClient) { }

  getProzorci(): Observable<Prozorec[]> {
    return this.http.get<Prozorec[]>(this.prozorciUrl)
      .pipe(
      catchError(this.handleError('getHeroes', []))
      );
  }

  // getProzorec(id: number): Observable<Prozorec> {
  //   const url = `${this.prozorciUrl}/${id}`;
  //   return this.http.get<Prozorec>(url).pipe(
  //     catchError(this.handleError<Prozorec>(`getHero id=${id}`))
  //   );
  // }

  // addHero(prozorec: Prozorec): Observable<Prozorec> {
  //   return this.http.post<Prozorec>(this.prozorciUrl, prozorec, httpOptions).pipe(
  //     catchError(this.handleError<Prozorec>('addHero'))
  //   );
  // }

  // deleteHero(hero: Prozorec | number): Observable<Prozorec> {
  //   const id = typeof hero === 'number' ? hero : hero.id;
  //   const url = `${this.prozorciUrl}/${id}`;

  //   return this.http.delete<Prozorec>(url, httpOptions).pipe(
  //     catchError(this.handleError<Prozorec>('deleteHero'))
  //   );
  // }


  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    };
  }

  updateHero(prozorec: Prozorec): Observable<any> {
    return this.http.put(this.prozorciUrl, prozorec, httpOptions)
      .pipe(
      catchError(this.handleError<any>('updateHero'))
      );
  }

}
