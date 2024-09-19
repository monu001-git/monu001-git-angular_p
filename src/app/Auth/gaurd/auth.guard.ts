import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const _router = inject(Router);
  const isToken = sessionStorage.getItem('token');

  if (isToken == '' || isToken == null || isToken == undefined) {
    _router.navigate(['/login']);
    return false;
  }
  return true;
};
