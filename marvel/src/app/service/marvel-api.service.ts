import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MarvelApiService {

  private url: string = 'http://gateway.marvel.com/v1/public/characters?limit=100&ts=1&apikey=e7f756ce4b8c8e87251071c473c4a115&hash=e5ac3c5a22ffc5b255b4f5f267b2843e'

  constructor(private http: HttpClient) { }

  get apiListAllCharacteracters():Observable<any> {
    return this.http.get<any>(this.url).pipe();
  }
}
