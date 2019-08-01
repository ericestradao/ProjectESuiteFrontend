import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TrainingsComponent } from './trainings.component';
import { TrainingsModule } from './trainings.module';

describe('TrainingsComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ TrainingsModule, RouterTestingModule ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(TrainingsComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
