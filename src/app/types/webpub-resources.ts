import { nonenumerable } from 'nonenumerable';

import { WebpubLink } from './webpub-link';

export class WebpubResources extends Array<WebpubLink> {
  @nonenumerable
  public raw: any[];

  constructor(raw: any[]) {
    super();

    this.raw = raw;

    for (const item of raw) {
      this.push(new WebpubLink(item));
    }
  }
}
