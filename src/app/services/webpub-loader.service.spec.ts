import { TestBed, inject } from '@angular/core/testing';

import { WebpubLoaderService } from './webpub-loader.service';

describe('WebpubLoaderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WebpubLoaderService]
    });
  });

  it('should be created', inject([WebpubLoaderService], (service: WebpubLoaderService) => {
    expect(service).toBeTruthy();
  }));
});
