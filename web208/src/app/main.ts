import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import{HeaderComponentComponent} from './header-component/header-component.component'
import{SlideComponentComponent} from'./slide-component/slide-component.component'
import{ProductComponentComponent} from './product-component/product-component.component'
import{FooterComponentComponent}from './footer-component/footer-component.component'
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginComponent } from './admin/login/login.component';
import { ProductComponent } from './admin/product/product.component';
@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, RouterOutlet,HeaderComponentComponent,SlideComponentComponent,ProductComponentComponent,FooterComponentComponent,HomeComponentComponent,LoginComponent,ProductComponent],
  templateUrl: './main.html'
  
  // templateUrl: './main.html'
})
export class MainComponent {

}
