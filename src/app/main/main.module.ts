import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {ParticlesModule} from "angular-particle";

@NgModule({
  declarations: [MainComponent, HomeComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ParticlesModule
  ]
})
export class MainModule { }
