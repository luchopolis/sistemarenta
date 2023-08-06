import { PartialType } from '@nestjs/swagger';
import { CreateUnitDto } from '../dto/unityDto';

class IUnit extends PartialType(CreateUnitDto) {
  id?: number;
  type?: number;
}

export { IUnit };
