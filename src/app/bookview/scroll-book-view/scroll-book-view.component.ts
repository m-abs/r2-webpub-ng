import { AfterContentInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';

import { BookViewComponent } from '../bookview.component';

@Component({
  selector: 'app-scroll-book-view',
  templateUrl: './scroll-book-view.component.html',
  styleUrls: ['./scroll-book-view.component.scss']
})
export class ScrollBookViewComponent extends BookViewComponent {
  @ViewChild('iframe')
  public iframe$: ElementRef;

  public scrollPosition: number;

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

  @HostListener('window:resize', ['$event'])
  public windowResize(event: Event) {
    this.setIFrameSize();

    this.scrollToPosition(this.scrollPosition);
  }

  @HostListener('window:scroll', ['$event'])
  public windowScroll(event: Event) {
    this.scrollPosition = this.getScrollPosition();
  }

  private getScrollPosition() {
    return document.scrollingElement.scrollTop / document.scrollingElement.scrollHeight;
  }

  private scrollToPosition(position: number) {
    if (position <= 0 || !position) {
      document.scrollingElement.scrollTop = 0;
      return;
    }

    if (position >= 1) {
      return;
    }

    document.scrollingElement.scrollTop = document.scrollingElement.scrollHeight * position;
  }
}
