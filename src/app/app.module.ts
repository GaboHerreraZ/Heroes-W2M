import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { InterceptorModule } from './shared/modules/interceptor.module';
import { LoadingModule } from './shared/loading/loading.module';
import { 
  TranslateLoader, 
  TranslateModule 
} from '@ngx-translate/core';
import { HttpClient } from '@angular/common/http';
import { CustomLoader } from './shared/models/custom-loader';
import { HomeModule } from './home/home.module';
import { NavbarModule } from './navbar/navbar.module';
import { MessageModule } from './shared/message/message.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    AppRoutingModule,
    InterceptorModule,
    LoadingModule,
    HomeModule,
    NavbarModule,
    MessageModule,
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
