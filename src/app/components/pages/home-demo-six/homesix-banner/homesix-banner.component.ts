import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
    selector: 'app-homesix-banner',
    templateUrl: './homesix-banner.component.html',
    styleUrls: ['./homesix-banner.component.scss']
})
export class HomesixBannerComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {}

    retailHomeSlides: OwlOptions = {
		items: 1,
		nav: true,
		margin: 25,
		loop: true,
		dots: false,
		autoplay: false,
		animateIn: 'fadeIn',
		animateOut: 'fadeOut',
		autoplayHoverPause: true,
		navText: [
			"<i class='fas fa-long-arrow-alt-left'></i>",
			"<i class='fas fa-long-arrow-alt-right'></i>"
		]
    }

}