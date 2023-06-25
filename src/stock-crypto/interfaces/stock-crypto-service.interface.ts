import { IStockCryptoResponse } from './stock-crypto-response.interface';

export interface IStockCryptoService {
  getByNameOrSymbol(nameOrSymbol: string): Promise<IStockCryptoResponse>;
}
