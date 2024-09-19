import { Component } from '@angular/core';
import { HeaderComponent } from "../front/comman-pages/header/header.component";
import { NavbarComponent } from "../front/comman-pages/navbar/navbar.component";
import { FooterComponent } from "../front/comman-pages/footer/footer.component";

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [HeaderComponent, NavbarComponent, FooterComponent],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {

}
