import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CalculadoraImcPage } from './calculadora-imc.page';

const routes: Routes = [
  {
    path: '',
    component: CalculadoraImcPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CalculadoraImcPageRoutingModule {}
