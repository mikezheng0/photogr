import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

import { IPhoto, fromServer } from './model';

// A fake API on the internets.
const URLS = {
  HOME_PHOTOS: 'http://www.mocky.io/v2/59e6784b120000e4030358c9'
};

@Injectable()
export class PhotoAPIService {
  constructor(private http: Http) {}

  getAll = (): Observable<IPhoto[]> =>
  this.http.get(URLS.HOME_PHOTOS)
      .map(resp => {return resp.json()})
      .map(records => records.map(fromServer))
    
}
