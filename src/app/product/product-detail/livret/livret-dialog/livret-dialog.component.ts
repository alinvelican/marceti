import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Product, ProductService } from '../../../../shared/services';
import { Router } from '@angular/router';
 
@Component({
  selector: 'nga-livret-dialog',
  templateUrl: './livret-dialog.component.html',
  styleUrls: ['./livret-dialog.component.scss']
})
export class LivretDialogComponent implements OnInit {

  form: FormGroup;
  producator:string;
  id: any ;

  constructor(
      private fb: FormBuilder,
      private dialogRef: MatDialogRef<LivretDialogComponent>,
      @Inject(MAT_DIALOG_DATA) product : Product ,private router: Router,private productService: ProductService) {

      this.producator = product.livret.producator;
      this.id = product.id;


      this.form = this.fb.group({
          producator: [this.producator, Validators.required],
          // category: [product.categories, Validators.required],
          tip: [product.livret.tip, Validators.required],
          model: [product.livret.model, Validators.required],
          serie: [product.livret.serie, Validators.required],
          anfab: [product.livret.an_fab, Validators.required],
         
         
          // releasedAt: [moment(), Validators.required],
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
        x.livret.producator = this.form.controls.producator.value;
        x.livret.tip = this.form.controls.tip.value;
        x.livret.model = this.form.controls.model.value;
        x.livret.serie = this.form.controls.serie.value;
        x.livret.an_fab = this.form.controls.anfab.value;
       
        x.ardere.producator = this.form.controls.producator.value;
        x.ardere.tip = this.form.controls.tip.value;
        x.ardere.model = this.form.controls.model.value;
        x.ardere.serie = this.form.controls.serie.value;
        x.ardere.an_fab = this.form.controls.anfab.value;
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
