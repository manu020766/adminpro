import { NgModule } from "@angular/core"
import { FormsModule } from '@angular/forms'

// Shared components
import { SharedModule } from '../shared/shared.module'

// Pages Routes
import { PagesRoutingModule } from './pages-routing.module'

//Main Pages
import { PagesComponent } from './pages.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { ProgressComponent } from './progress/progress.component'
import { Graficas1Component } from './graficas1/graficas1.component'
import { IncrementadorComponent } from '../components/incrementador/incrementador.component'

@NgModule({
    imports: [
        SharedModule,
        FormsModule,
        PagesRoutingModule
    ],
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementadorComponent
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ]
})

export class PagesModule {}