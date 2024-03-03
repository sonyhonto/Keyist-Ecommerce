import { Component,inject , OnInit } from '@angular/core';
import { ProductDetail, Seller } from 'src/app/store/model';
import { SellerService } from 'src/app/services/seller.service'; 
import { ProductService } from 'src/app/services/product.service'; 
import { Observable } from 'rxjs/internal/Observable';

@Component({
  selector: 'app-housing-service',
  templateUrl: './housing-service.component.html',
  styleUrls: ['./housing-service.component.scss'],
})
export class HousingServiceComponent implements OnInit {

  productList: ProductDetail[] = [];
  sellerList: Seller[] = [];
  filteredSellerList: Seller[] = [];

  constructor(
    private sellerService: SellerService,
    private productService: ProductService) {
  }

  ngOnInit(): void {
    this.getSellers();
    // this.filteredSellerList = this.sellerList;
    // console.log("filtered seller list", this.filteredSellerList);
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
      .subscribe(sellers => {
        this.sellerList = sellers;
        this.filteredSellerList = sellers;
      });

    // this.sellerService.getProductsFake()
    //   .subscribe(products => {
    //     this.productList = products;
    //     console.log("productList: ", products);
    //   });
  }

}
