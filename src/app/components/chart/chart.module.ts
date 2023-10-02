import { NgModule } from '@angular/core';
import { ChartComponent } from './chart.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ChartComponent
  ],
  imports: [
    CommonModule,
    TranslateModule
  ],
  providers: [
  ],
  exports: [
    ChartComponent
  ]
})
export class ChartModule { }