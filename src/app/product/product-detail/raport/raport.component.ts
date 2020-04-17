import {HttpClient} from '@angular/common/http';
import {Component, OnInit, Input} from '@angular/core';
import { Observable} from 'rxjs';
import {  MatTableDataSource } from '@angular/material/table';
import {  ActivatedRoute } from '@angular/router';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { RaportDialogComponent } from './raport-dialog/raport-dialog.component';
import { Product } from '../../../shared/services';
@Component({
  selector: 'nga-raport',
  templateUrl: './raport.component.html',
  styleUrls: ['./raport.component.scss']
})

export class RaportComponent implements  OnInit {
  @Input() product: Product;
  constructor(private dialog: MatDialog,private route: ActivatedRoute,private _httpClient: HttpClient) {    
    // merge( )
    // .pipe(
    //   startWith({}),
    //   switchMap(() => {
         
    //     return this.getRepoIssues( );
    //   })).subscribe(data => this.data = data);
   
     
 }
 editProduct(product:Product) {
  console.log("jfjfhghghghh");

   console.log(product);
  const dialogConfig = new MatDialogConfig();

  dialogConfig.disableClose = true;
  dialogConfig.autoFocus = true;

  dialogConfig.data = product;
  const dialogRef = this.dialog.open(RaportDialogComponent,
      dialogConfig);


  dialogRef.afterClosed().subscribe(
      val => console.log("Dialog output:", val)
  );

}
 
  getRepoIssues( ): Observable<Obs[]> {
    var prodid = this.route.snapshot.paramMap.get("productId")
    // const href = 'http://localhost:9090/api/obs/'+prodid;
    const href = 'https://server-solsu5o72q-ez.a.run.app/api/obs/'+prodid;
   

    return this._httpClient.get<Obs[]>(href);
  }
  // ngAfterViewInit() {

  //   this.getRepoIssues( )
  //   .subscribe(data => {  this.data = data; this.table.renderRows();});

      
  // }




  public displayedColumns = [ 'dateOfBirth', 'address', 'details', 'update', 'delete'
];
  public dataSource = new MatTableDataSource<Obs>();
 
 
  ngOnInit() {
    this.getAllOwners();
  }
 
  public getAllOwners = () => {
    this.getRepoIssues()
    .subscribe(res => {
      this.dataSource.data = res as Obs[];
    })
  }



}
 
export interface Obs {
  id: number;
  titlu: string;
  detalii: string;
  data_add: string; 
}
 
  