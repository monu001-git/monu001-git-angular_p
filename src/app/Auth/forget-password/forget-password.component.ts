import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SwalService } from '../../comman-services/swal.service';
import { AdminApiService } from '../../service/admin-api.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.css'
})
export class ForgetPasswordComponent {

  submitForm !: FormGroup;



  constructor(private services: AdminApiService, private _fb: FormBuilder,private _router: Router ,private SwalService: SwalService) {
    this.submitForm = this.getAllformControlls();
  }


  getAllformControlls() {
    return this._fb.group({
      email: ['', [Validators.required,Validators.email]],
    })
  }


  onforgetPassword() {
    if (this.submitForm.valid) {
      const payload = {
        email: this.submitForm.value.email
      }
      this.services
        .onForgetPassword(payload)
        .subscribe({
          next: (res: any) => {
            if (res.status == 200) {
              this.SwalService.successAlert('forget password change  Succesfully!!!!!')
            }
          },
          error: (error: any) => {
            if (error) {
              this.SwalService.errorAlert(error.error.message)
              localStorage.clear();
              sessionStorage.clear();
              localStorage.removeItem('token');
              sessionStorage.removeItem('token');
              this._router.navigateByUrl('/');
            }
          },
        });



    } else {
      this.submitForm.markAllAsTouched();
    }

  }


}
