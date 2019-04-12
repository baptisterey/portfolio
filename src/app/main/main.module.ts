import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from "@angular/flex-layout";
import { ParticlesModule } from "angular-particle";
import { ProjectComponent } from './home/project/project.component';
import { TeximateModule } from 'ngx-teximate';

@NgModule({
  declarations: [MainComponent, HomeComponent, ProjectComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ParticlesModule,
    TeximateModule
  ]
})
export class MainModule { }
