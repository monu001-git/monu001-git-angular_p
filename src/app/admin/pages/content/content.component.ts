import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AdminApiService } from '../../../service/admin-api.service';
import { SwalService } from '../../../comman-services/swal.service';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})
export class ContentComponent implements OnInit {

  isActive: boolean = false;
  userData: any;

  ngOnInit() {
    this.getContent()
  }

  constructor(
    private service: AdminApiService,
    private swalService: SwalService,
    private _router: Router) {

  }


  getContent() {
    this.service.getContent()
      .subscribe({
        next: (res: any) => {
          if (res.status == 200) {
            this.userData = res.data
          }
        },
        error: (error: any) => {
          if (error) {
            this.swalService.errorAlert(error.error.message)
          }
        },
      });
  }


  toggleStatus(status: any, id: any) {
    const payload = {
      userId: id,
      status: status,
      tableName: 'contents'
    };

    this.service.toggleStatus(payload)
      .subscribe({
        next: (res: any) => {
          if (res.status == 200) {
            this.getContent()
            this.swalService.successAlert('Status Change Successfully!!!!!')
          }
        },
        error: (error: any) => {
          if (error) {
            this.swalService.errorAlert(error.error.message)
          }
        },
      });
  }


  updateContentData(data: any) {

  }


  deleteContent(id: any) {
    const payload = {
      id: id,
    };
    this.service.deleteContent(payload).subscribe({
      next: (res: any) => {
        if (res.status == 200) {
          this.getContent()
          this.swalService.successAlert(res.message)
        }
      },
      error: (error: any) => {
        if (error) {
          this.swalService.errorAlert(error.error.message)

        }
      },
    })

  }

}


