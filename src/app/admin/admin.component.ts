import { Component } from '@angular/core';
// import { HeaderComponent } from './common-pages/header/header.component';
// import { FooterComponent } from './common-pages/footer/footer.component';
import { HeaderComponent } from '../front/comman-pages/header/header.component';
import { FooterComponent } from '../front/comman-pages/footer/footer.component';
import { Router, RouterModule } from '@angular/router';
import { NavbarComponent } from "../front/comman-pages/navbar/navbar.component";
import { SwalService } from '../comman-services/swal.service';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, RouterModule, NavbarComponent, RouterModule],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.css'
})
export class AdminComponent {

  constructor(private _router: Router,private swalService: SwalService) {

  }

  logout() {
    this.swalService.successAlert('logout Successfully!!!!')
    localStorage.clear();
    sessionStorage.clear();
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    this._router.navigateByUrl('/');
  }


}
