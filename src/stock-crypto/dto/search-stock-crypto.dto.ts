import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SearchStockCrypto {
  @ApiProperty({
    description: 'Stock, Crypto company names or ticker symbols',
    example: 'BTC',
  })
  @IsString()
  @IsNotEmpty()
  search: string;
}
