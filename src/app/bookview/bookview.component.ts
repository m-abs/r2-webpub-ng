import { AfterContentInit, ElementRef } from '@angular/core';

export abstract class BookViewComponent implements AfterContentInit {
    public iframe$: ElementRef;

    public get iframe(): HTMLIFrameElement {
      return this.iframe$.nativeElement;
    }

    public pages = [
      './assets/books/twenty/text/titlepage.xhtml',
      './assets/books/twenty/text/chapter-1-1.xhtml'
    ] as string[];

    public currentPageIndex = 0;

    public ngAfterContentInit() {
      this.nextChapter();
    }
  
    public nextChapter() {
      this.currentPageIndex += 1;
      if (this.currentPageIndex >= this.pages.length) {
        this.currentPageIndex = 0;
      }
  
      this.iframe.src = this.pages[this.currentPageIndex];
    }

    public iframeLoaded(event: Event) {
      console.log(event);
    }
}
