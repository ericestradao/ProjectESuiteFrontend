import { AddMeetingModule } from './add-meeting.module';

describe('AddMeetingModule', () => {
    let addMeetingModule: AddMeetingModule;

    beforeEach(() => {
        addMeetingModule = new AddMeetingModule();
    });

    it('should create an instance', () => {
        expect(addMeetingModule).toBeTruthy();
    });
});
