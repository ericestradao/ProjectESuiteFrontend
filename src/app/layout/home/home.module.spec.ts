import { HomeModule } from './home.module';

describe('DashboardModule', () => {
  let HomeModule: HomeModule;

  beforeEach(() => {
    HomeModule = new HomeModule();
  });

  it('should create an instance', () => {
    expect(HomeModule).toBeTruthy();
  });
});
