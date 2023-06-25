import { Module } from '@nestjs/common';
import { StockCryptoService } from './stock-crypto.service';
import { StockCryptoController } from './stock-crypto.controller';
import { CacheModule } from '@nestjs/cache-manager';

@Module({
  imports: [
    CacheModule.register({
      ttl: 6000,
    }),
  ],
  controllers: [StockCryptoController],
  providers: [StockCryptoService],
})
export class StockCryptoModule {}
