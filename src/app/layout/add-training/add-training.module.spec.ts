import { AddTrainingModule } from './add-training.module';

describe('AddTrainingModule', () => {
  let addTrainingModule: AddTrainingModule;

  beforeEach(() => {
    addTrainingModule = new AddTrainingModule();
  });

  it('should create an instance', () => {
    expect(addTrainingModule).toBeTruthy();
  });
});
