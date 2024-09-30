import { Component ,ElementRef, ViewChild, inject,Inject,PLATFORM_ID} from '@angular/core';
import { LanguageServeService } from '../language-serve.service';
import { TranslateService ,TranslateModule} from '@ngx-translate/core';
import {isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'app-qr-section',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './qr-section.component.html',
  styleUrl: './qr-section.component.css'
})
export class QrSectionComponent  {


  @ViewChild('textAnimate') textAnimate?: ElementRef;
  private observer?: IntersectionObserver; 


  ngAfterViewInit(): void {
    this.listenForTableInView();
  }
  
  
  listenForTableInView(){    
    if (isPlatformBrowser(this.platformId)) {
    const animElements = document.querySelectorAll('.textAnimate');
    animElements.forEach((element) => {
      const observer = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          element.classList.add('active');
        }
      }, { threshold: [0] });
      observer.observe(element);
    });
  }
  }
  
  onIntersection(entries: any){
    if(entries[0].isIntersecting === true){
              this.textAnimate?.nativeElement.classList.add('active');
  
    }
  
  }
  

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
  
}
