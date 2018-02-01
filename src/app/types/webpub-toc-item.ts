import { WebpubLandmarks } from './webpub-landmarks';

export class WebpubTocItem extends WebpubLandmarks {
  public href: string;

  public title: string;

  public children?: WebpubTocItem[];

  constructor(raw: any) {
    super(raw);

    const {children} = raw;

    if (children) {
      this.children = [];

      for (const child of children) {
        this.children.push(new WebpubTocItem(child));
      }
    }
  }
}
