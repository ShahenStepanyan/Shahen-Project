import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  Page404Component
} from './erorrpage.component';

const routes: Routes = [{
  path: "",
  component: Page404Component
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Page404RoutingModule {}