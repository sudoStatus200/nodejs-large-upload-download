import { Injectable } from '@nestjs/common';
import { readdirSync, readFileSync, statSync } from 'fs';
import { join } from 'path';
import { FileMeta } from './filelist.interface';

@Injectable()
export class FileService {
  getFilesList(): FileMeta[] {
    const files: string[] = readdirSync( join((process.cwd(),"./src/data")));
    const  filesMeta:  FileMeta[] = files.map((name:string):FileMeta =>{
      const stats = statSync(join(process.cwd(),"./src/data", name))
      const meta : FileMeta ={
        fileName: name,
        size: (stats.size/1024).toFixed(4).toString() + "KB",
        createdAt:  stats.birthtime.toISOString()
      }
      return meta
    })
    return filesMeta;
  }

  getFile(id: string): Buffer {
    return readFileSync('../data/test.txt');
  }

  uploadFile(data: Buffer): Boolean {
    return true;
  }
}
