import { Component } from '@angular/core';
import { HeaderComponent } from '../../comman-pages/header/header.component';
import { NavbarComponent } from '../../comman-pages/navbar/navbar.component';
import { FooterComponent } from '../../comman-pages/footer/footer.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [HeaderComponent,NavbarComponent,FooterComponent],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {

}
