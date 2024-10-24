import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AdminApiService } from '../../service/admin-api.service';
import { SwalService } from '../../comman-services/swal.service';

@Component({
  selector: 'app-issue-mail',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './issue-mail.component.html',
  styleUrl: './issue-mail.component.css'
})
export class IssueMailComponent {
  mail: any;


  ngOnInit() {
    this.getMail()
  }

  constructor(
    private service: AdminApiService,
    private swalService: SwalService,
    private _router: Router) {

  }

  getMail() {
    this.service.getMail()
      .subscribe({
        next: (res: any) => {
          if (res.status == 200) {
            this.mail = res.data
           
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


  updateUserData(id:any){

  }


  deleteUser(id:any){

  }
}
