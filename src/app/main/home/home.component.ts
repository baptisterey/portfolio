import {Component, OnInit, AfterViewInit } from '@angular/core';

import {
  bounceInOnEnterAnimation, fadeInLeftOnEnterAnimation,
  fadeInOnEnterAnimation, fadeInRightOnEnterAnimation,
  fadeInUpOnEnterAnimation, rotateInDownRightOnEnterAnimation
} from 'angular-animations';

import { ParticleParams } from "./particleParams";

import { TextAnimation } from 'ngx-teximate';
import { flipInY} from 'ng-animate';

import { ProjectList } from "../projectList";
import {TranslateService} from "@ngx-translate/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    fadeInOnEnterAnimation({ delay : 0 }),
    bounceInOnEnterAnimation({ delay : 400 }),
    fadeInUpOnEnterAnimation({ anchor: 'fadeInUpOnEnter'}),
    fadeInLeftOnEnterAnimation({ anchor: 'fadeInLeftOnEnter'}),
    fadeInRightOnEnterAnimation({anchor : 'fadeInRightOnEnter'}),
    rotateInDownRightOnEnterAnimation({anchor : 'rotateInDownRightOnEnter'})
  ]
})
export class HomeComponent implements OnInit, AfterViewInit {

  showHeaderText : boolean = false;
  enterAnimation: TextAnimation = {
    animation: flipInY,
    delay: 50,
    type: 'letter'
  };

  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  projectList : any;

  sectionList = ['about', 'work', 'skills', 'contact'];
  activeSections = [];

  constructor(public translate: TranslateService) {
  }

  ngOnInit() {

    this.projectList = ProjectList;

    this.myStyle = {
      'position': 'absolute',
      'width': '100%',
      'height': '100%',
      'top': 0,
      'left': 0,
      'right': 0,
      'bottom': 0,
    };
    this.myParams = ParticleParams;
  };

  ngAfterViewInit() {
    const _this = this;


    setTimeout(function(){
      _this.showHeaderText = true;
    },1000);


  }

  public onIntersection({ target, visible }: { target: Element; visible: boolean }, divId : string): void {
    if(visible && this.activeSections.indexOf(divId) === -1){
      let position = this.sectionList.indexOf(divId);
      for(let i = 0; i <= position;  i++){
        this.activeSections.push(divId);
      }
    }
  }

  isSectionActive(section) : boolean {
    return this.activeSections.indexOf(section) !== -1;
  }

  getSubHeader() : string {
    return this.translate.instant('sub-header')
  }
}
