import { PicklistModule } from './picklist.module';

describe('PicklistModule', () => {
  let picklistModule: PicklistModule;

  beforeEach(() => {
    picklistModule = new PicklistModule();
  });

  it('should create an instance', () => {
    expect(picklistModule).toBeTruthy();
  });
});
