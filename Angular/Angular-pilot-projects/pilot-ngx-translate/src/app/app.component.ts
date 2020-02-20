import { Component } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    title = 'pilot-ngx-translate';

    user = { id: 1, name: 'Moe Aler' };

    constructor(public translate: TranslateService) {
        translate.addLangs(['en', 'fr', 'jp']);

        // this language will be used as a fallback when a translation isn't found in the current language
        translate.setDefaultLang('en');

        // the lang to use, if the lang isn't available, it will use the current loader to get them
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');

        translate.onLangChange.subscribe((event: LangChangeEvent) => {
            translate.get(['here', 'level.in']).subscribe(translations => {
                this.title = translations.here + ' - ' + translations['level.in'];
            });
        });
    }
}
