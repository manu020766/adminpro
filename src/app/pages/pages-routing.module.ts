import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'

import { PagesComponent } from './pages.component'
import { DashboardComponent } from './dashboard/dashboard.component'
import { Graficas1Component } from './graficas1/graficas1.component'
import { ProgressComponent } from './progress/progress.component'
import { NopagefoundComponent } from '../shared/nopagefound/nopagefound.component'
import { AccountSettingsComponent } from './account-settings/account-settings.component'
import { LoginGuardGuard } from '../services/guards/login-guard.guard'

const routes:Routes = [
    {
        path: '',
        component: PagesComponent,
        canActivate: [LoginGuardGuard],
        children: [
            { path: 'dashboard', component: DashboardComponent, data: { titulo: 'Dashboard' } },
            { path: 'graficas1', component: Graficas1Component, data: { titulo: 'Gráficas' } },
            { path: 'progress', component: ProgressComponent, data: { titulo: 'Progress' } },
            { path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes de cuenta' } },
            { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
            { path: '**', component:NopagefoundComponent },
        ]
    }
]

@NgModule({
    imports: [ RouterModule.forChild(routes) ],
    exports: [ RouterModule ]
})
export class PagesRoutingModule {}