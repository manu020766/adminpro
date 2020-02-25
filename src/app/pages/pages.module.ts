import { NgModule } from "@angular/core"
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'

// Shared components
import { SharedModule } from '../shared/shared.module'

// Pipes 
import { PipesModule } from '../pipes/pipes.module'

// Pages Routes
import { PagesRoutingModule } from './pages-routing.module'

// Librería para crear gráficos
import { ChartsModule } from 'ng2-charts'

//Main Pages
import { PagesComponent } from './pages.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { ProgressComponent } from './progress/progress.component'
import { Graficas1Component } from './graficas1/graficas1.component'
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';
import { GraficoDonaComponent } from '../components/grafico-dona/grafico-dona.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { ProfileComponent } from './profile/profile.component'

@NgModule({
    imports: [
        BrowserModule,
        SharedModule,
        FormsModule,
        ReactiveFormsModule,
        ChartsModule,
        PagesRoutingModule,
        PipesModule
    ],
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent,
        GraficoDonaComponent,
        AccountSettingsComponent,
        ProfileComponent
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ]
})

export class PagesModule {}