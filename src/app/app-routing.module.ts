import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AssemblingPartsComponent } from './assembling-parts/assembling-parts.component';
import { FinalProductComponent } from './final-product/final-product.component';
import { HomeComponent } from './home/home.component';
import { PartsComponent } from './parts/parts.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'parts', component: PartsComponent },
  {
    path: 'parts', children: [
      { path: 'assembling', component: AssemblingPartsComponent },
      { path: 'assembling',children:[
        {path:'finalProduct',component:FinalProductComponent}
      ] }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
