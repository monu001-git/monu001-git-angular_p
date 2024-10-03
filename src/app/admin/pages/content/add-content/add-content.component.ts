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
  selectedFiles: File[] = [];

  constructor(
    private fb: FormBuilder,
    private service: AdminApiService,
    private swalService: SwalService,
    private _router: Router
  ) {
    // Initialize the form with all controls
    this.submitForm = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
      order: [0, [Validators.required]],
      status: [0, [Validators.required]],
      items: this.fb.array([this.createItem()]),
      videoItems: this.fb.array([this.createVideoItem()])
    });
  }

  // Image items FormArray
  get items() {
    return this.submitForm.get('items') as FormArray;
  }

  addItem() {
    this.items.push(this.createItem());
  }

  removeItem(index: number) {
    if (this.items.length > 1) {
      this.items.removeAt(index);
    }
  }

  createItem(): FormGroup {
    return this.fb.group({
      imageTitle: ['', Validators.required],
      imageAlt: ['', Validators.required],
      imageFile: ['', Validators.required]
    });
  }



  // Video items FormArray
  get videoItems() {
    return this.submitForm.get('videoItems') as FormArray;
  }

  addVideoItem() {
    this.videoItems.push(this.createVideoItem());
  }

  removeVideoItem(index: number) {
    if (this.videoItems.length > 1) {
      this.videoItems.removeAt(index);
    }
  }

  createVideoItem(): FormGroup {
    return this.fb.group({
      videoTitle: ['', Validators.required],
      videoAlt: ['', Validators.required],
      videoUrl: ['', Validators.required]
    });
  }

  // onFileSelected(event: any, index: number): void {
  //   const files: FileList = event.target.files;
  //   if (files.length > 0) {
  //     this.selectedFiles[index] = files[0];
  //   } else {
  //     console.log('No file selected for index', index);
  //   }
  // }

  onSubmit() {
    if (this.submitForm.valid) {
      const formData = new FormData();

      formData.append('title', this.submitForm.value.title);
      formData.append('description', this.submitForm.value.description);
      formData.append('image', this.submitForm.value.image);
      formData.append('order', this.submitForm.value.order);
      formData.append('status', this.submitForm.value.status);

      this.submitForm.value.items.forEach((item: any, index: number) => {
        formData.append(`imageTitle[${index}]`, item.imageTitle);
        formData.append(`imageAlt[${index}]`, item.imageAlt);
        formData.append(`imageFile[${index}]`, item.imageFile);
      });
  
      this.submitForm.value.videoItems.forEach((item: any, index: number) => {
        formData.append(`videoTitle[${index}]`, item.videoTitle);
        formData.append(`videoAlt[${index}]`, item.videoAlt);
        formData.append(`videoUrl[${index}]`, item.videoUrl);
      });
  

      this.service.addEditContent(formData).subscribe({
        next: (res: any) => {
          if (res.status === 200) {
            this.swalService.successAlert(res.message);
            this._router.navigateByUrl('/admin/content');
          } else {
            this.swalService.errorAlert(res.status);
          }
        },
        error: (error: any) => {
          if (error) {
            this.swalService.errorAlert(error.error.message);
          }
        },
      });
    } else {
      this.submitForm.markAllAsTouched();
    }
  }
}
