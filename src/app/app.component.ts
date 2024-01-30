import { Component} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from "./components/product/product.component";
import { CategoryComponent } from "./components/category/category.component";
import { NaviComponent } from "./components/navi/navi.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, ProductComponent, CategoryComponent, NaviComponent, CommonModule]
})
export class AppComponent {
  title = 'northwind';
  user: string = "Ulaş Bağlı"
}
