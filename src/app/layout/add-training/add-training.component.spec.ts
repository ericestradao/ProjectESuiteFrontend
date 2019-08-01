import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AddTrainingComponent } from './add-training.component';
import { AddTrainingModule } from './add-training.module';

describe('AddTrainingComponent', () => {
  let component: AddTrainingComponent;
  let fixture: ComponentFixture<AddTrainingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AddTrainingModule,
        RouterTestingModule,
        BrowserAnimationsModule,
      ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
