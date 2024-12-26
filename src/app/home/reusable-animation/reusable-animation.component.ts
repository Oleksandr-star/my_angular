import { Component } from '@angular/core';
import { reusableAnimation } from './animations';

@Component({
  selector: 'app-reusable-animation',
  templateUrl: './reusable-animation.component.html',
  styleUrls: ['./reusable-animation.component.css'],
  animations: [reusableAnimation],
})
export class ReusableAnimationComponent {
  animationState = 'start';

  toggleAnimation() {
    this.animationState = this.animationState === 'start' ? 'end' : 'start';
  }
}