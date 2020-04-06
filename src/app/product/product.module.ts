import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

import { ProductComponent } from './product.component';
import { ProductDetailComponent } from './product-detail';
import { ProductSuggestionComponent } from './product-suggestion';
import { LivretComponent } from './product-detail/livret/livret.component';
import { AparatComponent } from './product-detail/aparat/aparat.component';
import { UtilizatorComponent } from './product-detail/utilizator/utilizator.component';
import { ArdereComponent } from './product-detail/ardere/ardere.component';
import { RaportComponent } from './product-detail/raport/raport.component';




import {PortalModule} from '@angular/cdk/portal';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatBadgeModule} from '@angular/material/badge';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatCardModule} from '@angular/material/card';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatChipsModule} from '@angular/material/chips';
import {MatStepperModule} from '@angular/material/stepper';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatDialogModule} from '@angular/material/dialog';
import {MatDividerModule} from '@angular/material/divider';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatListModule} from '@angular/material/list';
import {MatMenuModule} from '@angular/material/menu';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatSliderModule} from '@angular/material/slider';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSortModule} from '@angular/material/sort';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTreeModule} from '@angular/material/tree';
// import { ProdDialogComponent } from './product-grid/prod-dialog/prod-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductDialogComponent } from './product-dialog/product-dialog.component';
// import { ProdDialogComponent } from '../home/product-grid/prod-dialog/prod-dialog.component';
// import { HomeModule } from '../home/home.module';

import { MatTabsModule } from '@angular/material/tabs';
import { ArdereDialogComponent } from './product-detail/ardere/ardere-dialog/ardere-dialog.component';
import { UtilizatorDialogComponent } from './product-detail/utilizator/utilizator-dialog/utilizator-dialog.component';
import { AparatDialogComponent } from './product-detail/aparat/aparat-dialog/aparat-dialog.component';
import { LivretDialogComponent } from './product-detail/livret/livret-dialog/livret-dialog.component';


@NgModule({
  imports: [
    MatTabsModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    PortalModule,
    ScrollingModule,
    ReactiveFormsModule,


    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild([
      { path: '', component: ProductComponent }
    ]),
    MatButtonModule,
    MatGridListModule
  ],
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductSuggestionComponent,
    LivretComponent,
    AparatComponent,
    UtilizatorComponent,
    ArdereComponent,
    RaportComponent,
    ProductDialogComponent,
    ArdereDialogComponent,
    UtilizatorDialogComponent,
    AparatDialogComponent,
    LivretDialogComponent
  ]
  ,entryComponents: [ProductDialogComponent,UtilizatorDialogComponent,LivretDialogComponent,ArdereDialogComponent,AparatDialogComponent]
})
export class ProductModule {}
