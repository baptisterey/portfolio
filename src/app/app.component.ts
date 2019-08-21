import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {

  constructor(private translateService: TranslateService,
              private titleService : Title) {

  }

  ngOnInit(){
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');

    this.translateService.get('app-title').subscribe(result =>{
      this.titleService.setTitle(result);
    });
  }
}
