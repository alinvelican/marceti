import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { Product, ProductService } from '../shared/services';

@Component({
  selector: 'nga-product',
  styleUrls: [ './product.component.scss' ],
  templateUrl: './product.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductComponent {
  readonly product$: Observable<Product>;
  readonly suggestedProducts$: Observable<Product[]>;
  readonly categories$: Observable<string[]>;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {
    this.categories$ = this.productService.getAllCategories().pipe(
      map(categories => ['all', ...categories]));

    this.product$ = this.route.paramMap
      .pipe(
        map(params =>  params.get('productId') || '' ),
        filter(productId => Boolean(productId)),
        switchMap(productId => this.productService.getById(productId))
      );

    this.suggestedProducts$ = this.productService.getAll();
  }
}
