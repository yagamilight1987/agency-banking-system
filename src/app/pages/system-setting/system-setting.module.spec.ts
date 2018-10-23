import { SystemSettingModule } from './system-setting.module';

describe('SystemSettingModule', () => {
  let systemSettingModule: SystemSettingModule;

  beforeEach(() => {
    systemSettingModule = new SystemSettingModule();
  });

  it('should create an instance', () => {
    expect(systemSettingModule).toBeTruthy();
  });
});
