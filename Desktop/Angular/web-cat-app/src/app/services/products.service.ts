import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Product } from "../model/products.model";


@Injectable({providedIn : "root"})

export class ProductService{
    constructor(private http:HttpClient){

    }

    getAllProduct():Observable<Product[]>{
        return this.http.get<Product[]>("http://localhost:3000/products")
    }

    getSelectedProduct():Observable<Product[]>{
        return this.http.get<Product[]>("http://localhost:3000/products?selected=true")
    }

    getAvailableProduct():Observable<Product[]>{
        return this.http.get<Product[]>("http://localhost:3000/products?available=true")
    }

    searchProduct(keyword:string):Observable<Product[]> {
        return this.http.get<Product[]>("http://localhost:3000/products?name_like"+keyword)
    }
    
    save(product:Product):Observable<Product>{
        return this.http.post<Product>("http://localhost:3000/products",product)
    }
    
    Select(product:Product):Observable<Product>{
        product.selected = ! product.selected
        return this.http.put<Product>("http://localhost:3000/products/"+ product.id ,product)
    }

    delete(product:Product):Observable<void>{
        return this.http.delete<void>("http://localhost:3000/products/" + product.id)
    }

    edit(product:Product):Observable<Product>{
        return this.http.put<Product>("http://localhost:3000/products/"+ product.id ,product)
    }

    
}