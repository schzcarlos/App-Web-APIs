import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HoroscopoService {

  constructor(private _http:HttpClient) { }

  getHoroscopo(signo:string):Observable<any>{
    const httpOptions={
      headers: new HttpHeaders({
        'content-type': 'application/x-www-form-urlencoded',
        'X-RapidApi-Host': 'horoscope-api.p.rapidapi.com',
        'X-RapidAPI-Key': '3c1eea0f6amsh5b4b679132d2d64p1bcb7bjsncad57bb8ca0a'
      })
    };
    return this._http.get("https://horoscope-api.p.rapidapi.com/pt/"+signo, httpOptions);

  }
}
