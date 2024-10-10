import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-issue-mail',
  standalone: true,
  imports: [ReactiveFormsModule,RouterModule],
  templateUrl: './issue-mail.component.html',
  styleUrl: './issue-mail.component.css'
})
export class IssueMailComponent {

}
