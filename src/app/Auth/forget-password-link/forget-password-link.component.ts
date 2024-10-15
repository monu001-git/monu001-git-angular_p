import { Component, OnInit } from '@angular/core';
import { AdminApiService } from '../../service/admin-api.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SwalService } from '../../comman-services/swal.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-forget-password-link',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './forget-password-link.component.html',
  styleUrl: './forget-password-link.component.css'
})
export class ForgetPasswordLinkComponent  {

  submitForm !: FormGroup;
  paramsdata: any;
  token: string | null = null;
  hide = true;
  hides = true;

  constructor(
    private services: AdminApiService,
    private _fb: FormBuilder,
    private SwalService: SwalService,
    private route: ActivatedRoute,
    private router:Router

  ) {
    this.submitForm = this.getAllformControlls();
    this.token = this.route.snapshot.paramMap.get('token');
  }

  togglepassword(): void {
    this.hide = !this.hide;
  }

  toggleCpassword(): void {
    this.hides = !this.hides;
  }



  getAllformControlls() {
    return this._fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]],
      cPassword: ['', [Validators.required]],
    })
  }


  onforgetPasswordLink() {
    if (this.submitForm.valid) {
      const payload = {
        email: this.submitForm.value.email,
        password: this.submitForm.value.password,
        token: this.token
      }
      this.services
        .onforgetPasswordLink(payload)
        .subscribe({
          next: (res: any) => {
            if (res.status == 200) {
              this.router.navigateByUrl('/login');
              this.SwalService.successAlert('forget password change  Succesfully!!!!!')
            }
          },
          error: (error: any) => {
            if (error) {
              this.SwalService.errorAlert(error.error.message)
            }
          },
        });

    } else {
      this.submitForm.markAllAsTouched();
    }

  }


}
