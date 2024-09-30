import { Component, inject } from '@angular/core';
import { LanguageServeService } from '../language-serve.service';
import { TranslateService,TranslateModule } from '@ngx-translate/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-seventh-component',
  standalone: true,
  imports: [TranslateModule,CommonModule],
  templateUrl: './seventh-component.component.html',
  styleUrl: './seventh-component.component.css'
})
export class SeventhComponentComponent {
  translates: TranslateService = inject(TranslateService);

  constructor(public langService : LanguageServeService){
  
  }

  language : any
 translate(){
  this.language = this.langService.getLang();
  this.translates.use(this.language);

 }
}
