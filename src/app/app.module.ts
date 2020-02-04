import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { AppRoutingModule } from './app-routing.module'

import { AppComponent } from './app.component'
import { PagesModule } from './pages/pages.module'
import { PagesComponent } from './pages/pages.component'

import { HeaderComponent } from './shared/header/header.component'
import { SidebarComponent } from './shared/sidebar/sidebar.component'
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component'

import { LoginComponent } from './login/login.component'
import { RegisterComponent } from './login/register.component'
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component'

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NopagefoundComponent,
    RegisterComponent,
    PagesComponent,
    HeaderComponent,
    SidebarComponent,
    BreadcrumbsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
