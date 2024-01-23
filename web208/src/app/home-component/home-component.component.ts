import { Component } from '@angular/core';
import { SlideComponentComponent } from '../slide-component/slide-component.component';
import { ProductComponentComponent } from '../product-component/product-component.component';
import { LoginComponent } from '../admin/login/login.component';
@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [SlideComponentComponent,ProductComponentComponent,LoginComponent],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {

}
