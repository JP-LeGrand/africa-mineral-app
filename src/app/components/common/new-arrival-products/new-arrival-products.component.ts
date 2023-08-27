import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-new-arrival-products',
    templateUrl: './new-arrival-products.component.html',
    styleUrls: ['./new-arrival-products.component.scss']
})
export class NewArrivalProductsComponent implements OnInit {

    constructor(
        public router: Router,
        private httpClient: HttpClient,
    ) { }

    products: any = [];

    ngOnInit(): void {
        this.httpClient.get("assets/data/mineral-products.json").subscribe(data =>{
            this.products = data;
        });
    }

}
