import { CanMatchFn } from '@angular/router';
let Role: string = 'Admin';
// best for admin and user base authentication (restrict the access to routes based on user)
export const canMatchGuard: CanMatchFn = (route, segments) => {
  if (Role !== 'Admin') {
    return false;
  }
  return true;
};
