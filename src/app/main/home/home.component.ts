import {
  AfterViewInit,
  ChangeDetectorRef,
  Component, ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';

import {
  bounceInOnEnterAnimation,
  fadeInAnimation,
  fadeInLeftAnimation,
  fadeInOnEnterAnimation,
  fadeInRightAnimation,
  fadeInUpAnimation,
  rotateInDownRightOnEnterAnimation, tadaAnimation, tadaOnEnterAnimation
} from 'angular-animations';

import {ParticleParams, ParticleStyle} from './particleParams';

import {TextAnimation} from 'ngx-teximate';
import {flipIn, flipInY, tada} from 'ng-animate';

import {ProjectList} from '../../../assets/data/projectList';
import {OldProjectList} from '../../../assets/data/projectList';

import {ProjectList2} from '../../../assets/data/projectList';
import {OldProjectList2} from '../../../assets/data/projectList';

import {SkillList} from '../../../assets/data/skillList';

import {TranslateService} from '@ngx-translate/core';
import {ProjectData} from './models/project-data.model';
import {DeviceDetectorService} from 'ngx-device-detector';
import {SkillData} from './models/skill-data.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  animations: [
    fadeInOnEnterAnimation({delay: 0}),
    fadeInAnimation({anchor: 'fadeIn'}),
    fadeInAnimation({anchor: 'fadeInShowOldProject'}),
    bounceInOnEnterAnimation({delay: 400}),
    fadeInUpAnimation({anchor: 'fadeInUp'}),
    fadeInLeftAnimation({anchor: 'fadeInLeft'}),
    fadeInRightAnimation({anchor: 'fadeInRight'}),
    rotateInDownRightOnEnterAnimation({anchor: 'rotateInDownRightOnEnter'}),
    tadaOnEnterAnimation({}),
    tadaAnimation({direction: "=>"})
  ]
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('mainDiv') mainDiv;
  @ViewChild('headerDiv') headerDiv: ElementRef;

  showHeaderText: boolean = false;

  enterTextAnimation: TextAnimation = {
    animation: flipInY,
    delay: 50,
    type: 'letter'
  };

  headerAnimationDelay: number = 0;
  subHeaderAnimationDelay: number = 550;
  headerIconsAnimationDelay: number = 1600;

  sectionHeaderAnimationSpeed: number = 650;
  contentAnimationDelay: number = 700;

  myParticleStyle: object = ParticleStyle;
  myParticleParams: object = ParticleParams;

  projectList: Array<ProjectData> = ProjectList;
  oldProjectList: Array<ProjectData> = OldProjectList;

  projectList2: Array<ProjectData> = ProjectList2;
  oldProjectList2: Array<ProjectData> = OldProjectList2;

  skillList: Array<SkillData> = SkillList;

  sectionList = ['about', 'skills', 'work', 'work2' , 'contact'];
  activeSections = [];

  showOldProjects = false;
  showOldProjects2 = false;

  animateStateHeadProfile = false;

  constructor(public translate: TranslateService,
              private changeDetector: ChangeDetectorRef,
              private renderer: Renderer2,
              public deviceService: DeviceDetectorService
  ) {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {

    const _this = this;
    setTimeout(function() {
      _this.showHeaderText = true;
      _this.changeDetector.detectChanges();
    }, this.subHeaderAnimationDelay);


    if (this.deviceService.isMobile()) {
      this.renderer.setStyle(this.headerDiv.nativeElement, 'height', '600px');
    }
  }

  public onIntersection(divId: string): void {
    if (this.activeSections.indexOf(divId) === -1) {
      const position = this.sectionList.indexOf(divId);
      for (let i = 0; i <= position; i++) {
        this.activeSections.push(this.sectionList[i]);
      }
    }
  }

  isSectionActive(section): boolean {
    return this.activeSections.indexOf(section) !== -1;
  }

  getSubHeader(): string {
    return this.translate.instant('sub-header');
  }

  setAfterAnimationStyles(element, section: string) {
    if (this.isSectionActive(section)) {
      this.renderer.setStyle(element, 'opacity', 1);
      this.renderer.addClass(element, 'active');
    }
  }

  toggleLang() {
    this.translate.use('fr');
  }

  printEvent(event) {
    console.log(event);
  }
}
