import { async, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { TasksComponent } from './tasks.component';
import { TasksModule } from './tasks.module';

describe('TasksComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ TasksModule, RouterTestingModule ],
    })
    .compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(TasksComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
