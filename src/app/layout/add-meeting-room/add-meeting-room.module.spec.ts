import { AddMeetingRoomModule } from './add-meeting-room.module';

describe('AddMeetingRoomModule', () => {
    let addMeetingRoomModule: AddMeetingRoomModule;

    beforeEach(() => {
        addMeetingRoomModule = new AddMeetingRoomModule();
    });

    it('should create an instance', () => {
        expect(addMeetingRoomModule).toBeTruthy();
    });
});
