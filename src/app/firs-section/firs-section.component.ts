import { Component, Inject, inject,PLATFORM_ID } from '@angular/core';
import { LanguageServeService } from '../language-serve.service';
import { TranslateService,TranslateModule } from '@ngx-translate/core';
import { CommonModule,isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-firs-section',
  standalone: true,
  imports: [TranslateModule,CommonModule],
  templateUrl: './firs-section.component.html',
  styleUrl: './firs-section.component.css'
})
export class FirsSectionComponent {
  translates: TranslateService = inject(TranslateService);

  constructor(public langService : LanguageServeService,
    @Inject(PLATFORM_ID) private platformId: Object
  ){
  
  }

  language : any
 translate(){
  this.language = this.langService.getLang();
  this.translates.use(this.language);

 }

 open(){
  if (isPlatformBrowser(this.platformId)) {
    window.open('https://digital.menus-and-more.com/plan/2' , '_blank')
  }
 }


}
