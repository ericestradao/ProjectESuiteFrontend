import { AddEmployeeModule } from './add-employee.module';

describe('AddEmployeeModule', () => {
    let addEmployeeModule: AddEmployeeModule;

    beforeEach(() => {
        addEmployeeModule = new AddEmployeeModule();
    });

    it('should create an instance', () => {
        expect(AddEmployeeModule).toBeTruthy();
    });
});
