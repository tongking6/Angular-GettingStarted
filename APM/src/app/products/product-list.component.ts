import { Component } from '@angular/core';

@Component({
    selector: 'pm-products',
    templateUrl: './product-list.component.html'
})
export class ProductListComponent {
    pageTitle: string = 'Product List';
    products: any[] = [
        {
            "productId": 2,
            "productName": "product1",
            "productCode": "123",
            "releaseDate": "March 19, 2018",
            "description": "description",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "assets/images/garden_cart.png"
        },
        {
            "productId": 4,
            "productName": "product2",
            "productCode": "134",
            "releaseDate": "March 20, 2018",
            "description": "description",
            "price": 14.99,
            "starRating": 3.8,
            "imageUrl": "assets/images/garden_cart.png"
        }
    ];
}