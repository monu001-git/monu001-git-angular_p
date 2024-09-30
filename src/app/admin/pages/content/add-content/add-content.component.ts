import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { SwalService } from '../../../../comman-services/swal.service';
import { AdminApiService } from '../../../../service/admin-api.service';

@Component({
  selector: 'app-add-content',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './add-content.component.html',
  styleUrls: ['./add-content.component.css']
})
export class AddContentComponent {
  submitForm: FormGroup;
  titles: string[] = [];
  alts: string[] = [];
  files: any[] = [];

  constructor(
    private fb: FormBuilder,
    private service: AdminApiService,
    private swalService: SwalService,
    private _router: Router,

  ) {
    this.submitForm = this.fb.group({
      items: this.fb.array([this.createItem()])
    });
  }

  get items() {
    return this.submitForm.get('items') as FormArray;
  }

  createItem(): FormGroup {
    return this.fb.group({
      title: ['', Validators.required],
      alt: ['', Validators.required],
      // file: ['', Validators.required]
    });
  }

  addItem() {
    this.items.push(this.createItem());
  }

  removeItem(index: number) {
    if (this.items.length > 1) {
      this.items.removeAt(index);
    }
  }

  onSubmit() {
    if (this.submitForm.valid) {

      this.submitForm.value.items.forEach((item: any) => {
        this.titles.push(item.title);
        this.alts.push(item.alt);
        // this.files.push(item.file);
      });

      const payload = {
        imageTitles: this.titles,
        imageAlts: this.alts,
        // imageFiles: this.files
      };

      this.service.addEditContent(payload).subscribe({
        next: (res: any) => {
          if (res.status === 200) {
            this.swalService.successAlert(res.message);
            this._router.navigateByUrl('/admin/content');
          }
        },
        error: (err) => {
          console.error(err);
        }
      });

    } else {
      console.log('Form is invalid', this.submitForm);
    }
  }

}
