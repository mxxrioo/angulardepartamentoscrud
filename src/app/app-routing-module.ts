import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home-component/home-component';
import { CreateComponent } from './components/create-component/create-component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "create", component: CreateComponent },
  {path: "details/:id/:nombre/:localidad", component: Detail}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
