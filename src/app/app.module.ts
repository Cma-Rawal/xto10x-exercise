import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardComponent } from './feature/products-list/components/card/card.component';
import { CardContainerComponent } from './feature/products-list/components/card-container/card-container.component';
import { HeaderComponent } from './feature/products-list/components/header/header.component';
import { ProductListPageComponent } from './feature/products-list/components/product-list-page/product-list-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    CardContainerComponent,
    HeaderComponent,
    ProductListPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
