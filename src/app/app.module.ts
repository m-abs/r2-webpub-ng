import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ServiceWorkerModule } from '@angular/service-worker';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { ScrollBookViewComponent } from './bookview/scroll-book-view/scroll-book-view.component';
import { WebpubLoaderService } from './services/webpub-loader.service';

@NgModule({
  declarations: [
    AppComponent,
    ScrollBookViewComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [
    WebpubLoaderService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
