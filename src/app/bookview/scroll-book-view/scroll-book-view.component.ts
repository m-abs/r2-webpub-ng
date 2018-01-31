import { AfterContentInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { BookViewComponent } from '../bookview.component';
import { HostListener } from '@angular/core/src/metadata/directives';

@Component({
  selector: 'app-scroll-book-view',
  templateUrl: './scroll-book-view.component.html',
  styleUrls: ['./scroll-book-view.component.scss']
})
export class ScrollBookViewComponent extends BookViewComponent {
  @ViewChild('iframe')
  public iframe$: ElementRef;

  private setIFrameSize(): void {
      // Remove previous iframe height so body scroll height will be accurate.
      this.iframe.style.height = '';

      const body = this.iframe.contentDocument.querySelector('body') as HTMLBodyElement;
      body.style.overflow = 'hidden';

      const rect = body.getBoundingClientRect();
      const minHeight = rect.height + rect.top + 10;
      const bodyHeight = body.scrollHeight;
      this.iframe.style.height = Math.max(minHeight, bodyHeight) + 'px';
  }

  public iframeLoaded() {
    this.setIFrameSize();
  }
}
