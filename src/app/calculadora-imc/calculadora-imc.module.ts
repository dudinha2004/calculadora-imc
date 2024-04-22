import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CalculadoraImcPageRoutingModule } from './calculadora-imc-routing.module';

import { CalculadoraImcPage } from './calculadora-imc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CalculadoraImcPageRoutingModule
  ],
  declarations: [CalculadoraImcPage]
})
export class CalculadoraImcPageModule {}
