import { AddDepartmentModule } from './add-department.module';

describe('AddDepartmentModule', () => {
    let addDepartmentModule: AddDepartmentModule;

    beforeEach(() => {
        addDepartmentModule = new AddDepartmentModule();
    });

    it('should create an instance', () => {
        expect(addDepartmentModule).toBeTruthy();
    });
});
