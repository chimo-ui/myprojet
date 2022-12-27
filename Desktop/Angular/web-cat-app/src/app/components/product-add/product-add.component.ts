import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from 'src/app/services/products.service';
import { HttpClient } from "@angular/common/http";
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit{

  productformGroup! : FormGroup;
  imageControl = new FormControl('');
  submitted : boolean=false;
  selectedImg! : File;

  constructor(private fb:FormBuilder, private productservice : ProductService,private http:HttpClient,private router:Router) {
    
  }
  
  ngOnInit(): void {
    this.productformGroup = this.fb.group({
      name:["",Validators.required],
      price:[0,Validators.required],
      quantity:[0,Validators.required],
      selected:[true,Validators.required],
      available:[true,Validators.required],
    })
  }

 
  // successNotification() {
  //   Swal.fire('OK', 'Save succefly!', 'success');
  // }

  onImgChange(event: any){
    if (event.target.files && event.target.files.length) {
      const img = event.target.files[0];
      const filePath = 'assets/img/' + img.name;
      // const imageFile = require('assets/img/my-image.jpg');

    // Use the Angular HttpClient to post the image to the server
      // this.http.post('assets/img/', filePath).subscribe();
      // const fileRef = this.storage.ref(filePath);
      // const task = this.storage.upload(filePath, file);
      console.log(event);
      console.log(filePath);
      // this.productformGroup.patchValue({
      //   img : filePath
      // });
      
    
    // this.selectedImg = <File>event.target.files[0];
    }
  }
  
  
  onSaveProduct(){
    this.submitted=true;
    if(this.productformGroup?.invalid) return;
    this.productservice.save(this.productformGroup.value).subscribe(data=>{
      alert("sucess");
    })
    this.router.navigateByUrl("/products")
    

  }

  

}
