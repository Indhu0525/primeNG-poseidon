import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalestableComponent } from './salestable/salestable.component';
import { Product } from './domain/product';
import { ProductService } from './service/productservice';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,SalestableComponent
  ]
  
})
export class TablesModule { }
