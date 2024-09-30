import { Component , OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchDataService } from '../fetch-data.service';
import { CommonModule } from '@angular/common';
import { TranslateService ,TranslateModule} from '@ngx-translate/core';

import { LanguageServeService } from '../language-serve.service';
@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule,TranslateModule],
  templateUrl: './features.component.html',
  styleUrl: './features.component.css'
})
export class FeaturesComponent implements OnInit{

  

constructor(
  private route: ActivatedRoute,
  private fetchDataService : FetchDataService,
  public  langService: LanguageServeService
  
){
}
featuresData : any = []


translateLang: any


ngOnInit(): void {
  let productId = this.route.snapshot.paramMap.get('id');
    productId && this.fetchDataService.getFeature(productId).subscribe((result)=> {
    this.featuresData = result;

  })
  this.featuresData.productFeature.forEach((feature: { isCollapsed: boolean; }) => {
    feature.isCollapsed = true; 
  });


}

}


// "qrSectionTitle" : "Scan Your Way to Easy Ordering",
//     "qrSectionParagraph" : "With <span class='logo'>Menus'n More</span>, each table has its own unique QR code for a personalized dining experience. Simply scan the code to view the menu, add items to your basket, choose quantities, customize your order with add-ons or notes, and place your order directly. Whether dining in or choosing delivery, you can track your order's status or even place WhatsApp orders for ultimate convenience. Enjoy effortless dining with <span class='logo'>Menus'n More!</span>",
//     "fifthSectionTitle" : "Effortless Menu Access and Ordering",
//     "fifthSectionParagraph" : "With <span class='logo'>Menus'n More</span>, customers can quickly view a comprehensive product catalog and place orders. The platform provides essential store information, along with a well-organized menu featuring item details and photos. Users can access the menu via a website link or QR code, explore additions and variants, and manage items through a user-friendly control panel. With real-time alerts for pricing issues and customizable QR code designs, ordering has never been simpler!",
//     "sixthSectionTitle" : "Easy Checkout",
//     "sixthSectionParagraph" : "With <span class='logo'>Menus'n More</span>, checkout is fast and simple. Customers can review items, adjust quantities, and add requests before secure payment. After placing an order, real-time updates keep users informed on their order status. Enjoy a hassle-free experience!",
//     "newSectionTitle" : "Simplified Delivery Solutions",
//     "newSectionParagraph" : "<span class='logo'>Menus'n More</span> makes delivery easy. Customers can view store details, explore a well-organized menu with item descriptions and prices, and access it in Arabic or English. The control panel allows for item modifications and category management, while real-time order updates keep users informed. Plus, orders can be conveniently placed via WhatsApp!",
//     "FooterContactUs" : "Contact us",
//     "FooterLocation" : "37 Ismaeel, Seri, st, Alexandria Governorate",
//     "FooterHomeNumber" : "034241467",
//     "FooterMobileNumber" : "+201030459933",
//     "FooterAboutUs" : "The all-in-one solution for scanning, ordering, and tracking with ease. Streamline your business operations and offer more convenience to your customers. Experience the future of dining today!"
// }