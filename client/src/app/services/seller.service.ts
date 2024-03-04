import { Injectable } from '@angular/core';
import { Product, ProductDetail, Seller } from '../store/model'; 
import { config } from '../../config/local';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

    sellerUrl = `${config.apiUrl}/api/public/sellers`;
    productUrl = `${config.apiUrl}/api/public/product`;

    constructor(private httpClient: HttpClient) {}

    getSellers() {
        return this.httpClient.get<Array<Seller>>(this.sellerUrl, {
            headers: {}
        });
    }

    getProducts() {
        let param: any = {'page': 0, 'size': 4};
        return this.httpClient.get<Array<ProductDetail>>(this.productUrl, { params: param });
    }

}
