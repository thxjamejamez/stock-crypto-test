import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StockCryptoModule } from './stock-crypto/stock-crypto.module';

@Module({
  imports: [StockCryptoModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
