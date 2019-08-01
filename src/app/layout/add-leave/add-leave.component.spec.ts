import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AddLeaveComponent } from './add-leave.component';
import { AddLeaveModule } from './add-leave.module';

describe('AddLeaveComponent', () => {
  let component: AddLeaveComponent;
  let fixture: ComponentFixture<AddLeaveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AddLeaveModule,
        RouterTestingModule,
        BrowserAnimationsModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddLeaveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
