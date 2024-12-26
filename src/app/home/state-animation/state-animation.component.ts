import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-state-animation',
  templateUrl: './state-animation.component.html',
  styleUrls: ['./state-animation.component.css'],
  animations: [
    trigger('boxState', [
      state(
        'normal',
        style({
          transform: 'scale(1)',
          backgroundColor: 'lightblue',
        })
      ),
      state(
        'enlarged',
        style({
          transform: 'scale(1.5)',
          backgroundColor: 'lightcoral',
        })
      ),
      transition('normal <=> enlarged', animate('500ms ease-in-out')),
    ]),
  ],
})
export class StateAnimationComponent {
  boxState = 'normal';

  toggleState() {
    this.boxState = this.boxState === 'normal' ? 'enlarged' : 'normal';
  }
}