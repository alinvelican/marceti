import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
// import * as moment from 'moment';
import { Router } from '@angular/router';
import { Product, ProductService } from '../../shared/services';
@Component({
  selector: 'nga-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss']
})
export class ProductDialogComponent implements OnInit {

 
  form: FormGroup;
  nume:string;
  id: any ;

  constructor(
      private fb: FormBuilder,
      private dialogRef: MatDialogRef<ProductDialogComponent>,
      @Inject(MAT_DIALOG_DATA) product : Product ,private router: Router,private productService: ProductService) {

        this.nume = product.nume;

      this.id = product.id;


      this.form = this.fb.group({
        nume: [this.nume, Validators.required],
        prenume: [product.prenume, Validators.required],
        nrtel: [product.nr_tel, Validators.required],

        releasedAt: [product.data_add, Validators.required],
        // longDescription: [longDescription,Validators.required]
    });

  }

  ngOnInit() {

  }
  scrollToTop() {
  
    console.log("haide mergi dreacu")
      
       this.router.routeReuseStrategy.shouldReuseRoute = () => false;
     this.router.onSameUrlNavigation = 'reload';
      // this.router.navigate([ '/' ]);
      
 
 }


  

  save() {
    console.log(this.productService);
    if (true) {
      // if (this.form.valid) {
      console.log(this.form)
  
      this.productService.getById(this.id).subscribe(x => {
        x.nume = this.form.controls.nume.value;
        x.prenume = this.form.controls.prenume.value;
        x.nr_tel = this.form.controls.nrtel.value;
        x.data_add = this.form.controls.releasedAt.value;
        this.productService.updateProduct(x).subscribe(value => {
          console.log(value);
           
        });

    });
    console.log("aici");
   
     
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    // this.router.onSameUrlNavigation = 'reload';
    //   this.router.navigate([ '/products/'+ this.id ]);
    } else {
      console.log("nu");
    }
      this.dialogRef.close(this.form.value);
      this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([ '/products/'+ this.id ]);
      this.scrollToTop();
  }

  close() {
      this.dialogRef.close();
  }
 
 
}
