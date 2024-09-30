import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
@Injectable({
  providedIn: 'root'
})
export class LanguageServeService {

   lang : string ="en";

   
  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,

  ) {
    if (isPlatformBrowser(this.platformId)) {
      this.lang =  localStorage.getItem('languages') ||'[]'; // get the data at lunch 
    }
  }

  direction = 'ltr' 
  
  setLang(data: any) {
    this.lang = data;
    if(this.lang == 'en'){
      this.direction = 'ltr'
    } else if(this.lang == 'ar'){
      this.direction = 'rtl'
    }
    this.synchronizeLang(this.lang);
    
  }
  getLang() {
    return this.lang;

  }

  getDirection() {
    return this.direction;

  }

  synchronizeLang(data: any) {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('languages', data); // sync the data
    }
  }
  
}
