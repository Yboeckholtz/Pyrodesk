import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ToggleBarComponent } from './toggle-bar/toggle-bar.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { TouchViewComponent } from './view/touch-view/touch-view.component';
import { CategorieListComponent } from './view/touch-view/categorie-list/categorie-list.component';
import { ProductListComponent } from './view/touch-view/product-list/product-list.component';
import { ViewComponent } from './view/view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToggleBarComponent,
    CheckoutComponent,
    TouchViewComponent,
    CategorieListComponent,
    ProductListComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
