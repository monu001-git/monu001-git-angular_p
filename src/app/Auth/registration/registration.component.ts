import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminApiService } from '../../service/admin-api.service';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [RouterLink, RouterOutlet, CommonModule, ReactiveFormsModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

  submitForm !: FormGroup;

  constructor(private _services: AdminApiService, private _fb: FormBuilder) {
    this.submitForm = this.getAllformControlls();
  }

  getAllformControlls() {
    return this._fb.group({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      address: new FormControl(''),
      Phone: new FormControl(''),
      state: new FormControl(''),
      game: new FormControl(''),
      file: new FormControl(''),
    })
  }

  onSubmit() {
    if (this.submitForm.valid) {

      const payload = {
        name: this.submitForm.value.name,
        password: this.submitForm.value.password,
        email: this.submitForm.value.email,
      }

      this._services
        .onSubmitreg(payload)
        .subscribe({
          next: (res: any) => {
            console.log('message')
            if (res.status == 'success') {

              alert(res.message)

            }
          },
          error: (error: any) => {
            if (error) {
              console.log(error.error.message)
            }
          },
        });
    } else {
      this.submitForm.markAllAsTouched();
    }

  }


}
