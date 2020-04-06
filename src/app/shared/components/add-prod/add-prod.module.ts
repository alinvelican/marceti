import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddProdComponent } from './add-prod.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule, MatRippleModule} from '@angular/material/core';
@NgModule({
  declarations: [AddProdComponent],
  imports: [
    CommonModule, MatNativeDateModule,MatRippleModule,

    ReactiveFormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatDatepickerModule
  ], 
  exports: [AddProdComponent]
})
export class AddProdModule { }
