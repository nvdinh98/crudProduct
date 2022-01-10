import {Component, OnInit} from '@angular/core';
import {Product} from '../../model/product';
import {Subscription} from 'rxjs';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

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
    private route: Router,
  ) {
    this.sub = this.activeRouter.paramMap.subscribe(
      (paramMap: ParamMap) => {
        this.id = Number(paramMap.get('id'));
        this.findProductById(this.id).subscribe(product => {
          this.product = product;
        });
      }
      );
  }

  ngOnInit() {
  }

  private findProductById(id: number) {
    return this.productService.findProductById(id);
  }

  editProduct() {
    this.productService.updateById(this.product, this.product.id).subscribe(() => {
      this.route.navigateByUrl('product/list');
    });
  }
}
