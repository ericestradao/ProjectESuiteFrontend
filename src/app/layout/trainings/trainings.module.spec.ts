import { TrainingsModule } from './trainings.module';

describe('TrainingsModule', () => {
  let trainingsModule: TrainingsModule;

  beforeEach(() => {
    trainingsModule = new TrainingsModule();
  });

  it('should create an instance', () => {
    expect(trainingsModule).toBeTruthy();
  });
});
