import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMeetingRoomComponent } from './add-meeting-room.component';

describe('AddMeetingRoomComponent', () => {
  let component: AddMeetingRoomComponent;
  let fixture: ComponentFixture<AddMeetingRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMeetingRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMeetingRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
