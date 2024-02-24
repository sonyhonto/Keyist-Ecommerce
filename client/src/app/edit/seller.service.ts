import { Injectable } from '@angular/core';
import { Seller } from '../store/model'; 

@Injectable({
  providedIn: 'root'
})
export class SellerService {
    readonly baseUrl = 'https://api.slingacademy.com/public/sample-photos';

    protected sellerList: Seller[] = [
        {
            "id": 0,
            "name": "Acme Fresh Start",
            "photo": `${this.baseUrl}/8.jpeg`,
            "url": "link-to-url",
            "socialUrl": "link-to-social"
        },
        {
            "id": 1,
            "name": "Santa Monica Transitional",
            "photo": `${this.baseUrl}/9.jpeg`,
            "url": "link-to-url",
            "socialUrl": "link-to-social"
        },
        {
            "id": 2,
            "name": "Juneau Warm Support",
            "photo": `${this.baseUrl}/4.jpeg`,
            "url": "link-to-url",
            "socialUrl": "link-to-social"
        },
        {
            "id": 3,
            "name": "Homesteady",
            "photo": `${this.baseUrl}/5.jpeg`,
            "url": "link-to-url",
            "socialUrl": "link-to-social"
        },
        {
            "id": 4,
            "name": "Happy Homes Group",
            "photo": `${this.baseUrl}/7.jpeg`,
            "url": "link-to-url",
            "socialUrl": "link-to-social"
        }
    ];

    getAllSellers(): Seller[] {
        return this.sellerList;
    }

    getSellerById(id: number): Seller | undefined {
        return this.sellerList.find(seller => seller.id == id);
    }
}
