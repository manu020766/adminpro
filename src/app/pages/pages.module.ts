import { NgModule } from "@angular/core"

// Shared components
import { SharedModule } from '../shared/shared.module'

//Main Pages
import { PagesComponent } from './pages.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { ProgressComponent } from './progress/progress.component'
import { Graficas1Component } from './graficas1/graficas1.component'

@NgModule({
    imports: [
        SharedModule
    ],
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    exports: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ]
})

export class PagesModule {}