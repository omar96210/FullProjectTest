import { Component ,ElementRef, inject, ViewChild,Inject,PLATFORM_ID} from '@angular/core';
import { LanguageServeService } from '../language-serve.service';
import { TranslateService ,TranslateModule} from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-fourth-section',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './fourth-section.component.html',
  styleUrl: './fourth-section.component.css'
})
export class FourthSectionComponent {
  @ViewChild('Anim') Anim?: ElementRef;
  private observer?: IntersectionObserver; 


  ngAfterViewInit(): void {
    this.listenForTableInView();
  }
  
  
  listenForTableInView(){
    if (isPlatformBrowser(this.platformId)) {
    const animElements = document.querySelectorAll('.Anim');
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
              this.Anim?.nativeElement.classList.add('active');
  
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
