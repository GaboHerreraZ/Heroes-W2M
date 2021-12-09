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
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { CustomtranslateModule } from './shared/modules/custom-translate.module';
import { CustomLoader } from './shared/models/custom-loader';

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
    LoadingModule,
    TranslateModule.forRoot({
      defaultLanguage: 'es',
      loader: {
        provide: TranslateLoader,
        useClass: CustomLoader,
        deps: [ HttpClient ]
      }
    })
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
