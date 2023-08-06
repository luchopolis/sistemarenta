import { IsNumber, IsOptional, IsString } from 'class-validator';
import { AutoMap } from '@automapper/classes';

export class CreateUnitDto {
  @AutoMap()
  @IsString()
  name: string;

  @AutoMap()
  @IsString()
  address: string;

  @AutoMap()
  @IsNumber()
  @IsOptional()
  type: number;
}
