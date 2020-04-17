
import {  Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators
} from '@angular/forms';
import { ProductService,Product } from '../../services';

@Component({
  selector: 'nga-add-prod',
  templateUrl: './add-prod.component.html',
  styleUrls: ['./add-prod.component.scss']
})
export class AddProdComponent {
  myControl = new FormControl();
  options: string[] = ['Ariston', 'Ferroli', 'Viessmann','Motan'];
  @Output() search = new EventEmitter();
  readonly searchForm: FormGroup;

  constructor(fb: FormBuilder, private router: Router,private productService: ProductService ) {
    this.searchForm = fb.group({
      nume   : [, Validators.minLength(2)],
      prenume: [, Validators.min(2)],
      nrtel: [, Validators.min(2)],
      picker: [, Validators.min(2)]
    }, {
       
    });
  }

  onSearch(): void {
    if (this.searchForm.valid) {
      console.log(this.searchForm)
      this.search.emit();
      const prod: Product = {
        data_add :  this.searchForm.controls.picker.value, 
        data_mod:Date.now().toString(),
        id:"",
        // id:  Math.floor(Math.random() * (10000 - 1 + 1)) + 1 ,
      nume: this.searchForm.controls.nume.value,
      prenume: this.searchForm.controls.prenume.value,
      categories: ["outdoor"],
      nr_tel: this.searchForm.controls.nrtel.value,
      livret:{},
      ardere:{},
      aparat:{},
      utilizator:{nume:this.searchForm.controls.nume.value,prenume: this.searchForm.controls.prenume.value,telefon: this.searchForm.controls.nrtel.value},
      obs:[]


     
    }

      this.productService.addProduct(prod).subscribe(value => {
        console.log(value);
        this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
          this.router.navigate([ '/products/'+value.id ]);
      });
    
    }
  }
  close() {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
        this.router.onSameUrlNavigation = 'reload';
          this.router.navigate([ '/' ]);
}
}

 
/**
 * Removes properties with empty values (everything that's
 * considered a "falsy" value in JavaScript) from the original object.
 *
 * See: https://developer.mozilla.org/en-US/docs/Glossary/Falsy
 */
// function withoutEmptyValues(object: any): any {
//   return Object.keys(object).reduce((queryParams: any, key) => {
//     if (object[key]) { queryParams[key] = object[key]; }
//     return queryParams;
//   }, {});
// }

/**
 * If both values - min and max prices are specified,
 * make sure that the min is less or equal to the max.
 */
 
