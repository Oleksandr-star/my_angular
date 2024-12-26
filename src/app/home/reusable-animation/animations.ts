import { trigger, state, style, transition, animate } from '@angular/animations';

export const reusableAnimation = trigger('reusableBox', [
  state(
    'start',
    style({
      transform: 'translateX(0)',
      backgroundColor: 'lightblue',
    })
  ),
  state(
    'end',
    style({
      transform: 'translateX(100px)',
      backgroundColor: 'lightcoral',
    })
  ),
  transition('start <=> end', animate('500ms ease-in-out')),
]);