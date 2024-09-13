import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderPfModule } from './header-pf/header-pf.module';
import { MainPfModule } from './main-pf/main-pf.module';
import { InfoPfModule } from './info-pf/info-pf.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HeaderPfModule,
    MainPfModule,
    InfoPfModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
