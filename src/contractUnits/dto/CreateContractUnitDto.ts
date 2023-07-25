import {
  IsString,
  IsObject,
  IsDate,
  IsBoolean,
  IsOptional,
  IsNumber,
  IsPositive,
} from 'class-validator';
import { Type } from 'class-transformer';

interface IMainProperties {
  id: number;
}

export class CreateContractUnitDto {
  @IsObject()
  tenant: IMainProperties;

  @IsObject()
  unit: IMainProperties;

  @Type(() => Date)
  @IsDate()
  dateContract: Date;

  @Type(() => Date)
  @IsDate()
  endContract: Date;

  @IsString()
  dayOfPayment: string;

  @IsNumber()
  @IsPositive()
  valueContract: number;

  @IsOptional()
  @IsBoolean()
  state: boolean;
}
