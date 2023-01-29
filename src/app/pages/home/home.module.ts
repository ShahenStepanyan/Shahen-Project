import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';

import {
  HomeRoutingModule
} from './home-routing.module';
import {
  HomeComponent
} from './home.component';
import {
  SheryModule
} from 'src/app/components/import/import.module';
import {
  HttpClientModule
} from '@angular/common/http';
import {
  CarouselModule
} from 'ngx-bootstrap/carousel';


@NgModule({
  declarations: [
    HomeComponent,
  ],
  bootstrap: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SheryModule,
    HttpClientModule,
    CarouselModule.forRoot(),


  ]
})
export class HomeModule {}
