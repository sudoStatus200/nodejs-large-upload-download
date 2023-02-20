import { Injectable } from '@nestjs/common';
import { readdirSync, readFileSync } from 'fs';

@Injectable()
export class FileService {
  getFilesList(): string[] {
    const files: string[] = readdirSync('../data');
    return files;
  }

  getFile(id: string): Buffer {
    return readFileSync('../data/test.txt');
  }

  uploadFile(data: Buffer): Boolean {
    return true;
  }
}
