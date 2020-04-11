import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {FormBuilder, Validators, FormGroup} from "@angular/forms";
// import * as moment from 'moment';
import { Product, ProductService } from '../../../shared/services';
import { Router } from '@angular/router';

@Component({
  selector: 'nga-prod-dialog',
  templateUrl: './prod-dialog.component.html',
  styleUrls: ['./prod-dialog.component.scss']
})
export class ProdDialogComponent implements OnInit {

  form: FormGroup;
  nume:string;
  id: any ;

  constructor(
      private fb: FormBuilder,
      private dialogRef: MatDialogRef<ProdDialogComponent>,
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


  save() {
    console.log(this.productService);
    if (this.form.valid) {
      console.log(this.form)
       
   
    this.productService.getById(this.id).subscribe(x => {
        x.nume = this.form.controls.nume.value;
        x.prenume = this.form.controls.prenume.value;
        x.nr_tel = this.form.controls.nrtel.value;
        x.data_add = this.form.controls.releasedAt.value;
        this.productService.updateProduct(x).subscribe(value => {
          console.log(value);
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
            this.router.navigate([ '/' ]);
        });

    });
    console.log("aici");
      
    
    } else {
      console.log("nu");
    }
      this.dialogRef.close(this.form.value);
  }

  close() {
      this.dialogRef.close();
  }
}
