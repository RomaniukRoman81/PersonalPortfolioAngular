import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ProfileModule } from './profile/profile.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Constants } from './constants';
import { HttpErrorInterceptor } from './http-error.interceptor';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProfileModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [
    Constants,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
