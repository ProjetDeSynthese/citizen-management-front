import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const adminGuard: CanActivateFn = (route, state) => {
    
  const authService =  new AuthService()

  const isAdmin = authService;
  return true;
};
