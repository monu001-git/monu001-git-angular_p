import { Component } from '@angular/core';
import { FooterComponent } from "../../comman-pages/footer/footer.component";
import { HeaderComponent } from '../../comman-pages/header/header.component';
import { NavbarComponent } from '../../comman-pages/navbar/navbar.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [FooterComponent,HeaderComponent,NavbarComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css'
})
export class AboutUsComponent {

}
