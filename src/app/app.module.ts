import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppRoutingModule } from './app-routing.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

//Librerias
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2' // esta librería es para mostrar diálogos, es chulisima

import { AppComponent } from './app.component'
import { PagesModule } from './pages/pages.module'

import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './login/register.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SweetAlert2Module.forRoot(),
    ReactiveFormsModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
