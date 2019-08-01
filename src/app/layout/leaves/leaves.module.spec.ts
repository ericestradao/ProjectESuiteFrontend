import { LeavesModule } from './leaves.module';

describe('LeavesModule', () => {
    let leavesModule: LeavesModule;

    beforeEach(() => {
        leavesModule = new LeavesModule();
    });

    it('should create an instance', () => {
        expect(leavesModule).toBeTruthy();
    });
});
