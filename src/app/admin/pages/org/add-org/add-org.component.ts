import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AdminApiService } from '../../../../service/admin-api.service';
import { SwalService } from '../../../../comman-services/swal.service';

@Component({
  selector: 'app-add-org',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './add-org.component.html',
  styleUrl: './add-org.component.css'
})
export class AddOrgComponent {

  submitForm !: FormGroup

  constructor(private _services: AdminApiService, private _fb: FormBuilder, private alert: SwalService) {
    this.submitForm = this.getAllformControlls();
  }


  getAllformControlls() {
    return this._fb.group({
      name: ['', [Validators.required]],
      about_us: ['', [Validators.required]],
      email: ['', [Validators.required]],
      phone: ['', [Validators.required]],
      instagram: ['', [Validators.required]],
      instagram_title: ['', [Validators.required]],
      facebook: ['', [Validators.required]],
      facebook_title: ['', [Validators.required]],

    })
  }

  onSubmit() {
    if (this.submitForm.valid) {

      const payload = {
        name: this.submitForm.value.name,
        about_us: this.submitForm.value.about_us,
        email: this.submitForm.value.email,
        phone: this.submitForm.value.phone,
        facebook: this.submitForm.value.facebook,
        facebook_title: this.submitForm.value.facebook_title,
        instagram: this.submitForm.value.instagram,
        instagram_title: this.submitForm.value.instagram_title,
      }

      this._services
        .addEditOrg(payload)
        .subscribe({
          next: (res: any) => {
            if (res.status == 200) {
              this.alert.successAlert(res.msg)
            }
          },
          error: (error: any) => {
            if (error) {
              this.alert.errorAlert(error.error.message)
            }
          },
        });
    } else {
      this.submitForm.markAllAsTouched();
    }

  }



}
