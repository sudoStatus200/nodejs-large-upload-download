import {
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Post,
  Body,
} from '@nestjs/common';
import { FileService } from './file.service';
import { FileMeta } from './filelist.interface';

@Controller('/file')
export class FileController {
  constructor(private readonly fileService: FileService) {}

  @Get('list')
  getFilesList(): FileMeta[] {
    return this.fileService.getFilesList();
  }

  @Get(':id')
  getFile(@Param('id', new ParseUUIDPipe()) id: string): Buffer {
    return this.fileService.getFile(id);
  }

  @Post()
  uploadFile(@Body() data: Buffer): Boolean {
    return this.fileService.uploadFile(data);
  }
}
