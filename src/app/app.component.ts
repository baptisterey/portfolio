import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Meta, Title} from '@angular/platform-browser';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {

  constructor(private translateService: TranslateService,
              private titleService: Title,
              private route: ActivatedRoute,
              private meta: Meta) {

  }

  ngOnInit() {
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');

    this.route.queryParams.subscribe(params => {
      const lang = params['lang'];
      if (lang === 'fr' || lang === 'FR') {
        this.translateService.use('fr');
      }
    });

    this.meta.addTag({name: 'description', content: 'Personal portfolio website made with Angular 2+.'});

    this.translateService.get('app-title').subscribe(result => {
      this.titleService.setTitle(result);
    });
  }
}
