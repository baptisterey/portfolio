import {Component, ElementRef, OnInit, ViewChild, AfterViewInit} from '@angular/core';

import { zoomInOnEnterAnimation, bounceInOnEnterAnimation,  fadeInOnEnterAnimation, fadeOutOnLeaveAnimation } from 'angular-animations';

import { ParticleParams } from "./particleParams";

import { Teximate, TextAnimation } from 'ngx-teximate';
import {fadeIn, flipInY} from 'ng-animate';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [
    fadeInOnEnterAnimation({delay : 3200}),
    bounceInOnEnterAnimation({delay : 400}),
    zoomInOnEnterAnimation()
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

  constructor() {

  }

  ngOnInit() {

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
}
