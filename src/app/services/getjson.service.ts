import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GetjsonService {

constructor(private http: Http) { }

getjsonfromapi(limit: number, title: string) {
    const link = 'https://jsonplaceholder.typicode.com/photos';
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    if(limit){
      return this.http.get(link +'?albumId=' + limit, {headers: headers})
      .map(res => res.json());
    } else if (title){
      return this.http.get(link +'?title=' + title, {headers: headers})
      .map(res => res.json());
    } else {
      return this.http.get(link, {headers: headers})
      .map(res => res.json());
    }
  }


  getjsonfromgiven(limit: number, title: string) {
    const link = '/assets/jsonData.json';
    const headers = new Headers();
    headers.append('Content-Type', 'application/json');
    if(limit){
      return this.http.get(link +'?albumId=' + limit, {headers: headers})
      .map(res => res.json());
    } else if (title){
      return this.http.get(link +'?title=' + title, {headers: headers})
      .map(res => res.json());
    } else {
      return this.http.get(link, {headers: headers})
      .map(res => res.json());
    }
  }
}