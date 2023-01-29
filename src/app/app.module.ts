import {
  NgModule
} from '@angular/core';
import {
  BrowserModule
} from '@angular/platform-browser';
import {
  HttpClientModule
} from '@angular/common/http';
import {
  CarouselModule
} from 'ngx-bootstrap/carousel';
import {
  ButtonsModule
} from 'ngx-bootstrap/buttons';
import {
  ModalModule
} from 'ngx-bootstrap/modal';
import {
  TooltipModule
} from "ngx-bootstrap/tooltip";



import {
  AppComponent
} from './app.component';
import {
  Route,
  RouterModule
} from '@angular/router';
import {
  ReactiveFormsModule
} from '@angular/forms';

import {
  SheryModule
} from "./components/import/import.module";

import { CourserComponent } from './pages/courser/courser.component';
import {WorkWithComponent} from "./pages/work-with/work-with.component";
import {NavlinksComponent} from "./pages/navlinks/navlinks.component";
import {LevaotComponent} from "./pages/levaot/levaot.component";

let router: Route[];
router = [{
  path: "",
  redirectTo: 'home',
  pathMatch: 'full'
},
  {
    path: "home",
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  {
    path: "about",
    loadChildren: () => import('./pages/about/about.module').then(m => m.AboutModule)
  },
  {
    path: "price",
    loadChildren: () => import('./pages/price/price.module').then(m => m.PriceModule)
  },
  {
    path: "contact",
    loadChildren: () => import('./pages/contact/contact.module').then(m => m.ContactModule)
  },
  {
    path: "gallery",
    loadChildren: () => import('./pages/gallery/gallery.module').then(m => m.GalleryModule)
  },

  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'admin',
    component: LevaotComponent,
    children: [
      {
        path: "work_with",
        component: WorkWithComponent
      },
      
      {
        path: "nav_links",
        component: NavlinksComponent
      },
      {
        path: "courser",
        component: CourserComponent
      }
    ]
  },

  {
    path: "**",
    loadChildren: () => import('./pages/ErorrPage/erorrpage.module').then(m => m.Page404Module)
  },

];

@NgModule({
  declarations: [
    AppComponent,
    WorkWithComponent,
    CourserComponent,
    NavlinksComponent,
    LevaotComponent

  ],
  exports: [

  ],
  providers: [],
  bootstrap: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(router),
    ReactiveFormsModule,
    HttpClientModule,
    CarouselModule.forRoot(),
    ButtonsModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot(),
    SheryModule
  ]
})
export class AppModule {}
