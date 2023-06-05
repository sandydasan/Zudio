import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddZudioComponent } from './add-zudio/add-zudio.component';
import { UpdateZudioComponent } from './update-zudio/update-zudio.component';
import { ViewZudioComponent } from './view-zudio/view-zudio.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path:'',component:DashboardComponent
  },
  {
    path:'add',component:AddZudioComponent
  },
  {
    path:'update/:zudioId',component:UpdateZudioComponent
  },
  {
    path:'view/:zudioId',component:ViewZudioComponent
  },
  {
    path:'**',component:PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
