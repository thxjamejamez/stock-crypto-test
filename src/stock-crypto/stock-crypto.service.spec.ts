import { Test, TestingModule } from '@nestjs/testing';
import { StockCryptoService } from './stock-crypto.service';

describe('StockCryptoService', () => {
  let service: StockCryptoService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [StockCryptoService],
    }).compile();

    service = module.get<StockCryptoService>(StockCryptoService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
