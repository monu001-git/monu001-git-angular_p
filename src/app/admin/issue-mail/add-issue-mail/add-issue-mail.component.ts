import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { AdminApiService } from '../../../service/admin-api.service';
import { SwalService } from '../../../comman-services/swal.service';
import { Router, RouterModule } from '@angular/router';


@Component({
  selector: 'app-add-issue-mail',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterModule],
  templateUrl: './add-issue-mail.component.html',
  styleUrl: './add-issue-mail.component.css'
})
export class AddIssueMailComponent {


  submitForm !: FormGroup;


  constructor(
    private _services: AdminApiService,
    private alert: SwalService,
    private _router: Router,
    private _fb: FormBuilder) {
    this.submitForm = this.getAllformControlls();
  }

  getAllformControlls() {
    return this._fb.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]],
      mail: ['', [Validators.required]],
    })
  }

  onSubmit() {
    if (this.submitForm.valid) {
      const payload = {
        title: this.submitForm.value.title,
        content: this.submitForm.value.content,
        mail: this.submitForm.value.mail,
      }
      this._services
        .mailSend(payload)
        .subscribe({
          next: (res: any) => {
            if (res.status == 200) {
              this.alert.successAlert(res.msg)
              this._router.navigateByUrl('/admin/mail');
            }
          },
          error: (error: any) => {
            if (error) {
              this.alert.errorAlert(error.error.message)
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
