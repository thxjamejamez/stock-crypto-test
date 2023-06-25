import { Test, TestingModule } from '@nestjs/testing';
import { StockCryptoController } from './stock-crypto.controller';
import { StockCryptoService } from './stock-crypto.service';

describe('StockCryptoController', () => {
  let controller: StockCryptoController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StockCryptoController],
      providers: [StockCryptoService],
    }).compile();

    controller = module.get<StockCryptoController>(StockCryptoController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
