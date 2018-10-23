import { enableProdMode } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AuthInterceptor } from './auth.interceptor';
import { LoggingInterceptor } from './logging.interceptor';
import { FakeBackendInterceptor } from './mock.interceptor';
import { ErrorInterceptor } from './error.interceptor';
import { AppConstants } from 'src/app/app.constants';
import { environment } from 'src/environments/environment';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ...(AppConstants.IS_MOCK
    ? [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: FakeBackendInterceptor,
          multi: true
        }
      ]
    : []),
  {
    provide: HTTP_INTERCEPTORS,
    useClass: ErrorInterceptor,
    multi: true
  },
  ...(!environment.production
    ? [
        {
          provide: HTTP_INTERCEPTORS,
          useClass: LoggingInterceptor,
          multi: true
        }
      ]
    : [])
];
