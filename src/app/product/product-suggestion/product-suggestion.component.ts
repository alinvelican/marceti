import { Component, Inject, Input } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { API_BASE_URL } from '../../app.tokens';
import { Product } from '../../shared/services';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';
import { Router } from '@angular/router';
// import { ProdDialogComponent } from '../../home/product-grid/prod-dialog/prod-dialog.component';

@Component({
  selector: 'nga-product-suggestion',
  styleUrls: [ './product-suggestion.component.scss' ],
  templateUrl: './product-suggestion.component.html'
})
export class ProductSuggestionComponent {
  @Input() products: Product[];
  readonly columns$: Observable<number>;
  readonly breakpointsToColumnsNumber = new Map([
    [ 'xs', 1 ],
    [ 'sm', 1 ],
    [ 'md', 1 ],
    [ 'lg', 1 ],
    [ 'xl', 1 ],
  ]);

  constructor(
    @Inject(API_BASE_URL) private readonly baseUrl: string,private router: Router,
    private readonly media: ObservableMedia,private dialog: MatDialog
  ) {
    // If the initial screen size is xs ObservableMedia doesn't emit an event
    // and grid-list rendering fails. Once the following issue is closed, this
    // comment can be removed: https://github.com/angular/flex-layout/issues/388
    this.columns$ = this.media.asObservable()
      .pipe(
        map(mc => <number>this.breakpointsToColumnsNumber.get(mc.mqAlias)),
        startWith(1)
      );
  }
  editProduct(product:Product) {
    console.log(product);
        const dialogConfig = new MatDialogConfig();
    
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
    
        dialogConfig.data = product;
    
        const dialogRef = this.dialog.open(ProductDialogComponent,
            dialogConfig);
    
    
        dialogRef.afterClosed().subscribe(
            val => console.log("Dialog output:", val)
        );
    
    }
 
  scrollToTop() {
  
   console.log("haide mergi dreacu")
     
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
     // this.router.navigate([ '/' ]);
     

}
  urlFor(product: Product): string {
    return `${this.baseUrl}/${product.imageUrl}`;
  }
}
