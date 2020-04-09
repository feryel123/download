import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OCalendarModule, OCarouselModule, ODropdownModule, ONavLinkModule, ONavMenuModule,
  ONavbarModule, ScrollTopModule, OSwitchModule, OToastModule } from 'ng-boosted';
  import {HttpModule} from '@angular/http';
import { LoginComponent } from './login/login.component';
import { MenuComponent } from './menu/menu.component';

import { LogoutComponent } from './logout/logout.component';

import { HelloWorldComponent } from './hello-world/hello-world.component';

import { FormsModule } from '@angular/forms';

import { HttpInterceptorService } from './basic-auth-interceptor.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BackComponent } from './back/back.component';
import { GeneralComponent } from './general/general.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FrontComponent } from './front/front.component';
import { ConfigAppComponent } from './config-app/config-app.component';
import {ReactiveFormsModule} from '@angular/forms';
import { DbConfigComponent } from './db-config/db-config.component';
import { WlcPageComponent } from './wlc-page/wlc-page.component';
import { ListFrontComponent } from './list-front/list-front.component';
import { ListFullComponent } from './list-full/list-full.component';




@NgModule({
  declarations: [
    AppComponent,

    LoginComponent,

    MenuComponent,
    LogoutComponent,


    HelloWorldComponent,

    BackComponent,

    GeneralComponent,

    FrontComponent,

    ConfigAppComponent,

    DbConfigComponent,

    WlcPageComponent,

    ListFrontComponent,

    ListFullComponent,

    

   

    

  
    
  ],
  imports: [
    OCalendarModule, OCarouselModule, ODropdownModule, ONavLinkModule, ONavMenuModule,
  ONavbarModule, ScrollTopModule, OSwitchModule, OToastModule ,FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    AppRoutingModule ,
    ReactiveFormsModule, HttpModule
  ],
  providers: [
    {
      
      provide: HTTP_INTERCEPTORS,
      useClass: HttpInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
