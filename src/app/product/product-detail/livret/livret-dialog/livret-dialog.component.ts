import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product, ProductService } from '../../../../shared/services';
import { Router } from '@angular/router';
import * as moment from 'moment';
 
@Component({
  selector: 'nga-livret-dialog',
  templateUrl: './livret-dialog.component.html',
  styleUrls: ['./livret-dialog.component.scss']
})
export class LivretDialogComponent implements OnInit {

  form: FormGroup;
  title:string;
  id: any ;

  constructor(
      private fb: FormBuilder,
      private dialogRef: MatDialogRef<LivretDialogComponent>,
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


  save() {
    console.log(this.productService);
    if (this.form.valid) {
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
    this.router.onSameUrlNavigation = 'reload';
      this.router.navigate([ '/products/'+ this.id]);
    } else {
      console.log("nu");
    }
      this.dialogRef.close(this.form.value);
  }

  close() {
      this.dialogRef.close();
  }

}
