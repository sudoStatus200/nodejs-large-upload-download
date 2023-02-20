import { Controller, Get } from '@nestjs/common';
import { ListService } from './list.service';

@Controller("/list")
export class ListController {
  constructor(private readonly listService: ListService) {}

  @Get()
  getFilesList(): string[] {
    return this.listService.getFilesList();
  }
}
