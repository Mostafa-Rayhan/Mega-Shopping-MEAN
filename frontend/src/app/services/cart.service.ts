import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProductService } from './product.service';
import { OrderService } from './order.service';
import { environment } from 'src/environments/environment';
import { CartModelPublic } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private ServerURL = environment.serverURL;

  private cartDataClient: CartModelPublic = {prodData: [{incart: 0, id: 0}], total: 0};

  constructor(private http: HttpClient,
              private productService: ProductService,
              private orderService: OrderService) { }
}
