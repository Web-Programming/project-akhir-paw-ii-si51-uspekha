import {Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { FrameworkComponent } from './framework/framework.component';
import { HttpClientModule } from '@angular/common/http';
import { PasienComponent } from './pasien/pasien.component';
import { DokterComponent } from './dokter/dokter.component';
import { RmedisComponent } from './rmedis/rmedis.component';

@NgModule({
  declarations: [
    AppComponent,
    FrameworkComponent,
    PasienComponent,
    DokterComponent,
    RmedisComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: "",
        component: AppComponent
      },
      {
        path: "pasien",
        component: PasienComponent
      },
      {
        path: "rmedis",
        component: RmedisComponent
      },
      {
        path: "dokter",
        component:DokterComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [FrameworkComponent]
})
export class AppModule { }
