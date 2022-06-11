import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {
  private apiKey = 'd638c5af3dfeb0f0a9243ec7ce87ccf7';
  private ts = '1';
  private hash = '5a8151ff7b426f6e2a685d6111829022';
  private url: string = 'https://gateway.marvel.com/v1/public/characters?limit=100&ts=' + this.ts + '&apikey=' + this.apiKey + '&hash=' + this.hash;
  private urlCharacter: string = 'https://gateway.marvel.com/v1/public/characters/';

  constructor(private http: HttpClient) { }

  get apiListAllCharacteracters():Observable<any> {
    return this.http.get<any>(this.url).pipe();
  }

  public apiGetCharacter(id: string):Observable<any> {
    console.log(this.urlCharacter + id + '?ts=' + this.ts + '&apikey=' + this.apiKey + '&hash=' + this.hash);
    return this.http.get<any>(this.urlCharacter + id + '?ts=' + this.ts + '&apikey=' + this.apiKey + '&hash=' + this.hash).pipe();
  }
}
