import { CanDeactivateFn } from '@angular/router';

export interface CanExit {
  canDeactivate: () => boolean;
}

export const authDeactivateGuard: CanDeactivateFn<CanExit> = (
  component,
  currentRoute,
  currentState,
  nextState
) => {
  return component.canDeactivate();
};
