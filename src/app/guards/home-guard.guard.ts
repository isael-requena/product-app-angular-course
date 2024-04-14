import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const HomeGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const userLocalStorage = window.localStorage.getItem('userdata')
  const userData = userLocalStorage ? JSON.parse(userLocalStorage) : null;
  if (!userData) {
    router.navigate(['/login']);
    return false;
  }
  return true;
};
