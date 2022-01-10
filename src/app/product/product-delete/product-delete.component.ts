import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {Subscription} from 'rxjs';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  product: Product = {
    id: 0,
    name: '',
    price: 0,
    description: '',
  };
  sub: Subscription;
  id = 0;


  constructor(
    private productService: ProductService,
    private activeRouter: ActivatedRoute,
    private router: Router
  ) {
    this.sub = this.activeRouter.paramMap.subscribe(
      (paramMap: ParamMap) => {
        this.id = Number(paramMap.get('id'));
        productService.findProductById(this.id).subscribe(product => {
          this.product = product;
        });
      }
    );
  }

  ngOnInit() {
  }

  deleteProduct() {
    console.log(this.product.id);
    this.productService.deleteProduct(this.id).subscribe(() => {
      this.router.navigate(['product/list']);
    });
  }
}
