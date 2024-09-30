import { Routes } from '@angular/router';
import { FirsSectionComponent } from './firs-section/firs-section.component';
import { SecondSectionComponent } from './second-section/second-section.component';
import { ThirdSectionComponent } from './third-section/third-section.component';
import { FourthSectionComponent } from './fourth-section/fourth-section.component';
import { FifthComponentComponent } from './fifth-component/fifth-component.component';
import { SixthComponentComponent } from './sixth-component/sixth-component.component';
import { SeventhComponentComponent } from './seventh-component/seventh-component.component';
import { FeaturesComponent } from './features/features.component';
import { HomePageComponent } from './home-page/home-page.component';
import { NewSectionComponent } from './new-section/new-section.component';
import { PricesComponent } from './prices/prices.component';
import { QrSectionComponent } from './qr-section/qr-section.component';

export const routes: Routes = [
    {path:'', component:HomePageComponent},
    {path: 'firs-section', component:FirsSectionComponent},
    {path:'second-section', component:SecondSectionComponent},
    {path: 'third-section' , component: ThirdSectionComponent},
    {path:'fourth-section' , component: FourthSectionComponent},
    {path:'fifth-component', component:FifthComponentComponent},
    {path:'sixth-component',component:SixthComponentComponent},
    {path:'seventh-component', component:SeventhComponentComponent},
    {path:'features/:id', component:FeaturesComponent},
    {path:'new-section', component: NewSectionComponent},
    {path:"prices.component" , component:PricesComponent},
    {path: 'qr-section.component' , component: QrSectionComponent}
    
];
