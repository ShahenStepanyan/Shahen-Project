import {
  NgModule
} from '@angular/core';
import {
  CommonModule
} from '@angular/common';

import {
  ContactRoutingModule
} from './contact-routing.module';
import {
  ContactComponent
} from './contact.component';
import {
  SheryModule
} from 'src/app/components/import/import.module';


@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SheryModule
  ]
})
export class ContactModule {}