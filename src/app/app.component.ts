import { Component, CUSTOM_ELEMENTS_SCHEMA ,inject,OnInit} from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router'; 
import { LayoutComponent } from "./layout/layout.component";
import {LanguageServeService} from "./language-serve.service";
import { CommonModule } from '@angular/common';
import {TranslateModule, TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule, LayoutComponent,CommonModule,TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppComponent implements OnInit {
  title = 'angular-landing-page';

  constructor(
    public languageServeService : LanguageServeService
  ){}

  translates: TranslateService = inject(TranslateService);

  language: any

  ngOnInit(): void {
    this.language=  this.languageServeService.getLang() ;
    if(this.language != 'ar' && this.language != 'en'){
     this.languageServeService.setLang('en');
    } 
    this.translates.use(this.languageServeService.getLang());
  }
 

 }



