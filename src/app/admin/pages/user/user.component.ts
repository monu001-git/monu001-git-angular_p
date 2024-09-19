import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AdminApiService } from '../../../service/admin-api.service';
import { SwalService } from '../../../comman-services/swal.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit {

  userData: any;


  ngOnInit() {
    this.getUser()
  }

  constructor(private service: AdminApiService, private swalService: SwalService,private _router: Router) {

  }

  getUser() {
    this.service.getUser()
      .subscribe({
        next: (res: any) => {
          if (res.status == 200) {
            this.userData = res.data
            // this.swalService.successAlert(res.message)
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
      tableName: 'users'
    };

    this.service.toggleStatus(payload)
      .subscribe({
        next: (res: any) => {
          if (res.status == 200) {
            this.getUser()
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


  updateUserData(id: any) {
    const payload = {
      id: id
    }
    this.service.updateUserData(payload).subscribe({
      next: (res: any) => {
        if (res.status == 200) {
          console.log('res',res.data)

          this._router.navigateByUrl('add-user');

        }
      },
      error: (error: any) => {
        if (error) {
          this.swalService.errorAlert(error.error.message)

        }
      },
    })
  }

  updateUser(id: any) {
    const payload = {
      id: id
    }
    this.service.updateUser(payload).subscribe({
      next: (res: any) => {
        if (res.status == 200) {
          // this.getUser()

         console.log(res)


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

  deleteUser(id: any) {
    const payload = {
      id: id,
    };
    this.service.deleteUser(payload).subscribe({
      next: (res: any) => {
        if (res.status == 200) {
          this.getUser()
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
