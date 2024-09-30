import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FetchDataService {

  private baseUrl = 'https://saudi-sas.com:8446/globisoft/api/';

  constructor(private http: HttpClient) { }
  getData(): Observable<any> {
    return this.http.get(this.baseUrl + 'product-category?sid=2');
    }

    
    getFeature(id:string): Observable<any> {
      return this.http.get(this.baseUrl + 'product-category/product?sid='+id);
      }
}
