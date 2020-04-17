import { Component,  Input, OnInit } from '@angular/core';
import { ObservableMedia } from '@angular/flex-layout';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Product, ProductService } from '../../shared/services';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { ProductDialogComponent } from '../product-dialog/product-dialog.component';
import { Router, ActivatedRoute } from '@angular/router';
// import { ProdDialogComponent } from '../../home/product-grid/prod-dialog/prod-dialog.component';

@Component({
  selector: 'nga-product-suggestion',
  styleUrls: [ './product-suggestion.component.scss' ],
  templateUrl: './product-suggestion.component.html'
})
export class ProductSuggestionComponent implements OnInit{
   products$: Observable<Product[]>;
  @Input() product: Product;
  prodid : any;
  readonly columns$: Observable<number>;
  readonly breakpointsToColumnsNumber = new Map([
    [ 'xs', 1 ],
    [ 'sm', 1 ],
    [ 'md', 1 ],
    [ 'lg', 1 ],
    [ 'xl', 1 ],
  ]);

  constructor(
      private router: Router,
    private readonly media: ObservableMedia,private dialog: MatDialog,private route: ActivatedRoute,private productService: ProductService
  ) {
    // If the initial screen size is xs ObservableMedia doesn't emit an event
    // and grid-list rendering fails. Once the following issue is closed, this
    // comment can be removed: https://github.com/angular/flex-layout/issues/388
    this.columns$ = this.media.asObservable()
      .pipe(
        map(mc => <number>this.breakpointsToColumnsNumber.get(mc.mqAlias)),
        startWith(1)
      );


      console.log("in init   ddddd");
      console.log(this.product);
      
  }
  ngOnInit() {
     this.prodid = this.route.snapshot.paramMap.get("productId")
    this.products$ = this.productService.getAllFirstById(this.prodid);

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

    download(product:Product) {
      console.log(product);
      // const href = 'http://localhost:9090/api/download/'+product.id;
      const href = 'https://server-solsu5o72q-ez.a.run.app/api/download/'+product.id;
   
      window.open(href, "_blank");
      
      }
 
  scrollToTop() {
  
   console.log("haide mergi dreacu")
     
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
     // this.router.navigate([ '/' ]);
     

} 
}
