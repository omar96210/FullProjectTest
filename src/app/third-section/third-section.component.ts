import { Component ,OnInit,ElementRef, ViewChild,Inject,PLATFORM_ID} from '@angular/core';
import {FetchDataService} from '../fetch-data.service';
import { Router ,RouterModule} from '@angular/router';
import {FeaturesComponent} from '../features/features.component';
import { LanguageServeService } from '../language-serve.service';
import {TranslateModule} from '@ngx-translate/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule ,isPlatformBrowser} from '@angular/common';
declare var $:any;
@Component({
  selector: 'app-third-section',
  standalone: true,
  imports: [RouterModule,FeaturesComponent,TranslateModule,MatButtonModule, MatDividerModule, MatIconModule,CommonModule],
  templateUrl: './third-section.component.html',
  styleUrl: './third-section.component.css'
})
export class ThirdSectionComponent implements OnInit{
  @ViewChild('Anim') Anim?: ElementRef;
  private observer?: IntersectionObserver; 

//   @HostListener('window:scroll', ['$event']) 
//     doSomething(event : any) {

//       var dim = $('#Anim').is(":visible");
// console.log(dim)
//     }
constructor(
  private fetchDataService : FetchDataService ,
  private router: Router,
  public  langService: LanguageServeService,
  @Inject(PLATFORM_ID) private platformId: Object
){
}
response: any= [];
newResponse: any= []
ngOnInit(): void {
  console.log('langService.getLang',this.langService.getLang())

  this.fetchDataService.getData().subscribe((result) =>{
    this.response = result;
    
  }


)
 this.response.products?.forEach((value:any , index:any) => {
  if(value.sid == 12){
    value.icon ="View.webp";
  }
  else if(value.sid == 13){
    value.icon = "dining.webp";
  } else if(value.sid == 45){
    value.icon = "delivery.webp"
  }
})

this.newResponse = this.response.products

}
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

openDetails(sid : number){
this.router.navigate(['features', sid]);
}

}
