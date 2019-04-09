import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [MainComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class MainModule { }
