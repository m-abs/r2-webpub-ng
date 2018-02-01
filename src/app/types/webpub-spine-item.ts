import { nonenumerable } from 'nonenumerable';

export class WebpubSpineItem {
  @nonenumerable
  public raw: any;

  public href: string;
  public type: string;

  constructor(raw: any) {
    this.raw = raw;
    this.href = raw.href;
    this.type = raw.type;
  }
}
