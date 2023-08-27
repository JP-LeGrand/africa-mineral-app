import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: 'app-featured-products',
    templateUrl: './featured-products.component.html',
    styleUrls: ['./featured-products.component.scss']
})
export class FeaturedProductsComponent implements OnInit {

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

    productsSlides: OwlOptions = {
		nav: false,
		margin: 30,
		loop: true,
		dots: true,
		autoplay: true,
		autoplayHoverPause: true,
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 2
			},
			992: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
    }
	featuredProductsSlides: OwlOptions = {
		nav: true,
		margin: 25,
		loop: true,
		dots: false,
		autoplay: true,
		autoplayHoverPause: true,
		navText: [
			"<i class='fas fa-long-arrow-alt-left'></i>",
			"<i class='fas fa-long-arrow-alt-right'></i>",
		],
		responsive: {
			0: {
				items: 1
			},
			576: {
				items: 2
			},
			768: {
				items: 2
			},
			935: {
				items: 3
			},
			1200: {
				items: 4
			}
		}
    }

}
