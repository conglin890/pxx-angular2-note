import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './component/login.component'

import { RootRoutingModule } from './modules/routes/root-routing.module'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RootRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
