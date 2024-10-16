import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AdminApiService } from '../../../service/admin-api.service';
import { SwalService } from '../../../comman-services/swal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-org',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './org.component.html',
  styleUrl: './org.component.css'
})
export class OrgComponent {


  org: any;

  constructor(
    private service: AdminApiService,
    private swalService: SwalService,
    private _router: Router,
  ) {

  }

  ngOnInit() {
    this.getOrg()
  }


  getOrg() {
    this.service.getOrg()
      .subscribe({
        next: (res: any) => {
          if (res.status == 200) {
            this.org = res.data
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

  updateContentData(id:any){

  }


  deleteContent(id:any){

  }


}
