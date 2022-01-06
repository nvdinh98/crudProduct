import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product [] = [];

  constructor(private productService: ProductService) {
  }

 ngOnInit() {
    this.productService.getAll().subscribe(data => {
      console.log(data);
      this.products = data;
      console.log(data);
    }, error => {
    console.log(error);
    });
 }
}
