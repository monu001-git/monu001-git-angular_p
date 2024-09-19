import { Component } from '@angular/core';
import { HeaderComponent } from '../../comman-pages/header/header.component';
import { NavbarComponent } from '../../comman-pages/navbar/navbar.component';
import { FooterComponent } from '../../comman-pages/footer/footer.component';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [HeaderComponent,NavbarComponent,FooterComponent],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {

}
