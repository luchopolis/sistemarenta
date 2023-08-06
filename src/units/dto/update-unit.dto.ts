import { PartialType } from '@nestjs/swagger';
import { CreateUnitDto } from './unityDto';

export class UpdateUnitDto extends PartialType(CreateUnitDto) {}
