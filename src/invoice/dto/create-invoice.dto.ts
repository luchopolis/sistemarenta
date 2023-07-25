import { IsNumber, IsPositive } from 'class-validator';

export class CreateInvoiceDto {
  @IsNumber()
  @IsPositive()
  contractTenantUnitId: number;
}
