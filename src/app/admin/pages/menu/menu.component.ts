import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AdminApiService } from '../../../service/admin-api.service';
import { SwalService } from '../../../comman-services/swal.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterModule, CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent implements OnInit {
  menu: any;


  constructor(
    private service: AdminApiService,
    private swalService: SwalService,
    private _router: Router,
  ) {

  }

  ngOnInit(): void {
    this.getMenu()
  }



  getMenu() {
    this.service.getMenu()
      .subscribe({
        next: (res: any) => {
          if (res.status == 200) {
            this.menu = res.data
     
          }
        },
        error: (error: any) => {
          if (error) {
            this.swalService.errorAlert(error.error.message)
          }
        },
      });
  }



}
