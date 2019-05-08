import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
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
  rotateInDownRightOnEnterAnimation
} from 'angular-animations';

import {ParticleParams, ParticleStyle} from "./particleParams";

import {TextAnimation} from 'ngx-teximate';
import {flipInY} from 'ng-animate';

import {ProjectList} from "../projectList";
import {TranslateService} from "@ngx-translate/core";
import {InViewportConfigOptions} from "ng-in-viewport";
import {ProjectData} from "./models/project-data.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    fadeInOnEnterAnimation({ delay : 0 }),
    fadeInAnimation({anchor : 'fadeIn'}),
    bounceInOnEnterAnimation({ delay : 400 }),
    fadeInUpAnimation({ anchor: 'fadeInUp'}),
    fadeInLeftAnimation({ anchor: 'fadeInLeft'}),
    fadeInRightAnimation({anchor : 'fadeInRight'}),
    rotateInDownRightOnEnterAnimation({anchor : 'rotateInDownRightOnEnter'}),
  ]
})
export class HomeComponent implements OnInit, AfterViewInit {

  @ViewChild('mainDiv') mainDiv;

  showHeaderText : boolean = false;

  enterTextAnimation: TextAnimation = {
    animation: flipInY,
    delay: 50,
    type: 'letter'
  };

  headerAnimationDelay : number = 0;
  contentAnimationDelay : number = 1150;


  myParticleStyle: object = ParticleStyle;
  myParticleParams: object = ParticleParams;

  projectList : Array<ProjectData> = ProjectList;

  inViewportOptions: InViewportConfigOptions = {
    threshold: Array(101).fill(null).map((v, k) => k / 100)
  };

  sectionList = ['about', 'work', 'skills', 'contact'];
  activeSections = [];

  constructor(public translate: TranslateService,
              private changeDetector: ChangeDetectorRef,
              private renderer : Renderer2
              ) {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {

    const _this = this;
    setTimeout(function(){
      _this.showHeaderText = true;
    },1000);

    this.changeDetector.detectChanges();
  }

  public onIntersection({ target, visible }: { target: Element; visible: boolean }, divId : string): void {
    if(visible && this.activeSections.indexOf(divId) === -1){
      let position = this.sectionList.indexOf(divId);
      for(let i = 0; i <= position;  i++){
        this.activeSections.push(this.sectionList[i]);
      }
    }
  }

  isSectionActive(section) : boolean {
    return this.activeSections.indexOf(section) !== -1;
  }

  getSubHeader() : string {
    return this.translate.instant('sub-header')
  }

  setAfterAnimationStyles(element, section: string){
    if(this.isSectionActive(section)){
      this.renderer.setStyle(element, 'opacity', 1);
      this.renderer.addClass(element, 'active');
    }
  }
}
