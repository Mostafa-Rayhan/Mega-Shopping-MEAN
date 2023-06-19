import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: any[] = [];
  router: any;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((prods: {count: Number, products: any[]}) => {
      this.products = prods.products;
      // console.log(this.products);
    });
  }

  selectProduct(id: Number) {
    this.router.navigate(['/product', id]).then();
  }

}
