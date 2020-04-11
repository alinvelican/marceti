import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product, ProductService } from '../../../../shared/services';
import { Router } from '@angular/router';
// import * as moment from 'moment';
 
@Component({
  selector: 'nga-ardere-dialog',
  templateUrl: './ardere-dialog.component.html',
  styleUrls: ['./ardere-dialog.component.scss']
})
export class ArdereDialogComponent implements OnInit {
  form: FormGroup;
  title:string;
  id: any ;

  constructor(
      private fb: FormBuilder,
      private dialogRef: MatDialogRef<ArdereDialogComponent>,
      @Inject(MAT_DIALOG_DATA) product : Product ,private router: Router,private productService: ProductService) {

      this.id = product.id;


      this.form = this.fb.group({
        producator: [product.ardere.producator, Validators.required],
        tip: [product.ardere.tip, Validators.required],
        model: [product.ardere.model, Validators.required],
        serie: [product.ardere.serie, Validators.required],
        an_fab: [product.ardere.an_fab, Validators.required],
        put_maxmin: [product.ardere.put_maxmin, Validators.required],
        cu_aer: [product.ardere.cu_aer, Validators.required],
        tip_comb: [product.ardere.tip_comb, Validators.required],
        cu_alim: [product.ardere.cu_alim, Validators.required],

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
        x.ardere.producator = this.form.controls.producator.value;
        x.ardere.tip = this.form.controls.tip.value;
        x.ardere.model = this.form.controls.model.value;
        x.ardere.serie = this.form.controls.serie.value;
        x.ardere.an_fab = this.form.controls.an_fab.value;
        x.ardere.put_maxmin = this.form.controls.put_maxmin.value;
        x.ardere.tip_comb = this.form.controls.tip_comb.value;
        x.ardere.cu_alim = this.form.controls.cu_alim.value;

        this.productService.updateProduct(x).subscribe(value => {
          console.log(value);
          this.router.routeReuseStrategy.shouldReuseRoute = () => false;
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate([ '/products/'+ this.id ]);
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
