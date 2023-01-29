import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';

import {
  Page404RoutingModule
} from './erorrpage-routing.module';
import {
  SheryModule
} from 'src/app/components/import/import.module';
import {
  Page404Component
} from './erorrpage.component';


@NgModule({
  declarations: [
    Page404Component
  ],
  imports: [
    CommonModule,
    Page404RoutingModule,
    SheryModule
  ]
})
export class Page404Module {}