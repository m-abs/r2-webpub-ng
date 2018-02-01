import { Component, ViewChild, ElementRef, AfterContentInit, OnInit } from '@angular/core';

import { WebpubLoaderService } from './services/webpub-loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public readonly title = 'app';

  constructor(private readonly webpubloader: WebpubLoaderService) {}

  public ngOnInit() {
    this.webpubloader.load('twenty')
      .subscribe((webpub) => {
        console.log(webpub);
      });
  }
}
