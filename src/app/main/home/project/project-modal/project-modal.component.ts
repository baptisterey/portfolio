import {Component, Inject, OnInit, ViewEncapsulation} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material';
import {ProjectData} from "../../models/project-data.model";

@Component({
  selector: 'app-project-modal',
  templateUrl: './project-modal.component.html',
  styleUrls: ['./project-modal.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectModalComponent implements OnInit {

  Array = Array;

  projectData: ProjectData;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.projectData = this.data.projectData;
  }

}
