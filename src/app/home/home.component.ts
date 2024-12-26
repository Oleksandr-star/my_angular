import { Component } from '@angular/core';
import { KeyframeAnimationComponent } from './keyframe-animation/keyframe-animation.component';
import { StateAnimationComponent } from './state-animation/state-animation.component';
import { ReusableAnimationComponent } from './reusable-animation/reusable-animation.component';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    imports: [KeyframeAnimationComponent, StateAnimationComponent, ReusableAnimationComponent],
})
export class HomeComponent {

}