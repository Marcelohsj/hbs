import { Component, effect } from '@angular/core';
import { SharedDataService } from '../../../service/shared-data.service';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  featureActived:any = "";
  
  constructor(private sharedData : SharedDataService){
    effect(() => {
      this.featureActived = this.sharedData.linkActive();
    });
  }
  


     
  
  
}
