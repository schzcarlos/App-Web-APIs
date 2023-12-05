import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConcurrenciesService {

  constructor(private _http:HttpClient) { }

  public getCurrencies():Observable<any>{
    const httpOptions = {
      headers: new HttpHeaders({
      'content-type': 'application/x-www-form-urlencoded',
      'X-RapidAPI-Host': 'currency-converter18.p.rapidapi.com', 
      'X-RapidAPI-Key': '3c1eea0f6amsh5b4b679132d2d64p1bcb7bjsncad57bb8ca0a'
      })
    };
    return this._http.get("https://currency-converter18.p.rapidapi.com/api/v1/supportedCurrencies", httpOptions);
  }
}
