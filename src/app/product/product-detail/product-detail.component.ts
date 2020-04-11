import {
  ChangeDetectionStrategy,
  Component,
 
  Input,
  OnInit,
  
} from '@angular/core';
 
import {   Product } from '../../shared/services';

@Component({
  selector: 'nga-product-detail',
  styleUrls: [ './product-detail.component.scss' ],
  templateUrl: './product-detail.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product;

  constructor(
  ) {}

  ngOnInit() {
     
  }

 

  

  
}
