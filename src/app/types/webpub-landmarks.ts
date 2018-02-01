import { nonenumerable } from 'nonenumerable';

export class WebpubLandmarks {
  @nonenumerable
  public raw: any;

  public href: string;

  public title: string;

  constructor(raw: any) {
    this.raw = raw;

    const {href, title, children} = raw;
    this.href = href;
    this.title = title;
  }
}
