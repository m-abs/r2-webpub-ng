import { nonenumerable } from 'nonenumerable';

import { WebpubTocItem } from './webpub-toc-item';

export class WebpubToc extends Array<WebpubTocItem> {
  @nonenumerable
  public raw: any;

  constructor(raw: any) {
    super();

    this.raw = raw;

    for (const item of raw) {
      this.push(new WebpubTocItem(item));
    }
  }
}
