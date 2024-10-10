import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { AdminApiService } from '../../../../service/admin-api.service';
import { SwalService } from '../../../../comman-services/swal.service';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [RouterModule, ReactiveFormsModule, CommonModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.css'
})
export class AddUserComponent implements OnInit {
  paramsdata: any;

  submitForm !: FormGroup
  updateID: any;
  fileData: string | ArrayBuffer | null = null;
  fileName: string = '';
  isImage: boolean = false;
  selectedFile: any;
  imageData: any;



  constructor(private ActivatedRoute: ActivatedRoute,
    private service: AdminApiService,
    private swalService: SwalService,
    private _router: Router,
    private _fb: FormBuilder
  ) {
    this.submitForm = this.getAllformControlls();
  }

  ngOnInit(): void {
    this.ActivatedRoute.queryParams.subscribe(params => {
      this.paramsdata = params;

      if (this.paramsdata && this.paramsdata.id) {
        this.updateID = this.paramsdata.id
        this.updateUserData(this.paramsdata.id);
      }

    });
  }


  updateUserData(id: any) {
    const payload = {
      id: id
    }
    this.service.updateUserData(payload).subscribe({
      next: (res: any) => {
        if (res.status == 200) {
          if (this.paramsdata && this.paramsdata.id) {
            this.submitForm.patchValue({ id: res.data.id });
            this.submitForm.patchValue({ password: res.data.password });
          }
          this.submitForm.patchValue({ name: res.data.name });
          this.submitForm.patchValue({ email: res.data.email });
          this.submitForm.patchValue({ status: res.data.status });
          this.submitForm.patchValue({ lname: res.data.lname });
          this.submitForm.patchValue({ description: res.data.description });
          this.submitForm.patchValue({ country: res.data.country });
          this.submitForm.patchValue({ state: res.data.state });
          this.submitForm.patchValue({ gender: res.data.gender });
          this.submitForm.patchValue({ interest: res.data.interest });

       this.imageData = res.data.file ? `http://localhost:8000/uploads/${res.data.file}` : null;

       if (this.imageData) {
        this.submitForm.get('file')?.clearValidators();  // Clear validators if updating
      } else {
        this.submitForm.get('file')?.setValidators([Validators.required]);  // Set required validator if no image exists
      }
      
      this.submitForm.get('file')?.updateValueAndValidity();

        }
      },
      error: (error: any) => {
        if (error) {
          this.swalService.errorAlert(error.error.message);
        }
      },
    })
  }

  getAllformControlls() {
    return this._fb.group({
      id: [''],
      password: [],
      name: ['', Validators.compose([Validators.required])],
      // lname: ['', Validators.compose([Validators.required])],
      email: ['', Validators.compose([Validators.required, Validators.email])],
      description: ['', Validators.compose([Validators.required])],
      country: ['', Validators.compose([Validators.required])],
      state: ['', Validators.compose([Validators.required])],
      gender: ['', Validators.compose([Validators.required])],
      interest: ['', Validators.compose([Validators.required])],
      file: ['', Validators.compose([Validators.required])],
      status: [0],
    })
  }

  onFileSelected(event: any): void {
    this.selectedFile = event.target.files[0];
  }
  


  // onSubmit() {
  //   if (this.submitForm.valid) {

  //     const payload = {
  //       id: this.submitForm.value.id,
  //       password: this.submitForm.value.password,
  //       fname: this.submitForm.value.fname,
  //       lname: this.submitForm.value.lname,
  //       email: this.submitForm.value.email,
  //       description: this.submitForm.value.description,
  //       country: this.submitForm.value.country,
  //       state: this.submitForm.value.state,
  //       gender: this.submitForm.value.gender,
  //       interest: this.submitForm.value.interest,
  //       status: this.submitForm.value.status,
  //       file:  this.selectedFile,
  //     }

  //     this.service.addEditUser(payload).subscribe({
  //       next: (res: any) => {
  //         if (res.status == 200) {
  //           this._router.navigateByUrl('/admin/user')
  //         }

  //       }
  //     })

  //   } else {
  //     this.submitForm.markAllAsTouched();
  //   }
  // }


  onSubmit() {
    if (this.submitForm.valid) {
      const formData = new FormData();
  
      // Append all form fields to FormData
      formData.append('id', this.submitForm.value.id);
      formData.append('password', this.submitForm.value.password);
      formData.append('name', this.submitForm.value.name);
      // formData.append('lname', this.submitForm.value.lname);
      formData.append('email', this.submitForm.value.email);
      formData.append('description', this.submitForm.value.description);
      formData.append('country', this.submitForm.value.country);
      formData.append('state', this.submitForm.value.state);
      formData.append('gender', this.submitForm.value.gender);
      formData.append('interest', this.submitForm.value.interest);
      formData.append('status', this.submitForm.value.status);

      if (this.selectedFile) {
        formData.append('file', this.selectedFile, this.selectedFile.name); 
      }
  
      this.service.addEditUser(formData).subscribe({
        next: (res: any) => {
          if (res.status === 200) {
            this.swalService.successAlert(res.message)
            this._router.navigateByUrl('/admin/user');
          }
        },
        error: (err) => {
          console.error(err);
        }
      });
    } else {
      this.submitForm.markAllAsTouched();
    }
  }
  

}
