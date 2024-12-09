import { Component, OnInit } from '@angular/core';
import { Product } from '../domain/product';
import { ProductService } from '../service/productservice';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';




@Component({
  selector: 'app-salestable',
  standalone: true,
  imports: [TableModule,CommonModule],
  templateUrl: './salestable.component.html',
  styleUrl: './salestable.component.scss',
  providers: [ProductService]
})
export class SalestableComponent {
 
  products!: Product[];
  // totalRecords: number = 0;
  // loading: boolean = true;
  constructor(private productService: ProductService) {}
  ngOnInit() {
      this.productService.getProducts().then((data) => {
          this.products = data;
      });
  }
  
}
