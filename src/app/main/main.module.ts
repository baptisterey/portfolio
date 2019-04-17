import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatDialogModule } from '@angular/material/dialog';

import { MainComponent } from './main.component';
import { HomeComponent } from './home/home.component';
import { ProjectComponent } from './home/project/project.component';

import { ParticlesModule } from "angular-particle";
import { TeximateModule } from 'ngx-teximate';
import { ParallaxScrollModule } from 'ng2-parallaxscroll';
import { InViewportModule } from 'ng-in-viewport';
import { ProjectModalComponent } from './home/project/project-modal/project-modal.component';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { TranslateModule } from '@ngx-translate/core';

import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faBookmark, faHeart } from "@fortawesome/free-solid-svg-icons";

@NgModule({
  declarations: [MainComponent, HomeComponent, ProjectComponent, ProjectModalComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ParticlesModule,
    TeximateModule,
    ParallaxScrollModule,
    InViewportModule,
    MatDialogModule,
    SwiperModule,
    TranslateModule,
    FontAwesomeModule
  ],
  entryComponents : [ ProjectModalComponent ]
})
export class MainModule {
  constructor(){
    library.add(faGithub, faLinkedin, faBookmark, faHeart)
  }
}
