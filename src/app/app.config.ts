import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { HttpClient, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { provideAnimations } from "@angular/platform-browser/animations";


export function createTranslateLoader(http: HttpClient) {
	return new TranslateHttpLoader(http, './i18n/', '.json');
}

export const appConfig: ApplicationConfig = {
	providers: [provideZoneChangeDetection({ eventCoalescing: true }),
	provideRouter(routes),
	importProvidersFrom([
		TranslateModule.forRoot({
			loader: {
				provide: TranslateLoader,
				useFactory: (createTranslateLoader),
				deps: [HttpClient],
			},
			defaultLanguage: "en",
		})
	]),
	provideClientHydration(),
	provideHttpClient(withInterceptorsFromDi()),
	provideAnimationsAsync('noop'),
	provideAnimationsAsync(),
	 provideAnimations()]
};
