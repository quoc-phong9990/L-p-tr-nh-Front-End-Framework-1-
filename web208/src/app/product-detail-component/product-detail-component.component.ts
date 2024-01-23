// import { Component,inject } from '@angular/core';
// // import { IProductdetail } from '../interface/productdetail';
// import { CommonModule } from '@angular/common';
// import { HttpClient,HttpClientModule } from '@angular/common/http';
// import { ActivatedRoute } from '@angular/router';
// import { routes } from '../app.routes';
// import { Route } from '@angular/router';

// @Component({
//   selector: 'app-product-detail-component',
//   standalone: true,
//   imports: [HttpClientModule],
//   templateUrl: './product-detail-component.component.html',
//   styleUrl: './product-detail-component.component.css'
// })
// export class ProductDetailComponentComponent {
//   productdetail:any;
// constructor(routes: ActivatedRoute){

// }
// httpClient =inject(HttpClient);

// ngOnIInit(){
//   let id = this.routers.snapshot.paramMap.get('id');
//   //  let id=0;
//   //  if (slug==='mac-book-pro'){
//   //   id=6
//   //  }
//   //  else if(slug==='iphone-9'){
//   //   id=1
//   //  }
//   //  else{
//   //   id=5
//   //  }
//   //  console.log(id);
//   this.getDetailproductById(Number(id))
   
// }
// getDetailproductById(id:number){
//   // console.log(id);
//   this.httpClient.get(`https://dummyjson.com/products/${id}`)
//   .subscribe(response:any)=>{
//     this.productdetail=response
//   }
  
// }



// productdetail: any;
// httpClient = inject(HttpClient);
// ngOnInit(): void {
//   this.getProductdetail();
// }
// getProductdetail() {
//   this.httpClient.get('https://dummyjson.com/products/2')
//     .subscribe((response: any) => {
//       console.log(response);
//       console.log(response.productdetail);
//       this.productdetail = response;
//     });
// }
// }
import { Component, inject } from '@angular/core';
import { routes } from '../app.routes';
import { ActivatedRoute } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@Component({
   selector: 'app-product-detail-component',
    standalone: true,
    imports: [HttpClientModule],
    templateUrl: './product-detail-component.component.html',
    styleUrl: './product-detail-component.component.css'
})

export class ProductDetailComponentComponent {
  productdetail:any;
  constructor(private routes: ActivatedRoute){
  }
  httpClient = inject(HttpClient);
  ngOnInit(){
    let id = this.routes.snapshot.paramMap.get('id');
    // let id = 0;
    // if (slug==='mac-book-pro'){
    //   id = 6;
    // }
    // else if (slug==='iphone-9'){
    //   id = 1;
    // }
    // else{
    //   id = 5;
    // }
    // console.log(id);
    this.getDetailProductById(Number(id));
  }
  getDetailProductById(id:number){
    // console.log(id);  
    this.httpClient.get(`https://dummyjson.com/products/4`)
    // this.httpClient.get(`https://dummyjson.com/products/${id}`)
    .subscribe((response:any)=>{
        // console.log(response);
        this.productdetail = response;
    })  
  }
}