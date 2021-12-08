import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoadingComponent } from './loading/loading.component';
import { MaterialModule } from './shared/modules/material.module';
import { ToastrModule } from 'ngx-toastr';
import { InterceptorModule } from './shared/modules/interceptor.module';
import { LoadingModule } from './shared/loading/loading.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    MaterialModule,
    ToastrModule.forRoot(),
    InterceptorModule,
    LoadingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
