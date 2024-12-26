import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyframeAnimationComponent } from './keyframe-animation.component';

describe('KeyframeAnimationComponent', () => {
  let component: KeyframeAnimationComponent;
  let fixture: ComponentFixture<KeyframeAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [KeyframeAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeyframeAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
