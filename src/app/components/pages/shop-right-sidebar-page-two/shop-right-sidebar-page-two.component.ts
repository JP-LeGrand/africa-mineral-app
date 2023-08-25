import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from '@angular-slider/ngx-slider';

@Component({
    selector: 'app-shop-right-sidebar-page-two',
    templateUrl: './shop-right-sidebar-page-two.component.html',
    styleUrls: ['./shop-right-sidebar-page-two.component.scss']
})
export class ShopRightSidebarPageTwoComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    minValue: number = 200;
    maxValue: number = 700;
    options: Options = {
        floor: 0,
        ceil: 1000,
        translate: (value: number, label: LabelType): string => {
            switch (label) {
                case LabelType.Low:
                return '<b>Min price:</b> $' + value;
                case LabelType.High:
                return '<b>Max price:</b> $' + value;
                default:
                return '$' + value;
            }
        }
    };

}