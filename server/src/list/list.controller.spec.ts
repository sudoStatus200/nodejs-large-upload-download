import { Test, TestingModule } from '@nestjs/testing';
import { ListController } from './list.controller';
import { ListService } from './list.service';

describe('AppController', () => {
  let appController: ListController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ListController],
      providers: [ListService],
    }).compile();

    appController = app.get<ListController>(ListController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getFilesList()).toBe([]);
    });
  });
});
