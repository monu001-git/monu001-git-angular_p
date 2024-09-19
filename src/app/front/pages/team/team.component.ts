import { Component } from '@angular/core';
import { HeaderComponent } from '../../comman-pages/header/header.component';
import { NavbarComponent } from '../../comman-pages/navbar/navbar.component';
import { FooterComponent } from '../../comman-pages/footer/footer.component';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [HeaderComponent,NavbarComponent,FooterComponent],
  templateUrl: './team.component.html',
  styleUrl: './team.component.css'
})
export class TeamComponent {

}
