import { NgModule } from '@angular/core';
import { UserInfoComponent } from './user-info.component';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { ChartModule } from '../chart/chart.module';

@NgModule({
  declarations: [
    UserInfoComponent
  ],
  imports: [
    CommonModule,
    TranslateModule,
    MatIconModule,
    MatCardModule,
    ChartModule
  ],
  providers: [],
  exports: [
    UserInfoComponent
  ]
})
export class UserInfoModule { }