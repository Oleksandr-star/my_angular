import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StateAnimationComponent } from './state-animation.component';

describe('StateAnimationComponent', () => {
  let component: StateAnimationComponent;
  let fixture: ComponentFixture<StateAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StateAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StateAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
