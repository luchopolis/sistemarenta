import { IsString, IsBoolean, IsOptional, IsNumber } from 'class-validator';
import { AutoMap } from '@automapper/classes';

export class CreateTenantTDto {
  @IsString()
  @AutoMap()
  name: string;

  @IsString()
  @AutoMap()
  lastname: string;

  @IsString()
  @AutoMap()
  identifier: string;

  @IsString()
  @AutoMap()
  phoneNumber: string;

  @IsNumber()
  @IsOptional()
  @AutoMap()
  userId?: number;

  @IsBoolean()
  @IsOptional()
  @AutoMap()
  status: boolean;
}
