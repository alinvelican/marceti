import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
import * as moment from 'moment';
import { Router } from '@angular/router';
import { Product, ProductService } from '../../shared/services';
@Component({
  selector: 'nga-product-dialog',
  templateUrl: './product-dialog.component.html',
  styleUrls: ['./product-dialog.component.scss']
})
export class ProductDialogComponent implements OnInit {

 
  form: FormGroup;
  title:string;
  id: any ;

  constructor(
      private fb: FormBuilder,
      private dialogRef: MatDialogRef<ProductDialogComponent>,
      @Inject(MAT_DIALOG_DATA) product : Product ,private router: Router,private productService: ProductService) {

      this.title = product.title;
      this.id = product.id;


      this.form = this.fb.group({
          title: [this.title, Validators.required],
          category: [product.categories, Validators.required],
          releasedAt: [moment(), Validators.required],
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
       
      const prod: Product = {
        id: this.id,
      title: this.form.controls.title.value,
      description: "string",
      categories: ["outdoor"],
      imageUrl: "string",
      price: 1
    }
    console.log("aici");
    console.log(prod);
      this.productService.updateProduct(prod).subscribe(value => {
        console.log(value);
      });
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
