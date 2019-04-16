import {
  Component,
  OnInit,
  AfterViewInit,
  ChangeDetectorRef,
  ViewChild,
  Renderer2
} from '@angular/core';

import {
  bounceInOnEnterAnimation, fadeInLeftAnimation,
  fadeInOnEnterAnimation, fadeInRightAnimation, fadeInUpAnimation, rotateInDownRightOnEnterAnimation
} from 'angular-animations';

import { ParticleParams } from "./particleParams";

import { TextAnimation } from 'ngx-teximate';
import { flipInY} from 'ng-animate';

import { ProjectList } from "../projectList";
import {TranslateService} from "@ngx-translate/core";
import {InViewportConfigOptions} from "ng-in-viewport";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    fadeInOnEnterAnimation({ delay : 0 }),
    bounceInOnEnterAnimation({ delay : 400 }),
    fadeInUpAnimation({ anchor: 'fadeInUp'}),
    fadeInLeftAnimation({ anchor: 'fadeInLeft'}),
    fadeInRightAnimation({anchor : 'fadeInRight'}),
    rotateInDownRightOnEnterAnimation({anchor : 'rotateInDownRightOnEnter'})
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

  myParticleStyle: object = {
    'position': 'absolute',
    'width': '100%',
    'height': '100%',
    'top': 0,
    'left': 0,
    'right': 0,
    'bottom': 0,
  };
  myParticleParams: object = ParticleParams;

  projectList : any = ProjectList;

  inViewportOptions: InViewportConfigOptions;

  sectionList = ['about', 'work', 'skills', 'contact'];
  activeSections = [];

  constructor(public translate: TranslateService,
              private changeDetector: ChangeDetectorRef,
              private renderer : Renderer2
              ) {
  }

  ngOnInit() {
    this.inViewportOptions = {
      threshold: Array(101).fill(null).map((v, k) => k / 100)
    }
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

  setOpacity(element, section: string){
    console.log(element);
    if(this.isSectionActive(section)){
      this.renderer.setStyle(element, 'opacity', 1);
    }
  }
}
