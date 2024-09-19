import { Component } from '@angular/core';
import { HeaderComponent } from '../../comman-pages/header/header.component';
import { FooterComponent } from '../../comman-pages/footer/footer.component';
import { NavbarComponent } from '../../comman-pages/navbar/navbar.component';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [HeaderComponent,FooterComponent,NavbarComponent],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css'
})
export class ContactUsComponent {

}
