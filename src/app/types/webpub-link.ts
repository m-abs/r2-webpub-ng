import { nonenumerable } from 'nonenumerable';

import { WebpubLinkProperties } from './webpub-link-properties';

export type WebpubLinkRel = 'alternate' | 'contents' | 'cover' | 'manifest' | 'search' | 'self';

export class WebpubLink {
  /**
   * Link location.
   */
  public href: string;

  /**
   * MIME type of resource.
   */
  public type: string;

  /**
   * Title of the linked resource.
   */
  public title: string | void;

  /**
   * Indicates the relation between the resource and its containing collection.
   */
  public rel: WebpubLinkRel | void;

  public properties: any | void;

  /**
   * Indicates the height of the linked resource in pixels.
   */
  public height: number | void;

  /**
   * Indicates the width of the linked resource in pixels.
   */
  public width: number | void;

  /**
   * Indicates the length of the linked resource in seconds.
   */
  public duration: number | void;

  /**
   * Indicates that the linked resource is a URI template.
   * Boolean: defaults to false
   */
  public templated: boolean | void;

  @nonenumerable
  public raw: any[];

  constructor(raw: any) {
    this.raw = raw;

    const {
      href,
      type,
      title,
      rel,
      properties,
      height,
      width,
      duration,
      templated,
    } = raw;

    if (!href) {
      throw new Error('href required');
    }

    this.href = href;

    if (!type) {
      throw new Error('type required');
    }

    this.type = type;

    // tslint:disable-next-line:triple-equals
    if (height != void 0) {
      this.height = Number(height);
    }

    // tslint:disable-next-line:triple-equals
    if (width != void 0) {
      this.width = Number(width);
    }

    // tslint:disable-next-line:triple-equals
    if (duration != void 0) {
      this.duration = Number(duration);
    }

    // tslint:disable-next-line:triple-equals
    if (templated != void 0) {
      this.templated = !!templated;
    }

    if (properties) {
      this.properties = new WebpubLinkProperties(properties);
    }
  }
}
