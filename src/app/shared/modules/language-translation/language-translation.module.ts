/**
 * This module is used to language translations.
 * The translations are saved in a json file in /src/app/assets/i18n directory
 * Docs: https://www.codeandweb.com/babeledit/tutorials/how-to-translate-your-angular7-app-with-ngx-translate
 */
import { NgModule } from '@angular/core';
import { HttpClient } from '@angular/common/http';


// ngx-translate - required for AOT compilation
export function HttpLoaderFactory(http: HttpClient) {
 
}

@NgModule({
  declarations: [],
  imports: [
    
  ],
  exports: [
  ],
})
export class LanguageTranslationModule {
  constructor(
  ) {
    // Gets Default language from browser if available, otherwise set English ad default
    
  }
}
