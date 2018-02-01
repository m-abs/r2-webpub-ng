import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';

import { Webpub } from '../types/webpub';

@Injectable()
export class WebpubLoaderService {
  private baseUrl = './assets/books';
  constructor(private http: Http) {}

  public load(identifier: string) {
    return this.http
      .get(`${this.baseUrl}/${identifier}/manifest.json`)
      .map((data) => new Webpub(data.json()));
  }
}
