import { Component, OnInit } from '@angular/core';
import { Options, LabelType } from '@angular-slider/ngx-slider';
import { HttpClient } from '@angular/common/http';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NotifierService } from 'angular-notifier';
import { CartService } from 'src/app/cart.service';
import { ModalService } from 'src/app/modal.service';
import { Category } from 'src/app/enums/category.enum';
import { MineralCategory } from 'src/app/models/MineralCategory';
import { Product } from 'src/app/product';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-shop-left-sidebar-page-one',
    templateUrl: './shop-left-sidebar-page-one.component.html',
    styleUrls: ['./shop-left-sidebar-page-one.component.scss']
})
export class ShopLeftSidebarPageOneComponent implements OnInit {
    modalProduct = this.modalViewService.getProduct();
    private readonly notifier: NotifierService;
    closeModal: any;
    category: number = 0;
    products: any[] = [];
    categories: MineralCategory[] = [];

    constructor(private route: ActivatedRoute, private httpClient: HttpClient, private modalService: NgbModal,
        private cartService: CartService,
        private modalViewService: ModalService,
        notifierService: NotifierService) {
            this.route.params.subscribe((param: any) => {
                this.getProducts().subscribe((products) => {
                    this.products = products.filter(
                        (product: any) => product.category.id === parseInt(param.category)
                    );
                });
            });
            this.notifier = notifierService;
         }

         public getProducts() : Observable<any> {
            return this.httpClient.get("assets/data/mineral-products.json");
        }

        public getCategory() {
            this.httpClient.get("assets/data/mineral-category.json").subscribe(data =>{
                this.categories = data as MineralCategory[];
            });
        }

    ngOnInit(): void {
        this.getCategory();
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

    addToCart(product: Product) {
        this.cartService.addToCart(product);
        this.notifier.notify('success', 'Your product added to the cart!');
    }

    addToModal(product: Product) {
        this.modalViewService.addToModal(product);
    }

    triggerModal(content: any) {
        this.modalService
        .open(content, { windowClass: 'productsQuickView', centered: true })
        .result.then(
            (res) => {
                this.closeModal = `Closed with: ${res}`;
            },
            (res) => {
                this.closeModal = `Dismissed ${this.getDismissReason(res)}`;
            }
        );
    }

    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }
    shopGrid: number = 1;
}
