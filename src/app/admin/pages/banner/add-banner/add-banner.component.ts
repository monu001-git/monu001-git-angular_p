import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AdminApiService } from '../../../../service/admin-api.service';
import { SwalService } from '../../../../comman-services/swal.service';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-banner',
  standalone: true,
  imports: [CommonModule, RouterModule, ReactiveFormsModule],
  templateUrl: './add-banner.component.html',
  styleUrl: './add-banner.component.css'
})
export class AddBannerComponent {

  submitForm !: FormGroup
  parentId: any;

  constructor(
    private service: AdminApiService,
    private swalService: SwalService,
    private _router: Router,
    private _fb: FormBuilder
  ) {
    this.submitForm = this.getAllformControlls();
  }

  ngOnInit() {

  }


  getAllformControlls() {
    return this._fb.group({
      title: ['', Validators.compose([Validators.required])],
      description: [''],
      url: [''],
      order: ['', Validators.compose([Validators.required])],
      status: [0],
      image: ['', Validators.compose([Validators.required])],
    })
  }

  onSubmit() {
    if (this.submitForm.valid) {

      const payload = {
        title: this.submitForm.value.title,
        description: this.submitForm.value.description,
        image: this.submitForm.value.image,
        url: this.submitForm.value.url,
        order: this.submitForm.value.order,
        status: this.submitForm.value.status,
      }

      this.service.addEditBanner(payload).subscribe({
        next: (res: any) => {
          if (res.status == 200) {
            this._router.navigateByUrl('/admin/menu')
            this.swalService.successAlert(res.message)
          }

        }
      })

    } else {
      this.submitForm.markAllAsTouched();
    }
  }

}
