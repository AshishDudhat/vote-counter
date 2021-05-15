import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(private http: HttpClient) {
  }

  getImages() {
    return this.http.get<any>(`https://jsonplaceholder.typicode.com/photos`)
    .pipe(map(data => {
        return data;
    }));
  }
}
