import { nonenumerable } from 'nonenumerable';

import { WebpubSpineItem } from './webpub-spine-item';

export class WebpubSpine extends Array<WebpubSpineItem> {
  @nonenumerable
  public raw: any;

  constructor(raw: any) {
    super();

    this.raw = raw;

    for (const item of raw) {
      this.push(new WebpubSpineItem(item));
    }
  }
}
