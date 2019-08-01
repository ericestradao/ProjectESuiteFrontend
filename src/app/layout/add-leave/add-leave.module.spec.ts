import { AddLeaveModule } from './add-leave.module';

describe('AddLeaveModule', () => {
  let addLeaveModule: AddLeaveModule;

  beforeEach(() => {
    addLeaveModule = new AddLeaveModule();
  });

  it('should create an instance', () => {
    expect(addLeaveModule).toBeTruthy();
  });
});
