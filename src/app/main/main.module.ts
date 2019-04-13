import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from "@angular/flex-layout";

import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './home/project/project.component';

import { ParticlesModule } from "angular-particle";
import { TeximateModule } from 'ngx-teximate';
import { ParallaxScrollModule } from 'ng2-parallaxscroll';
import { InViewportModule } from 'ng-in-viewport';


@NgModule({
  declarations: [MainComponent, HomeComponent, ProjectComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ParticlesModule,
    TeximateModule,
    ParallaxScrollModule,
    MatIconModule,
    InViewportModule
  ]
})
export class MainModule { }
