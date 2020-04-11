import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ProductService,  } from '../../../../shared/services';
import { Router } from '@angular/router';
import { Obs, Product } from '../../../../shared/services/product.service';

@Component({
  selector: 'nga-raport-dialog',
  templateUrl: './raport-dialog.component.html',
  styleUrls: ['./raport-dialog.component.scss']
})
export class RaportDialogComponent implements OnInit {
  form: FormGroup;
  id: any ;
  constructor(  private fb: FormBuilder,
    @Inject(MAT_DIALOG_DATA) product : Product,
    private dialogRef: MatDialogRef<RaportDialogComponent>,
    private productService: ProductService,private router: Router) { 
    this.form = this.fb.group({
      titlu   : [, Validators.minLength(2)],
      detalii: [, Validators.min(2)],
        // longDescription: [longDescription,Validators.required]
    });
    this.id = product.id;

    

  }
  ngOnInit() {
  }

  save() {
    console.log(this.productService);
    if (true) {
      // if (this.form.valid) {
      console.log(this.form)
      // var prodid = parseInt(this.route.snapshot.paramMap.get("productId") || "0"); 
      this.productService.getById(this.id).subscribe(x => {
        // x.nume = this.form.controls.nume.value;
        // x.prenume = this.form.controls.prenume.value;
        // x.nr_tel = this.form.controls.nrtel.value;
        // x.data_add = this.form.controls.releasedAt.value;
        console.log(x);

       const  obs : Obs = {
         id : Math.floor(Math.random() * (10000 - 1 + 1)) + 1 ,
          data_add : Date.now().toString(),
           titlu : this.form.controls.titlu.value,
           detalii : this.form.controls.detalii.value
        };
        

        // if (!x.hasOwnProperty('obs')) {
        //    x.obs = [];
        //  }
        x.obs.push( obs);
        this.productService.updateProduct(x).subscribe(value => {
          console.log("qwert")
          console.log(value);
          this.dialogRef.close(this.form.value);
          this.router.onSameUrlNavigation = 'reload';
          this.router.navigate([ '/products/'+ this.id ]);
        });

    });
    console.log("aici");
   
     
      this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    // this.router.onSameUrlNavigation = 'reload';
    //   this.router.navigate([ '/products/'+ this.id ]);
    } else {
      console.log("nu");
    }
    
      // this.scrollToTop();
  }

  close() {
    this.dialogRef.close();
}

}
