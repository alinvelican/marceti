import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product, ProductService } from '../../../../shared/services';
import { Router } from '@angular/router';
// import * as moment from 'moment';
 

@Component({
  selector: 'nga-aparat-dialog',
  templateUrl: './aparat-dialog.component.html',
  styleUrls: ['./aparat-dialog.component.scss']
})
export class AparatDialogComponent implements OnInit {

  form: FormGroup;
  // title:string;
  id: any ;

  constructor(
      private fb: FormBuilder,
      private dialogRef: MatDialogRef<AparatDialogComponent>,
      @Inject(MAT_DIALOG_DATA) product : Product ,private router: Router,private productService: ProductService) {

      // this.title = product.nume;
      this.id = product.id;


      this.form = this.fb.group({
        tipcomb: [product.aparat.tip_comb, Validators.required],
          putnom: [product.aparat.put_nom, Validators.required],
          rand: [product.aparat.randament, Validators.required],
          prenom: [product.aparat.pres_nom, Validators.required],
          fluid: [product.aparat.fluid_luc, Validators.required],

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
        x.aparat.tip_comb = this.form.controls.tipcomb.value;
        x.aparat.put_nom = this.form.controls.putnom.value;
        x.aparat.randament = this.form.controls.rand.value;
        x.aparat.pres_nom = this.form.controls.prenom.value;
        x.aparat.fluid_luc = this.form.controls.fluid.value;
        
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
