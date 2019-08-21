import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from "./main/main.component";

import { MainRouting } from "./main/main-routing";

const routes: Routes = [
  { path: '', component: MainComponent, children : MainRouting },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes),],
  exports: [RouterModule]
})
export class AppRoutingModule { }
