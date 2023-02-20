import { Injectable } from '@nestjs/common';
import { readdirSync } from 'fs';

@Injectable()
export class ListService {
  getFilesList(): string[] {
    const files: string[] = readdirSync('../data');
    return files;
  }
}
