import { NgModule } from "@angular/core"
import { AppRoutingModule } from '../app-routing.module'

import { DashboardComponent } from './dashboard/dashboard.component'
import { ProgressComponent } from './progress/progress.component'
import { Graficas1Component } from './graficas1/graficas1.component'

@NgModule({
    imports: [
        AppRoutingModule
    ],
    declarations: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ]
})

export class PagesModule {}