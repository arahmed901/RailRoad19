import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Record } from "../models/Record";

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  private _url = `/assets/data/records.json`;

  constructor(private http: HttpClient) { }

  getRecords(): Observable<Record[]> {
    return this.http.get<Record[]>(this._url);
  }

}
