export class AppConstants {
  static readonly API_BASE_URL: string = 'http://localhost:8081/';
  // If isMock is false nothing is mocked.
  static readonly IS_MOCK: boolean = true;
  // Mock only the following APIs. If this object is empty everything is mocked
  static readonly MOCK_ONLY: any = {};
  static readonly MOCK_PATH: string = 'assets/mock-data/';
  static readonly SESSION_STORAGE_KEYS: any = {
    token: 'TOKEN',
    userData: 'USER_DATA',
    menuData: 'MENU_DATA'
  };
  static readonly APP_NAVIGATION_URLS: any = {
    landing: '/landing',
    login: '/login'
  };
}
