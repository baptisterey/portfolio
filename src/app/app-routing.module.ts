import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from "./main/main.component";
import { NotFoundComponent } from "./not-found/not-found.component";



import { MainRouting } from "./main/main-routing";

const routes: Routes = [
  { path: '', component: MainComponent, children : MainRouting },
  { path: '**', redirectTo: '/404' },
  { path: '404', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
