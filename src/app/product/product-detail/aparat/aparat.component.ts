import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../shared/services';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { AparatDialogComponent } from './aparat-dialog/aparat-dialog.component';

@Component({
  selector: 'nga-aparat',
  templateUrl: './aparat.component.html',
  styleUrls: ['./aparat.component.scss']
})
export class AparatComponent implements OnInit {
@Input() product: Product;
  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }
  editProduct(product:Product) {
    console.log(product);
        const dialogConfig = new MatDialogConfig();
    
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
    
        dialogConfig.data = product;
    
        const dialogRef = this.dialog.open(AparatDialogComponent,
            dialogConfig);
    
    
        dialogRef.afterClosed().subscribe(
            val => console.log("Dialog output:", val)
        );
    
    }
}
