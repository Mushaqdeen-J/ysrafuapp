import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdcetPage } from './adcet.page';

const routes: Routes = [
  {
    path: '',
    component: AdcetPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdcetPageRoutingModule {}
