import { Routes, RouterModule} from '@angular/router';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Grafica1Component } from './grafica1/grafica1.component';
import { NopagefoundComponent } from '../nopagefound/nopagefound.component';
import { PagesComponent } from './pages.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
    {
        path:'dashboard', 
        component: PagesComponent,
        children: [
          {path: '', component: DashboardComponent, data: { titulo: ''}},
          {path: 'progress', component: ProgressComponent, data: { titulo: 'progress'}},
          {path: 'grafica1', component: Grafica1Component, data: { titulo: 'grafica 1'}},
          {path: 'account-settings', component: AccountSettingsComponent, data: { titulo: 'Ajustes de cuenta'}},
          {path: 'promesas', component: PromesasComponent, data: { titulo: 'promesas'}},
          {path: 'rxjs', component: RxjsComponent, data: { titulo: 'rxjs'}},
        ]
      },
];

@NgModule({
    imports:[
        RouterModule.forChild(routes),
    ],
    exports:[ RouterModule ]
})

export class PagesRoutingModule {}