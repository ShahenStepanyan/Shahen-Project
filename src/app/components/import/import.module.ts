
import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';
import {
  FooterComponent
} from '../footer/footer.component';
import {
  FormComponent
} from '../form/form.component';
import {
  KindsComponent
} from '../info/info.component';
import {
  KaruselComponent
} from '../carousel/carusel.component';
import {
  ReactiveFormsModule
} from '@angular/forms';
import {
  RouterModule
} from '@angular/router';
import {
  CarouselModule
} from 'ngx-bootstrap/carousel';
import {
  AboutBlockComponent
} from '../abouthome/about-block.component';
import {
  HeaderComponent
} from '../header/header.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AboutBlockComponent,
    KindsComponent,
    FormComponent,
    KaruselComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    CarouselModule.forRoot(),
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    AboutBlockComponent,
    KaruselComponent,
    KindsComponent,
    FormComponent,
  ]
})
export class SheryModule {}
