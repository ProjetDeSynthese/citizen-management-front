import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Roles } from 'src/roles.citizen';

export const adminGuard: CanActivateFn = (route, state) => {
     const router = inject(Router);
     const authService = inject(AuthService);
     const toast = inject(ToastrService);

     const RolesAdmin = authService.getRole();

     if (RolesAdmin === Roles.Admin) {
          return true;
     } else {
          toast.error("vous n'avez pas acces", 'echec');
          router.navigateByUrl('/auth/connexion');
          return false;
     }
};
