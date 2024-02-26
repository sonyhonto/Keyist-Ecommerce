import { Component,inject , OnInit } from '@angular/core';
import { Seller } from 'src/app/store/model';
import { SellerService } from 'src/app/edit/seller.service'; 
import { ProductService } from 'src/app/services/product.service'; 
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-housing-service',
  templateUrl: './housing-service.component.html',
  styleUrls: ['./housing-service.component.scss'],
})
export class HousingServiceComponent implements OnInit {

  sellerList: Seller[] = [];
  filteredSellerList: Seller[] = [];

  constructor(
    private sellerService: SellerService,
    private productService: ProductService) {
  }

  // constructor(private productService: ProductService) {
  // }


  ngOnInit(): void {
    // this.sellerList = this.sellerService.getAllSellers();
    // this.sellerList = this.productService.getSellers();

    this.getSellers();
    this.filteredSellerList = this.sellerList;
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredSellerList = this.sellerList;
      return;
    }

    this.filteredSellerList = this.sellerList.filter(
      seller => seller?.name.toLowerCase().includes(text.toLowerCase())
    );
  }

  getSellers(): void {
    this.productService.getSellers()
      .subscribe(sellers => this.sellerList = sellers);

      // .subscribe(sellers => this.sellerList = sellers.slice(1, 5));

    // this.sellerService.getAllSellers();

      // .map(sellers => this.sellerList = sellers.slice(1, 5));
      
  }

}
