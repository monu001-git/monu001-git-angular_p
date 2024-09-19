import { Component, HostListener } from '@angular/core';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'website';

  constructor(private _router: Router) {
      // if (performance.navigation.type === 1) {
      //   this._router.navigateByUrl('**');
      // }
    
  }

  // @HostListener('window:popstate', ['$event'])
  // onPopState(event: PopStateEvent) {
  //   window.history.forward();
  // }

  // @HostListener('document:contextmenu', ['$event'])
  // onRightClick(event: MouseEvent) {
  //   event.preventDefault();
  // }
  // @HostListener('window:keydown', ['$event'])
  // onKeyDown(event: KeyboardEvent) {
  //   if (event.keyCode === 123) {
  //     event.preventDefault();
  //   }

  //   if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
  //     event.preventDefault();
  //   }

  //   if (event.ctrlKey && event.shiftKey && event.keyCode === 74) {
  //     event.preventDefault();
  //   }

  //   if (event.ctrlKey && event.keyCode === 85) {
  //     event.preventDefault();
  //   }
  // }

}
