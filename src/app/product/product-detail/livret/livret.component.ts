import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../../shared/services';
import { MatDialogConfig, MatDialog } from '@angular/material/dialog';
import { LivretDialogComponent } from './livret-dialog/livret-dialog.component';

@Component({
  selector: 'nga-livret',
  templateUrl: './livret.component.html',
  styleUrls: ['./livret.component.scss']
})
export class LivretComponent implements OnInit {
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
    
        const dialogRef = this.dialog.open(LivretDialogComponent,
            dialogConfig);
    
    
        dialogRef.afterClosed().subscribe(
            val => console.log("Dialog output:", val)
        );
    
    }
}
