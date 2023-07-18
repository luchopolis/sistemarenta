import { IsString, IsBoolean, IsOptional, IsNumber } from 'class-validator';

export class CreateTenantDto {
  @IsString()
  name: string;

  @IsString()
  lastname: string;

  @IsString()
  identifier: string;

  @IsString()
  phoneNumber: string;

  @IsNumber()
  @IsOptional()
  userId?: number;

  @IsBoolean()
  @IsOptional()
  status: boolean;
}
