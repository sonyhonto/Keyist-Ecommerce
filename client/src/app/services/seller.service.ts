import { Injectable } from '@angular/core';
import { Seller } from '../store/model'; 
import { config } from '../../config/local';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SellerService {

    // sellerUrl = `${config.apiUrl}/api/public/sellers`;

    // constructor(private httpClient: HttpClient) {}

    // getSellers() {
    //     return this.httpClient.get<Array<Seller>>(this.sellerUrl, {
    //         headers: {}
    //     });
    // }

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

    getSellers(): Observable<Seller[]> {
        return of(this.sellerList);
    }


    getAllSellers(): Seller[] {
        return this.sellerList;
    }

    getSellerById(id: number): Seller | undefined {
        return this.sellerList.find(seller => seller.id == id);
    }
}
