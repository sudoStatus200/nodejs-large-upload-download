import { Injectable } from '@nestjs/common';
import { readdirSync, readFileSync } from 'fs';
import { join } from 'path';

@Injectable()
export class FileService {
  getFilesList(): string[] {
    const files: string[] = readdirSync( join((process.cwd(),"./src/data")));
    return files;
  }

  getFile(id: string): Buffer {
    return readFileSync('../data/test.txt');
  }

  uploadFile(data: Buffer): Boolean {
    return true;
  }
}
