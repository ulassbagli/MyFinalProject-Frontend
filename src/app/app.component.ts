import { Component } from '@angular/core';
import { CategoryComponent } from "./components/category/category.component";
import { NaviComponent } from "./components/navi/navi.component";
import { RouterOutlet } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppModule } from "./app.module";

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    providers: [],
    imports: [
        AppComponent,
        CategoryComponent,
        NaviComponent,
        RouterOutlet,
        HttpClientModule,
        AppModule
    ]
})

export class AppComponent {
  title = 'northwind';
  user: string = "Ulaş Bağlı";
}
