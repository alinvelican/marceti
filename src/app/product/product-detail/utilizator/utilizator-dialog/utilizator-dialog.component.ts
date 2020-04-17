import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product, ProductService } from '../../../../shared/services';
import { Router } from '@angular/router';
// import * as moment from 'moment';
 
@Component({
  selector: 'nga-utilizator-dialog',
  templateUrl: './utilizator-dialog.component.html',
  styleUrls: ['./utilizator-dialog.component.scss']
})
export class UtilizatorDialogComponent implements OnInit {

  
  form: FormGroup;
  id: any ;

  constructor(
      private fb: FormBuilder,
      private dialogRef: MatDialogRef<UtilizatorDialogComponent>,
      @Inject(MAT_DIALOG_DATA) product : Product ,private router: Router,private productService: ProductService) {

      this.id = product.id;


      this.form = this.fb.group({
          nume: [product.utilizator.nume, Validators.required],
          prenume: [product.utilizator.prenume, Validators.required],
          judet: [product.utilizator.judet, Validators.required],
          oras: [product.utilizator.oras, Validators.required],
          strada: [product.utilizator.strada, Validators.required],
          bl: [product.utilizator.bl, Validators.required],
          sc: [product.utilizator.sc, Validators.required],
          ap: [product.utilizator.ap, Validators.required],

          telefon: [product.utilizator.telefon, Validators.required],
          amp_apar: [product.utilizator.amp_apar, Validators.required],
          detinator: [product.utilizator.detinator, Validators.required],
          
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
        x.utilizator.nume = this.form.controls.nume.value;
        x.utilizator.prenume = this.form.controls.prenume.value;
        x.utilizator.judet = this.form.controls.judet.value;
        x.utilizator.oras = this.form.controls.oras.value;
        x.utilizator.strada = this.form.controls.strada.value;
        x.utilizator.bl = this.form.controls.bl.value;
        x.utilizator.sc = this.form.controls.sc.value;
        x.utilizator.ap = this.form.controls.ap.value;
        x.utilizator.telefon = this.form.controls.telefon.value;
        x.utilizator.amp_apar = this.form.controls.amp_apar.value;
        x.utilizator.detinator = this.form.controls.detinator.value;


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
