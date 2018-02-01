import { nonenumerable } from 'nonenumerable';

export class WebpubEncryptedObject {
  /**
   * Identifies the algorithm used to encrypt the resource.
   */
  public algorithm: string;

  /**
   * Compression method used on the resource.
   */
  public compression?: string;

  /**
   * 	Original length of the resource in bytes before compression and/or encryption
   */
  public originalLength?: number;

  /**
   * Identifies the encryption profile used to encrypt the resource.
   */
  public profile?: string;

  /**
   * Identifies the encryption scheme used to encrypt the resource.
   */
  public scheme?: string;

  @nonenumerable
  public raw: any;

  constructor(raw: any) {
    this.raw = raw;

    const {
      algorithm,
      compression,
      'original-length': originalLength,
      profile,
      scheme,
    } = raw;

    if (!algorithm) {
      throw new Error('algoritm is required');
    }

    this.algorithm = algorithm;

    if (compression) {
      this.compression = compression;
    }

    if (originalLength) {
      this.originalLength = originalLength;
    }

    if (profile) {
      this.profile = profile;
    }

    if (scheme) {
      this.scheme = scheme;
    }
  }
}
