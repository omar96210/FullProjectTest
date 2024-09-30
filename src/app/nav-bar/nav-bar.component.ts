import { Component , inject,OnInit} from '@angular/core';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import { LanguageServeService } from '../language-serve.service';
import { PricesComponent } from '../prices/prices.component';
import {FetchDataService} from '../fetch-data.service';
import { Router, ActivatedRoute ,RouterModule} from '@angular/router';
import {FeaturesComponent} from '../features/features.component';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [RouterModule,TranslateModule,PricesComponent,FeaturesComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit{

  ScrollIntoView(elem: string) {
    document.querySelector(elem)?.scrollIntoView({ behavior: 'smooth'});
  }

  translates: TranslateService = inject(TranslateService);

  
  constructor(
    private fetchDataService : FetchDataService ,
    private router: Router,
    public langService : LanguageServeService
  ){}

  response: any= [];

  ngOnInit(): void {
    this.fetchDataService.getData().subscribe((result) =>{
      this.response = result;
      console.log(this.response)
    }
  
  )
  }
  
  openDetails(sid : number){
  this.router.navigate(['features', sid]);
  }
  
  language: any
  translate(lang: string){
   this.language=  this.langService.getLang() ;
   if(this.language != 'ar' && this.language != 'en'){
    this.langService.setLang('en');
   } else if(this.language == 'en'){
    this.langService.setLang('ar');
   }
   else if(this.language == 'ar'){
    this.langService.setLang('en');

   }
   this.translates.use(this.langService.getLang());

  }


}
