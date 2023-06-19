import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  // private SERVER_URL = environment.serverURL;

  constructor(private http: HttpClient) {}


  getAllProducts(numberOfResults = 10) {
    // return this.http.get(this.SERVER_URL + '/products', {
    //   params: {
    //     limit: numberOfResults.toString()
    //   }
    // });
    
  }


}
  