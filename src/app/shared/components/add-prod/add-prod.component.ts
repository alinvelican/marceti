
import {  Component, EventEmitter, Output } from '@angular/core';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  Validators,
  ValidationErrors
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
  readonly matcher = new ShowOnFormInvalidStateMatcher2();
  readonly searchForm: FormGroup;

  constructor(fb: FormBuilder, private router: Router,private productService: ProductService) {
    this.searchForm = fb.group({
      title   : [, Validators.minLength(2)],
      minPrice: [, Validators.min(0)],
      maxPrice: [, Validators.min(0)]
    }, {
      validator: [ minLessThanMaxValidator ]
    });
  }

  onSearch(): void {
    if (this.searchForm.valid) {
      console.log(this.searchForm)
      this.search.emit();
      const prod: Product = {
        id: 1222,
      title: this.searchForm.controls.title.value,
      description: "string",
      categories: ["outdoor"],
      imageUrl: "string",
      price: 1
    }

      this.productService.addProduct(prod).subscribe(value => {
        console.log(value);
      });
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([ '/' ]);
    }
  }
}

/** Error when either control or the form is invalid. */
export class ShowOnFormInvalidStateMatcher2 implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | null): boolean {
    return !!((control && control.invalid) || (form && form.hasError('minLessThanMax')));
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
function minLessThanMaxValidator(group: FormGroup): ValidationErrors | null {
  const minPrice = group.controls['minPrice'].value;
  const maxPrice = group.controls['maxPrice'].value;

  if (minPrice && maxPrice) {
    return minPrice <= maxPrice ? null : { minLessThanMax: true };
  } else {
    return null;
  }
}
