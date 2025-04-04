import { Component } from '@angular/core';
import { HeaderComponent } from "./ui-components/header/header.component";
import { FooterComponent } from "./ui-components/footer/footer.component";
import { SidebarComponent } from "./ui-components/sidebar/sidebar.component";
import { ContentComponent } from "./ui-components/content/content.component";

@Component({
  selector: 'app-dashboard',
  imports: [HeaderComponent, FooterComponent, SidebarComponent, ContentComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

}
