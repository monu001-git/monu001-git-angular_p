import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { SwalService } from '../../../comman-services/swal.service';
import { FrontApiService } from '../../../service/front-api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  footerMenuFirst: any;
  footerMenuSecond: any;

  constructor(
    private service: FrontApiService,
    private swalService: SwalService,
    private _router: Router,
  ) {
  }
  ngOnInit() {
    this.footerMenu()
  }

  footerMenu() {
    this.service.footerMenu().subscribe({
      next: (res: any) => {
        if (res && res.status === 200) {

          this.footerMenuFirst = res.data.slice(0, 6); 
          this.footerMenuSecond = res.data.slice(6, 12); 
    
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
