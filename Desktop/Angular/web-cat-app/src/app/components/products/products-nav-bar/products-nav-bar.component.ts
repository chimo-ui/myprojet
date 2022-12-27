import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { Product } from 'src/app/model/products.model';
import { ProductService } from 'src/app/services/products.service';
import { ActionEvent, ApptDataState, DataStateEnum, ProductActionsType } from '../../state/product.state';

@Component({
  selector: 'app-products-nav-bar',
  templateUrl: './products-nav-bar.component.html',
  styleUrls: ['./products-nav-bar.component.css']
})
export class ProductsNavBarComponent implements OnInit {
  @Output() ProductEmitter : EventEmitter<ActionEvent> = new EventEmitter();
  
  constructor(){

  }
  ngOnInit(): void {
   
  }


onGetAllProducts() {
  this.ProductEmitter.emit({type : ProductActionsType.GET_ALL_PRODUCTS});
  
}

onGetSelectedProducts() {
  this.ProductEmitter.emit({type : ProductActionsType.GET_SELECTED_PRODUCTS});
    
}

onGetAvailableProducts() {
  this.ProductEmitter.emit({type : ProductActionsType.GET_AVAILABLE_PRODUCTS});
}

onSearch() {
    
}

onNewProduct() {
      
}

}
