
import { Component, OnInit } from '@angular/core';
import { recentproduct } from '../domain/recentupload';
import { ProductService } from '../service/recentuploadservice';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recentuploads',
  standalone: true,
    imports: [TableModule, CommonModule],
    providers: [ProductService],
  templateUrl: './recentuploads.component.html',
  styleUrl: './recentuploads.component.scss'
})
export class RecentuploadsComponent {
  products!: recentproduct[];

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.productService.getProducts().then((data) => {
            this.products = data;
        });
    }//table
    // files = [
    //   { name: 'payment-1.pdf', url: '' },
    //   { name: 'payment-2.pdf', url: '' },
    //   { name: 'product.png', url: 'assets/product.png' },
    //   { name: 'report.pdf', url: '' },
    //   { name: 'revenue.xls', url: '' },
    //   { name: 'sales.xls', url: '' },
    //   { name: 'screenshot.jpeg', url: 'assets/screenshot.jpeg' },
    // ];
  
    // getFileType(filename: string): string {
    //   const ext = filename.split('.').pop()?.toLowerCase();
    //   if (ext === 'pdf') return 'pdf';
    //   if (ext === 'xls' || ext === 'xlsx') return 'xls';
    //   if (['jpg', 'jpeg', 'png', 'gif'].includes(ext || '')) return 'image';
    //   return 'default';
    // }
}
