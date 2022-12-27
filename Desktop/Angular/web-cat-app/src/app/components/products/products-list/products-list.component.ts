import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { catchError, map, Observable, of, startWith } from 'rxjs';
import { Product } from 'src/app/model/products.model';
import { ProductService } from 'src/app/services/products.service';
import { Router } from '@angular/router';
import { ActionEvent, ApptDataState, DataStateEnum, ProductActionsType } from '../../state/product.state';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  ngOnInit(): void {
    
  }

  @Input()  productsInput$:Observable<ApptDataState <Product[]>> | null=null;
  @Output() ProductEmitter : EventEmitter<ActionEvent> = new EventEmitter();
  

  readonly DataStateEnum = DataStateEnum;

  // onSelect(p : Product){
  //   this.ProductEmitter.emit({type:ProductActionsType.SELECT_PRODUCT,payload : p });
  // }

  // onEdit(p : Product){
  //   this.ProductEmitter.emit({type:ProductActionsType.EDIT_PRODUCT,payload : p });
  // }

  // onDelete(p : Product){
  //   this.ProductEmitter.emit({type:ProductActionsType.DELETE_PRODUCT,payload : p });
  // }

  OnActionEvent($event : ActionEvent){
    this.ProductEmitter.emit($event);
  }

}
