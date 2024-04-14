
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const AuthGuard = () => {
  const router = inject(Router);
  const userLocalStorage = window.localStorage.getItem('userdata')
  const userData = userLocalStorage ? JSON.parse(userLocalStorage) : null;
  if (userData) {
    router.navigate(['/home']);
    return false;
  }
  return true;
};
