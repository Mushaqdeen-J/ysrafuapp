import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AdcetPageRoutingModule } from './adcet-routing.module';

import { AdcetPage } from './adcet.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AdcetPageRoutingModule
  ],
  declarations: [AdcetPage]
})
export class AdcetPageModule {}
