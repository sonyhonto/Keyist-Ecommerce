import { Component,inject , OnInit } from '@angular/core';
import { Seller } from 'src/app/store/model';
import { SellerService } from 'src/app/edit/seller.service'; 

@Component({
  selector: 'app-housing-service',
  templateUrl: './housing-service.component.html',
  styleUrls: ['./housing-service.component.scss'],
})
export class HousingServiceComponent implements OnInit {

  sellerList: Seller[] = [];
  filteredSellerList: Seller[] = [];

  constructor(private sellerService: SellerService) {
  }

  ngOnInit(): void {
    this.sellerList = this.sellerService.getAllSellers();
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

}
