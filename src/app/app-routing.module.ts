import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './list/list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

import { UpdateComponent } from './update/update.component';
const routes: Routes = [
  {path:'',component:HomePageComponent},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent},
  
  {path:'update',component:UpdateComponent},
  {path:'list',component:ListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
