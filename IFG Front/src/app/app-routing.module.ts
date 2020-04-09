import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';

import { LoginComponent } from './login/login.component';
import { GeneralComponent } from './general/general.component';
import { BackComponent } from './back/back.component';
import { FrontComponent } from './front/front.component';
import { ConfigAppComponent } from './config-app/config-app.component';
import { DbConfigComponent } from './db-config/db-config.component';
import {WlcPageComponent} from './wlc-page/wlc-page.component' ;
import { ListFrontComponent } from './list-front/list-front.component';
import { ListFullComponent } from './list-full/list-full.component';







const appRoutes: Routes = [
  //{ path: '', redirectTo: 'front', pathMatch: 'full' },
  { path: '', redirectTo: 'back', pathMatch: 'full' },
  { path: '', redirectTo: 'app', pathMatch: 'full' },
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'general/back-config', component: BackComponent},
  {path: 'logout', component: LoginComponent},
  {path: 'general', component: GeneralComponent},
  {path: 'general/front', component: FrontComponent},
  {path: 'general/app-config', component: ConfigAppComponent},
  {path: 'hello-word', component: HelloWorldComponent},
  {path:'wlc-page' , component:WlcPageComponent} ,
  {path:'wlc-page/:id' , component:WlcPageComponent} ,
  {path:'wlc-page/:id_back' , component:WlcPageComponent} ,
  {path:'list-front', component:ListFrontComponent},
  {path:'list-front/:id ', component:ListFrontComponent},
  {path:'list-full' , component:ListFullComponent},
  {path:'list-full/id_application' , component:ListFullComponent},
  {path: 'db-config', component: DbConfigComponent} , 
 
 
  
  

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
