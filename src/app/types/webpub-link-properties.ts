import { nonenumerable } from 'nonenumerable';

export type WebpubLinkPropertyContains = 'mathml' | 'onix' | 'remote-resources'| 'js' | 'svg' | 'xmp';

export class WebpubLinkProperties {
  /**
   * Suggested orientation for the device when displaying the linked resource.
   */
  public orientation?: 'auto' | 'langscape' | 'portrait';

  /**
   * Indicates how the linked resource should be displayed in a reading environment that displays synthetic spreads.
   */
  public page?: 'left' | 'right' | 'center';

  /**
   * Indentifies content contained in the linked resource, that cannot be strictly identified using a media type.
   */
  public contains?: WebpubLinkPropertyContains[];

  /**
   * 	Indicates that a resource is encrypted/obfuscated and provides relevant information for decryption.
   */
  public encrypted?: any;

  /**
   * 	Hint about the nature of the layout for the linked resources.
   */
  public layout?: 'fixed' | 'reflowable';

  /**
   * Location of a media-overlay for the resource referenced in the Link Object.	URI	Any valid relative or absolute URI	EPUB extension
   */
  public mediaOverlay?: string;

  /**
   * Suggested method for handling overflow while displaying the linked resource.
   */
  public overflow?: 'auto' | 'paginated' | 'scrolled' | 'scrolled-continuous';

  /**
   * Indicates the condition to be met for the linked resource to be rendered within a synthetic spread.
   */
  public spread?: 'auto' | 'both' | 'none' | 'landscape';

  @nonenumerable
  public raw: any;

  constructor(raw: any) {
    this.raw = raw;

    if (raw.contains) {
      this.contains = raw.contains;
    }

    if (raw.page) {
      this.page = raw.page;
    }

    if (raw.encrypted) {
      this.encrypted = raw.encrypted;
    }

    if (raw.layout) {
      this.layout = raw.layout;
    }

    if (raw['media-overlay']) {
      this.mediaOverlay = raw['media-overlay'];
    }

    if (raw.orientation) {
      this.orientation = raw.orientation;
    }

    if (raw.overflow) {
      this.overflow = raw.overflow;
    }

    if (raw.spread) {
      this.spread = raw.spread;
    }
  }
}
