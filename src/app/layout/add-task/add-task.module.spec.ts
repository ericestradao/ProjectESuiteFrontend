import { AddTaskModule } from './add-task.module';

describe('AddTaskModule', () => {
    let addTaskModule: AddTaskModule;

    beforeEach(() => {
        addTaskModule = new AddTaskModule();
    });

    it('should create an instance', () => {
        expect(addTaskModule).toBeTruthy();
    });
});
