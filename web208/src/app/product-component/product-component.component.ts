import { Component } from '@angular/core';
import { IProduct } from '../interface/product';

@Component({
  selector: 'app-product-component',
  standalone: true,
  imports: [],
  templateUrl: './product-component.component.html',
  styleUrl: './product-component.component.css'
})
export class ProductComponentComponent {
  product: IProduct[] = [
   {
    id:1,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHDT40pjoi4s8c_ZxfZcgA_WqmM7fsC4KWaw&usqp=CAU',
    title:'name product1',
    price:'2000$'
   },

   {
    id:2,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHDT40pjoi4s8c_ZxfZcgA_WqmM7fsC4KWaw&usqp=CAU',
    title:'name product2',
    price:'2000$'
   },

   {
    id:3,
    image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHDT40pjoi4s8c_ZxfZcgA_WqmM7fsC4KWaw&usqp=CAU',
    title:'name product3',
    price:'2000$'
   },

  ];
}
