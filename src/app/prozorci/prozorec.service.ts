import { Injectable } from '@angular/core';
import { Prozorec } from '../prozorci/prozorci.component';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const prozorci = [
  { id: 11, width: 10, height: 12, type: 'KBE', shema: 'ednokril' },
  { id: 12, width: 10, height: 12, type: 'Kommerling 76', shema: 'fix' },
  { id: 13, width: 10, height: 12, type: 'KMG 4', shema: 'dvukril' },
];

@Injectable()
export class ProzorecService {
  pro = prozorci;
  private prozorciUrl = 'api/prozorci';  // URL to web api
  constructor(private http: HttpClient) { }

  getProzorci(): Observable<Prozorec[]> {
    return of(this.pro);
  }

}
