import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routes';
import { ProductComponent } from './components/product/product.component';
import { ProductService } from './services/product.service';
import { CategoryService } from './services/category.service';

@NgModule({
    declarations: [
        ProductComponent
    ],
    providers: [ProductService,CategoryService],
    imports: [
        CommonModule,
        HttpClientModule,
        AppRoutingModule,
    ],
    exports:[ProductComponent]
})
export class AppModule {}
