import {Component, Input, OnInit} from '@angular/core';
import { MatDialog } from '@angular/material';
import {fadeInOnEnterAnimation, fadeInUpOnEnterAnimation, fadeOutOnLeaveAnimation} from "angular-animations";
import {ProjectModalComponent} from "./project-modal/project-modal.component";
import {ProjectData} from "../models/project-data.model";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss'],
  animations: [
    fadeInOnEnterAnimation({duration : 200}),
    fadeOutOnLeaveAnimation({duration : 200}),
    fadeInUpOnEnterAnimation({duration : 400})
  ]
})
export class ProjectComponent implements OnInit {

  @Input('projectData') projectData : ProjectData;
  showDetails = false;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  openModal(){
    const dialogRef = this.dialog.open(ProjectModalComponent, {
      width: '1050px',
      minHeight : '550px',
      maxHeight : '80vh',
      data: {
        projectData: this.projectData
      }
    });
  }

}
