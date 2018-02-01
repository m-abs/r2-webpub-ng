import { nonenumerable } from 'nonenumerable';

import { WebpubMetadata } from './webpub-metadata';
import { WebpubSpine } from './webpub-spine';
import { WebpubResources } from './webpub-resources';
import { WebpubLinks } from './webpub-links';
import { WebpubToc } from './webpub-toc';
import { WebpubLandmarks } from './webpub-landmarks';

export class Webpub {
  public metadata: WebpubMetadata;
  public spine: WebpubSpine;
  public resources?: WebpubResources;
  public links?: WebpubLinks;
  public toc?: WebpubToc;
  public landmarks?: WebpubLandmarks;

  @nonenumerable
  public raw: any;

  constructor(raw: any) {
    this.raw = raw;

    this.metadata = new WebpubMetadata(raw.metadata);

    if (!raw.spine) {
      throw new Error('Missing spine');
    }

    this.spine = new WebpubSpine(raw.spine);

    if (raw.resources) {
      this.resources = new WebpubResources(raw.resources);
    }

    if (raw.links) {
      this.links = new WebpubLinks(raw.links);
    }

    if (raw.toc) {
      this.toc = new WebpubToc(raw.toc);
    }

    if (raw.landmarks) {
      this.landmarks = new WebpubLandmarks(raw.landmarks);
    }
  }
}
