import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../shared/services';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ArdereDialogComponent } from './ardere-dialog/ardere-dialog.component';

@Component({
  selector: 'nga-ardere',
  templateUrl: './ardere.component.html',
  styleUrls: ['./ardere.component.scss']
})
export class ArdereComponent implements OnInit {
  @Input() product: Product;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }
  editProduct(product:Product) {
    console.log(product);
        const dialogConfig = new MatDialogConfig();
    
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
    // dialogConfig.minHeight = 800;
        dialogConfig.data = product;
    
        const dialogRef = this.dialog.open(ArdereDialogComponent,
            dialogConfig);
    
    
        dialogRef.afterClosed().subscribe(
            val => console.log("Dialog output:", val)
        );
    
    }
}
