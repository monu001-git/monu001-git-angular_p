import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AdminApiService } from '../../../../service/admin-api.service';
import { SwalService } from '../../../../comman-services/swal.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-menu',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './add-menu.component.html',
  styleUrl: './add-menu.component.css'
})
export class AddMenuComponent implements OnInit {

  submitForm !: FormGroup
  // showInternalUrl: boolean = false;
  parentId: any;

  constructor(
    private service: AdminApiService,
    private swalService: SwalService,
    private _router: Router,
    private _fb: FormBuilder
  ) {
    this.submitForm = this.getAllformControlls();
  }

  ngOnInit(): void {
    this.parentMaster()
  }

  parentMaster() {
    this.service.parentMaster()
      .subscribe({
        next: (res: any) => {
          if (res.status == 200) {
            this.parentId = res.data
           // this.swalService.successAlert(res.message)
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

  getAllformControlls() {
    return this._fb.group({
      name: ['', Validators.compose([Validators.required])],
      parentId: [''],
      url: [''],
      order: ['', Validators.compose([Validators.required])],
      status: [0],
      urlType: ['', Validators.compose([Validators.required])],
    })
  }

  // onUrlTypeChange(event: Event): void {
  //   const value = (event.target as HTMLInputElement).value;

  //   if (value === 'external') {
  //     this.showInternalUrl = true;
  //     this.submitForm.get('url')?.setValidators([Validators.required]);
  //   } else if (value === 'internal') {
  //     this.showInternalUrl = false;
  //     this.submitForm.get('url')?.clearValidators();
  //   }
  //   this.submitForm.get('url')?.updateValueAndValidity();
  // }

  onSubmit() {
    if (this.submitForm.valid) {

      const payload = {
        name: this.submitForm.value.name,
        parentId: this.submitForm.value.parentId,
        urlType: this.submitForm.value.urlType,
        url: this.submitForm.value.url,
        order: this.submitForm.value.order,
      }

      this.service.addEditMenu(payload).subscribe({
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
