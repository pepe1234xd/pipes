import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes/pipes.component';
import { PagesComponent } from './pages/pages.component';



@NgModule({
  declarations: [
    PipesComponent,
    PagesComponent
  ],
  imports: [
    CommonModule
  ]
})
export class VentasModule { }
