import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import { DescriptionComponent } from './description/description.component';
import { CheckGuard } from './guards/check.guard';
import { ResolveGuard } from './guards/resolve.guard';

const routes: Routes = [
  { path: '', component: ProductListComponent },
  {
    path: 'product/:id',
    component: ProductComponent,
    canActivate: [CheckGuard],
    resolve: { data: ResolveGuard },
    children: [{ path: 'description', component: DescriptionComponent }],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
