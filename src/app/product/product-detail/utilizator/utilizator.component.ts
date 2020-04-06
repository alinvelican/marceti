import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../shared/services';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { UtilizatorDialogComponent } from './utilizator-dialog/utilizator-dialog.component';

@Component({
  selector: 'nga-utilizator',
  templateUrl: './utilizator.component.html',
  styleUrls: ['./utilizator.component.scss']
})
export class UtilizatorComponent implements OnInit {
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
    
        const dialogRef = this.dialog.open(UtilizatorDialogComponent,
            dialogConfig);
    
    
        dialogRef.afterClosed().subscribe(
            val => console.log("Dialog output:", val)
        );
    
    }

}
