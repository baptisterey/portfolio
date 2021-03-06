import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {FlexLayoutModule} from '@angular/flex-layout';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

import { MatIconModule } from '@angular/material/icon';

import {MainComponent} from './main.component';
import {HomeComponent} from './home/home.component';
import {ProjectComponent} from './home/project/project.component';

import {ParticlesModule} from 'angular-particle';
import {TeximateModule} from 'ngx-teximate';
import {ParallaxScrollModule} from 'ng2-parallaxscroll';
import {ProjectModalComponent} from './home/project/project-modal/project-modal.component';
import {TranslateModule} from '@ngx-translate/core';

import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faGithub, faLinkedin, faItchIo} from '@fortawesome/free-brands-svg-icons';
import {
  faBookmark,
  faHeart,
  faTimes,
  faChevronRight,
  faChevronLeft,
  faAngleDoubleDown,
  faDatabase,
  faCogs,
  faCodeBranch,
  faCode,
  faProjectDiagram,
  faCommentAlt,
  faDesktop,
  faFileCode,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons';
import {DeviceDetectorModule} from 'ngx-device-detector';
import {IntersectionObserverDirective} from '../directives/intersection-observer.directive';
import {MatCardModule} from '@angular/material';
import {SkillComponent} from './home/skill/skill.component';
import {MatCarouselModule} from '@ngmodule/material-carousel';

@NgModule({
  declarations: [MainComponent, HomeComponent, ProjectComponent, ProjectModalComponent, IntersectionObserverDirective, SkillComponent],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    ParticlesModule,
    TeximateModule,
    ParallaxScrollModule,
    MatDialogModule,
    TranslateModule,
    FontAwesomeModule,
    MatButtonModule,
    DeviceDetectorModule.forRoot(),
    MatCardModule,
    MatCarouselModule,
    MatIconModule

  ],
  entryComponents: [ProjectModalComponent]
})
export class MainModule {
  constructor() {
    library.add(faGithub,
      faLinkedin,
      faBookmark,
      faHeart, faTimes,
      faChevronRight,
      faChevronLeft,
      faAngleDoubleDown,
      faItchIo,
      faDatabase,
      faCogs,
      faCodeBranch,
      faCode,
      faProjectDiagram,
      faCommentAlt,
      faDesktop,
      faFileCode,
      faEnvelope);
  }
}
