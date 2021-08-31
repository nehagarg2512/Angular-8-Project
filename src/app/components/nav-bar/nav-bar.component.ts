import { Component, OnInit, Injectable } from "@angular/core";
import { ProductService } from 'src/app/services/product/iProduct.service';
import { Product } from 'src/app/models/product';

@Component({
    selector: 'nav-bar',
    templateUrl: './nav-bar.component.html',
    styleUrls: ['./nav-bar.component.css']
})

export class NavbarComponent implements OnInit{
    products: Product[];

    constructor(public productService: ProductService)
    {

    }
    ngOnInit() 
    {
        this.productService.GetAll().subscribe(data => this.products = data);
    }   
}