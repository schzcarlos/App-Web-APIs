import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConvertServiceService {

  constructor(private _http: HttpClient) { }

  public postConvert(valor:string,origen:string,destino:string):Observable<any>{
    const encodedParams = new URLSearchParams();
    encodedParams.set('from-value', valor);
    encodedParams.set('from-type', origen);
    encodedParams.set('to-type', destino);
    const httpOptions = {
      headers: new HttpHeaders({
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Host': 'community-neutrino-currency-conversion.p.rapidapi.com', 
      'X-RapidAPI-Key': '3c1eea0f6amsh5b4b679132d2d64p1bcb7bjsncad57bb8ca0a'
      })
      };
      return this._http.post("https://community-neutrino-currency-conversion.p.rapidapi.com/convert",encodedParams, httpOptions);
     
  }
}
