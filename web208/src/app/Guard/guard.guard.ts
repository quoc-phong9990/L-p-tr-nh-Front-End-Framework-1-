import { CanActivateFn } from '@angular/router';

export const guardGuard: CanActivateFn = (route, state) => {
  let user = true
  if (user) {
    return true;
  } else {
    return false
  }
};
