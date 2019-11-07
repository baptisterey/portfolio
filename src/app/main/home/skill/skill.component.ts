import {Component, Input, OnInit} from '@angular/core';

import {SkillData} from '../models/skill-data.model';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  @Input('skillData') skillData: SkillData;

  constructor() { }

  ngOnInit() {
  }

}
