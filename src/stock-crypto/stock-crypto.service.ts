import { Injectable } from '@nestjs/common';
import yahooFinance from 'yahoo-finance2';
import { IStockCryptoService } from './interfaces/stock-crypto-service.interface';

@Injectable()
export class StockCryptoService {
  /**
   * Get stock, crypto by name or symbol
   * @param nameOrSymbol
   * @returns
   */
  async getByNameOrSymbol(
    nameOrSymbol: string,
  ): ReturnType<IStockCryptoService['getByNameOrSymbol']> {
    try {
      const search = await yahooFinance.search(nameOrSymbol);
      if (!search.quotes.length) return null;

      const quote = await yahooFinance.quoteSummary(search.quotes[0].symbol);

      return {
        shortName: quote?.price?.shortName,
        longName: quote?.price?.longName,
        currency: quote?.price?.currency,
        regularMarketPrice: quote?.price?.regularMarketPrice,
      };
    } catch (error) {
      throw new Error(error.message);
    }
  }
}
