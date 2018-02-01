import { nonenumerable } from 'nonenumerable';

export class WebpubMetadata {
  public title: string;

  public author: string;

  public identifier: string;

  [key: string]: any;

  @nonenumerable
  public raw: any;

  constructor(raw: any) {
    this.raw = raw;
    for (const key of Object.keys(raw)) {
      this[key] = raw[key];
    }

    this.raw.title = raw.title;
    this.raw.author = raw.author;
    this.raw.identifier = raw.identifier;
  }
}
