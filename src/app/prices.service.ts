import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class PricesService {
private apiUrl = 'https://saudi-sas.com:8446/globisoft/api/pricing/plans';
  constructor( private http: HttpClient) { 
  }

  getData(): Observable<any> {
    return this.http.get(this.apiUrl);
    }
 
}
