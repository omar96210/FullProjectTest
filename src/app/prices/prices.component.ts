import { Component, inject, OnInit , Inject,PLATFORM_ID} from '@angular/core';
import {PricesService } from '../prices.service';
import { HttpClient } from '@angular/common/http';
import {TranslateModule, TranslateService} from '@ngx-translate/core';
import { LanguageServeService } from '../language-serve.service';
import { CommonModule,isPlatformBrowser } from '@angular/common';


@Component({
  selector: 'app-prices',
  standalone: true,
  imports: [TranslateModule,CommonModule],
  templateUrl: './prices.component.html',
  styleUrl: './prices.component.css'
})
export class PricesComponent implements OnInit {



  translates: TranslateService = inject(TranslateService);
  
  language : any

  translate(){
    this.language = this.langService.getLang();
    this.translates.use(this.language);
  
   }

  res: any[] = [];
  constructor(
    private priceService : PricesService, 
    private http: HttpClient,
    public langService : LanguageServeService,
    @Inject(PLATFORM_ID) private platformId: Object
  ){}
  phoneNumber: number = 201153161888;
  
  ngOnInit(): void {
    this.priceService.getData().subscribe((result) =>{
      this.res = result;
      console.log(result)
    }
  )
  }
 
 

  whatsapp(item:any) {
    let msg = `Check out our pricing plan: ${item.nameEn} \n Price: ${item.priceEn}}`;
    const url = `https://api.whatsapp.com/send?phone=${this.phoneNumber}&text=${encodeURI(msg)}`;
    if (isPlatformBrowser(this.platformId)) {
      window.open(url, '_blank');

    }
  }
  }




// https://saudi-sas.com:8446/globisoft/api/pricing/plans