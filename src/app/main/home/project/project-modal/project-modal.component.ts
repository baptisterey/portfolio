import {
  AfterViewChecked,
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
import {SwiperConfigInterface} from "ngx-swiper-wrapper";

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectModalComponent implements OnInit, AfterViewChecked {

  @ViewChild('modalTitle') modalTitle: ElementRef;

  Array = Array;

  projectData: ProjectData;
  swiperIndex: number;


  public swiperConfig: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
  };


  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private renderer: Renderer2) { }

  ngOnInit() {
    this.projectData = this.data.projectData;
  }


  ngAfterViewChecked(): void {
    this.renderer.addClass(this.modalTitle.nativeElement, 'active');
  }
}
