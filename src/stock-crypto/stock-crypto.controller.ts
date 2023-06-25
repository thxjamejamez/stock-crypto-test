import {
  Controller,
  Get,
  NotFoundException,
  Query,
  UseInterceptors,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { StockCryptoService } from './stock-crypto.service';
import { SearchStockCrypto } from './dto/search-stock-crypto.dto';
import { CacheInterceptor } from '@nestjs/cache-manager';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller('stock-crypto')
@UsePipes(new ValidationPipe())
export class StockCryptoController {
  constructor(private readonly stockCryptoService: StockCryptoService) {}

  @UseInterceptors(CacheInterceptor)
  @Get('current-price')
  @ApiOkResponse({
    status: 200,
    description: 'Returns stock or crypto data',
    type: Object,
  })
  async getCurrentPrice(@Query() query: SearchStockCrypto) {
    const data = await this.stockCryptoService.getByNameOrSymbol(query.search);

    if (!data) {
      throw new NotFoundException('Stock or Crypto not found.');
    }

    return data;
  }
}
