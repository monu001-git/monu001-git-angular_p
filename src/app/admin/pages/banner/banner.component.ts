import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AdminApiService } from '../../../service/admin-api.service';
import { SwalService } from '../../../comman-services/swal.service';

@Component({
  selector: 'app-banner',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './banner.component.html',
  styleUrl: './banner.component.css'
})
export class BannerComponent implements OnInit {

  banner:any;

  constructor(
    private service: AdminApiService,
    private swalService: SwalService,
    private _router: Router,
  ) {

  }

  ngOnInit(){
    this.getBanner()
  }


  toggleStatus(status: any, id: any) {
    const payload = {
      userId: id,
      status: status,
      tableName: 'banners'
    };

    this.service.toggleStatus(payload)
      .subscribe({
        next: (res: any) => {
          if (res.status == 200) {
            this.getBanner()
            this.swalService.successAlert('Status Change Successfully!!!!!')
          }
        },
        error: (error: any) => {
          if (error) {
            this.swalService.errorAlert(error.error.message)
            localStorage.clear();
            sessionStorage.clear();
            localStorage.removeItem('token');
            sessionStorage.removeItem('token');
            this._router.navigateByUrl('/');
          }
        },
      });
  }


  getBanner() {
    this.service.getBanner()
      .subscribe({
        next: (res: any) => {
          if (res.status == 200) {
            this.banner = res.data
           // this.swalService.successAlert(res.message)
          }
        },
        error: (error: any) => {
          if (error) {
            this.swalService.errorAlert(error.error.message)
            localStorage.clear();
            sessionStorage.clear();
            localStorage.removeItem('token');
            sessionStorage.removeItem('token');
            this._router.navigateByUrl('/');
          }
        },
      });
  }

  updateBanner(id:any){

  }


  deleteBanner(id: any) {
    const payload = {
      id: id,
    };
    this.service.deleteBanner(payload).subscribe({
      next: (res: any) => {
        if (res.status == 200) {
          this.getBanner()
          this.swalService.successAlert(res.message)
        }
      },
      error: (error: any) => {
        if (error) {
          this.swalService.errorAlert(error.error.message)
          localStorage.clear();
          sessionStorage.clear();
          localStorage.removeItem('token');
          sessionStorage.removeItem('token');
          this._router.navigateByUrl('/');
        }
      },
    })

  }


}
