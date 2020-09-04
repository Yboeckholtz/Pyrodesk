import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ToggleBarComponent } from './toggle-bar/toggle-bar.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { TouchViewComponent } from './view/touch-view/touch-view.component';
import { CategorieListComponent } from './view/touch-view/categorie-list/categorie-list.component';
import { ProductListComponent } from './view/touch-view/product-list/product-list.component';
import { ViewComponent } from './view/view.component';
import { KeyboardViewComponent} from './view/keyboard-view/keyboard-view.component'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ToggleBarComponent,
    CheckoutComponent,
    TouchViewComponent,
    KeyboardViewComponent,
    CategorieListComponent,
    ProductListComponent,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
