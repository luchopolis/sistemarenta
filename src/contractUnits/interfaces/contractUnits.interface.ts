import { PartialType } from '@nestjs/swagger';
import { CreateContractUnitDto } from '../dto/CreateContractUnitDto';

class ICreateContractUnit extends PartialType(CreateContractUnitDto) {
  id?: number;
}

export { ICreateContractUnit };
