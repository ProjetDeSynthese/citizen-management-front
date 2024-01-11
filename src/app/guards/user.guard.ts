import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Roles } from 'src/roles.citizen';
import { AuthService } from '../services/auth.service';

export const userGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);
  const authService = inject(AuthService);
  const toast = inject(ToastrService);

  const RolesCit = authService.getRole();

  if (RolesCit === Roles.citoyens) {
       return true;
  } else {
       toast.error("vous n'avez pas acces", 'echec');
       router.navigateByUrl('/auth/connexion');
       return false;
  }
};
