import { AddTrainingRoomModule } from './add-training-room.module';

describe('AddDepartmentModule', () => {
    let addTrainingRoomModule: AddTrainingRoomModule;

    beforeEach(() => {
        addTrainingRoomModule = new AddTrainingRoomModule();
    });

    it('should create an instance', () => {
        expect(addTrainingRoomModule).toBeTruthy();
    });
});
