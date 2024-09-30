import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import {FirsSectionComponent} from '../firs-section/firs-section.component';
import { SecondSectionComponent } from "../second-section/second-section.component";
import {  ThirdSectionComponent} from "../third-section/third-section.component";
import { FourthSectionComponent } from "../fourth-section/fourth-section.component";
import { FifthComponentComponent } from "../fifth-component/fifth-component.component";
import { SixthComponentComponent } from "../sixth-component/sixth-component.component";
import { SeventhComponentComponent } from "../seventh-component/seventh-component.component";
import { FooterComponent } from "../footer/footer.component";
import { NewSectionComponent } from "../new-section/new-section.component";
import { QrSectionComponent } from "../qr-section/qr-section.component";
@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterModule, FirsSectionComponent, SecondSectionComponent, ThirdSectionComponent, FourthSectionComponent, FifthComponentComponent, SixthComponentComponent, SeventhComponentComponent, FooterComponent, NewSectionComponent, QrSectionComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
