import { Component,Inject, inject,PLATFORM_ID, HostListener } from '@angular/core';
import {MatDividerModule} from '@angular/material/divider';
import { CommonModule,isPlatformBrowser } from '@angular/common';
import { LanguageServeService } from '../language-serve.service';
import { TranslateService ,TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatDividerModule,CommonModule,TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  translates: TranslateService = inject(TranslateService);

 

  language : any
 translate(){
  this.language = this.langService.getLang();
  this.translates.use(this.language);

 }
  button:boolean = true
  menuFooterEnabled = true
  visible:boolean = false
  getScreenHeight: number =0;
  getScreenWidth: number =0 ;

  constructor(public langService : LanguageServeService,
    @Inject(PLATFORM_ID) private platformId: Object

  ){
 
   
  }

  showFreeTrial: boolean = true;

  close() {
    this.showFreeTrial = false;

    setTimeout(() => {
      this.showFreeTrial = true;
    }, 10000); 
  }
  phoneNumber: number = 201030459933;

  whatsapp() {
    const url = `https://api.whatsapp.com/send?phone=${this.phoneNumber}&text=Start Plans`;
    if (isPlatformBrowser(this.platformId)) {
      window.open(url, '_blank');
    }
  }

  ngOnInit() {
  
  } 

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (isPlatformBrowser(this.platformId)) {
      this.getScreenWidth = window.innerWidth;
      this.getScreenHeight = window.innerHeight;
    }
   
   
  }

  display(){

    if(this.getScreenWidth < 500){
      this.menuFooterEnabled = !this.menuFooterEnabled;
      // this.button = !this.button;
      // this.visible = !this.visible;
    }
   
  }

  
}
