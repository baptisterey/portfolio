import {
  AfterViewChecked, AfterViewInit, ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ElementRef,
  Inject,
  OnInit,
  Renderer2,
  ViewChild,
  ViewEncapsulation
} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {ProjectData} from "../../models/project-data.model";
import {SwiperComponent, SwiperConfigInterface} from "ngx-swiper-wrapper";

import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectModalComponent implements OnInit, AfterViewInit {

  @ViewChild('modalTitle') modalTitle: ElementRef;
  @ViewChild('swiperComponent') swiperComponent: SwiperComponent;

  Array = Array;
  Math = Math;

  projectData: ProjectData;
  swiperIndex: number;


  public swiperConfig: SwiperConfigInterface = {
    lazy: true,
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: false,
    pagination: true,
    loop: true
  };


  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              private renderer: Renderer2,
              private changeDetectorRef: ChangeDetectorRef,
              public domSanitizer: DomSanitizer) { }

  ngOnInit() {
    this.projectData = this.data.projectData;
  }


  ngAfterViewInit(): void {
    this.renderer.addClass(this.modalTitle.nativeElement, 'active');
    this.swiperComponent.index = 0;

    this.changeDetectorRef.detectChanges();
  }
}
