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
  contentForm: FormGroup;  // Initialize contentForm correctly
  titles: string[] = [];
  alts: string[] = [];
  files: any[] = [];
  selectedFile: any;
  selectedFiles: File[] = [];

  constructor(
    private fb: FormBuilder,
    private service: AdminApiService,
    private swalService: SwalService,
    private _router: Router
  ) {
    // Initialize the forms in the constructor or ngOnInit
    this.submitForm = this.fb.group({
      items: this.fb.array([this.createItem()])
    });

    this.contentForm = this.fb.group({
      title: ['', [Validators.required]],
      content: ['', [Validators.required]]
    });
  }

  // Getter for FormArray
  get items() {
    return this.submitForm.get('items') as FormArray;
  }

  // Method to create form group for items
  createItem(): FormGroup {
    return this.fb.group({
      title: ['', Validators.required],
      alt: ['', Validators.required],
      file: ['', Validators.required]
    });
  }

  // Add new item to FormArray
  addItem() {
    this.items.push(this.createItem());
  }

  // Remove item from FormArray
  removeItem(index: number) {
    if (this.items.length > 1) {
      this.items.removeAt(index);
    }
  }

  // Handle file selection
  onFileSelected(event: any, index: number): void {
    const files = event.target.files;
    if (files.length > 0) {
      this.selectedFiles[index] = files[0];
    } else {
      console.log('No file selected for index', index);
    }
  }

  // Handle form submission for the submitForm
  onSubmit(): void {
    if (this.submitForm.valid) {
      const formData = new FormData();

      this.submitForm.value.items.forEach((item: any, index: number) => {
        formData.append(`titles[${index}]`, item.title);
        formData.append(`alts[${index}]`, item.alt);
      });

      this.selectedFiles.forEach((file, index) => {
        if (file) {
          console.log(`Appending file ${index}:`, file);
          formData.append(`files[${index}]`, file, file.name);
        } else {
          console.log(`No file found at index ${index}`);
        }
      });

      this.service.addEditContent(formData).subscribe({
        next: (res: any) => {
          if (res?.status === 200) {
            this.swalService.successAlert(res.message);
            this._router.navigateByUrl('/admin/content');
          } else {
            console.error('Unexpected response status:', res.status);
          }
        },
        error: (err) => {
          console.error('Error during submission:', err);
        }
      });
    } else {
      console.log('Form is invalid:', this.submitForm);
    }
  }

  // Initialize contentForm and handle submission for it
  onSubmitContent() {
    if (this.contentForm.valid) {
      const payload = {
        title: this.contentForm.value.title,
        content: this.contentForm.value.content
      };

      this.service.onSubmit(payload).subscribe({
        next: (res: any) => {
          if (res.status == 'success') {
            alert('Submission Successful');
          }
        },
        error: (error: any) => {
          if (error) {
            alert(error.error.message);
          }
        }
      });
    } else {
      this.contentForm.markAllAsTouched();
    }
  }
}
