import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { FrontApiService } from '../../../service/front-api.service';
import { SwalService } from '../../../comman-services/swal.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit {

  token: string | null;
  menu: any;

  constructor(
    private service: FrontApiService,
    private swalService: SwalService,
    private _router: Router,
  ) {
    this.token = sessionStorage.getItem('token')

  }


  ngOnInit() {
    this.headerMenu()
  }

  headerMenu() {
    this.service.headerMenu().subscribe({
      next: (res: any) => {
        if (res && res.status === 200) {
          this.menu = res.data;
          console.log('menu',this.menu)
        } else {
          console.error('Unexpected response format:', res);
        }
      },
      error: (error: any) => {
        if (error && error.error && error.error.message) {
          this.swalService.errorAlert(error.error.message);
        } else {
          console.error('Unexpected error format:', error);
        }
      },
    });
  }




}
