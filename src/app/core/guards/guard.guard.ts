import { inject } from '@angular/core';
import { CanActivateFn, NavigationEnd, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const guardGuard: CanActivateFn = (route, state) => {
    //  const router = inject(Router);
    //  const authService = inject(AuthService);

    //  if (authService.ongetIsauth()) {
    //       return true;
    //  } else {
    //       router.navigateByUrl('/auth/login');
    //       return false;
    //  }

      return true
};
