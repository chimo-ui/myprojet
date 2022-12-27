import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/model/products.model';
import { ActionEvent, ApptDataState, ProductActionsType } from '../../state/product.state';

@Component({
  selector: 'app-app-product-item',
  templateUrl: './app-product-item.component.html',
  styleUrls: ['./app-product-item.component.css']
})
export class AppProductItemComponent implements OnInit {

  ngOnInit(): void {
    
  }

  @Input()  product: Product | null=null;
  @Output() ProductEmitter : EventEmitter<ActionEvent> = new EventEmitter();

  

  onSelect(p : Product){
    this.ProductEmitter.emit({type:ProductActionsType.SELECT_PRODUCT,payload : p });
  }

  onEdit(p : Product){
    this.ProductEmitter.emit({type:ProductActionsType.EDIT_PRODUCT,payload : p });
  }

  onDelete(p : Product){
    this.ProductEmitter.emit({type:ProductActionsType.DELETE_PRODUCT,payload : p });
  }

}
