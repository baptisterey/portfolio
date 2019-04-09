import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from "./home/home.component";

export const MainRouting: Routes = [
  { path: '', component: HomeComponent },
];
