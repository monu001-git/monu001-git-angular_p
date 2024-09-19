import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminApiService } from '../../service/admin-api.service';
import { SwalService } from '../../comman-services/swal.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {


  loginForm !: FormGroup;
  hide = true;

  constructor(private _services: AdminApiService, private _fb: FormBuilder, private _route: Router, private swalService: SwalService) {
    this.loginForm = this.getAllformControlls();
  }

  toggleVisibility(): void {
    this.hide = !this.hide;
  }


  getAllformControlls() {
    return this._fb.group({
      // name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      // checkboxValue: new FormControl(false, [Validators.requiredTrue]),
    })
  }

  onSubmit() {
    if (this.loginForm.valid) {

      const payload = {
        // name: this.loginForm.value.name,
        email: this.loginForm.value.email,
        password: this.loginForm.value.password,
        // checkboxValue: this.loginForm.value.checkboxValue
      }

      this._services
        .onSubmit(payload)
        .subscribe({
          next: (res: any) => {
            if (res.status == 'success') {
              this.swalService.successAlert('login successfully')
              sessionStorage.setItem('token', res.authorisation.token);
              this._route.navigateByUrl('admin');

            }
          },
          error: (error: any) => {
            if (error) {
              this.swalService.errorAlert(error.error.message)
            }
          },
        });
    } else {
      this.loginForm.markAllAsTouched();
    }

  }


}
