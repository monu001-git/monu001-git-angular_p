import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FrontApiService {
  constructor(private http: HttpClient) { }


  footerMenu() {
    return this.http.get('http://localhost:8000/api/footerMenu');
  }


  headerMenu() {
    return this.http.get('http://localhost:8000/api/headerMenu');
  }

}
