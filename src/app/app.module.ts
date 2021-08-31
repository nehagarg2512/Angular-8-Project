import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Product } from './models/product';
import { ProductListComponent } from './components/product-list/product-list.component';
import { convertToSpace } from './pipes/convertDashToSpace.pipe';
import { HttpClientModule } from '@angular/common/http';
import { ProductComponent } from './components/product/product.component';
import { NavbarComponent } from './components/nav-bar/nav-bar.component';
import { Rating } from './components/starRating/rating.component';
import { DescriptionComponent } from './description/description.component';
import { CheckGuard } from './guards/check.guard';
import { ResolveGuard } from './guards/resolve.guard';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductComponent,
    NavbarComponent,
    convertToSpace,
    Rating,
    DescriptionComponent,
  ],
  imports: [HttpClientModule, FormsModule, BrowserModule, AppRoutingModule],
  providers: [CheckGuard, ResolveGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
