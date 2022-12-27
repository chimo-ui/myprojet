import { Component } from '@angular/core';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { Product } from 'src/app/model/products.model';
import { ActionEvent, ApptDataState, DataStateEnum, ProductActionsType } from '../state/product.state';
import { ProductService } from 'src/app/services/products.service';
import { Router } from '@angular/router';


/**
 * @title Basic use of `<table mat-table>`
 */



@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})


export class ProductsComponent {
  products$:Observable<ApptDataState <Product[]>> | null=null;
  readonly DataStateEnum = DataStateEnum;
  constructor(private productservice:ProductService,private router:Router) { 
    
  }

  onGetAllProducts() {
  this.products$ = 
    this.productservice.getAllProduct().pipe(
      map(data =>{
        console.log(data);
        return ({dataState : DataStateEnum.LOADED ,data : data})
      }),
      startWith({dataState: DataStateEnum.LOADING}),
      catchError(err=>of({dataState : DataStateEnum.ERROR,errorMessage : err.message}))
    ); 
  }

  onGetSelectedProducts() {
    this.products$ = 
      this.productservice.getSelectedProduct().pipe(
        map(data =>{
          console.log(data);
          return ({dataState : DataStateEnum.LOADED ,data : data})
        }),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err=>of({dataState : DataStateEnum.ERROR,errorMessage : err.message}))
      ); 
    }

  onGetAvailableProducts() {
      this.products$ = 
        this.productservice.getAvailableProduct().pipe(
          map(data =>{
            console.log(data);
            return ({dataState : DataStateEnum.LOADED ,data : data})
          }),
          startWith({dataState: DataStateEnum.LOADING}),
          catchError(err=>of({dataState : DataStateEnum.ERROR,errorMessage : err.message}))
        ); 
      }

  onSearch(dataForm : any) {
    this.products$ = 
      this.productservice.searchProduct(dataForm.keyword).pipe(
        map(data =>{
          console.log(data);
          return ({dataState : DataStateEnum.LOADED ,data : data})
        }),
        startWith({dataState: DataStateEnum.LOADING}),
        catchError(err=>of({dataState : DataStateEnum.ERROR,errorMessage : err.message}))
      ); 
    }

    onNewProduct() {
      this.router.navigateByUrl("/add")
    }

    onSelect(p : Product) {
      this.productservice.Select(p).subscribe(
        data=> {
          p.selected = data.selected;
        }
      )
    }
    
    onEdit(p : Product){
      this.productservice.edit(p).subscribe(
        data=> {
          this.onGetAllProducts();
        }
      )
    }

    onDelete(p : Product) {
      this.productservice.delete(p).subscribe(
        data=> {
          this.onGetAllProducts();
        }
      )
    }

    OnActionEvent($event : ActionEvent ){
      switch($event.type){
        case ProductActionsType.GET_ALL_PRODUCTS: this.onGetAllProducts(); break;
        case ProductActionsType.GET_SELECTED_PRODUCTS: this.onGetSelectedProducts(); break;
        case ProductActionsType.GET_AVAILABLE_PRODUCTS: this.onGetAvailableProducts(); break;
        case ProductActionsType.SELECT_PRODUCT: this.onSelect($event.payload); break;
        case ProductActionsType.DELETE_PRODUCT: this.onDelete($event.payload); break;
      }
      console.log($event);
    }
    
    



}
