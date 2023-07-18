import { Controller, Get, Post, Body } from '@nestjs/common';

import { DefaultResponse } from '../commons/SanitizeResponse';
import { CreateContractUnitDto } from './dto/CreateContractUnitDto';
import { ICreateContractUnit } from './interfaces/contractUnits.interface';
import { ContractUnitService } from './contractUnits.service';

@Controller('contract-units')
export class ContractUnitController {
  constructor(private contractUnitService: ContractUnitService) {}

  @Post()
  async save(
    @Body() unitData: CreateContractUnitDto,
  ): Promise<DefaultResponse<ICreateContractUnit>> {
    const result = await this.contractUnitService.saveContract(unitData);

    return { data: result };
  }
}
