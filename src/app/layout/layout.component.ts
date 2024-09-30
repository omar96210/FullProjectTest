import { Component, CUSTOM_ELEMENTS_SCHEMA , Inject,PLATFORM_ID} from '@angular/core';
import { RouterModule } from '@angular/router';
import {NavBarComponent} from '../nav-bar/nav-bar.component'
import { FooterComponent } from "../footer/footer.component";
import { HomePageComponent } from "../home-page/home-page.component";
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterModule, NavBarComponent, FooterComponent, HomePageComponent,MatButtonModule, MatDividerModule, MatIconModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class LayoutComponent {

constructor( @Inject(PLATFORM_ID) private platformId: Object
){}
 scrollFunction() {
    const myButton = document.getElementById("myBtn");
  
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      if (myButton) {
        myButton.style.display = "block";
      }
    } else {
      if (myButton) {
        myButton.style.display = "none";
      }
    }
  }
  
  topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  
  
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      window.onscroll = () => this.scrollFunction();

    }

  }
  
}
