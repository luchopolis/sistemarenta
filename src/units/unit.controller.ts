import { Controller, Get, Post, Body } from '@nestjs/common';
import { UnitService } from './unit.service';
import { IUnit } from './interfaces';
import { CreateUnitDto } from './dto/unityDto';

import { DefaultResponse } from '../commons/SanitizeResponse';

@Controller('units')
export class UnitController {
  constructor(private unitService: UnitService) {}

  @Get()
  async findAll(): Promise<IUnit[]> {
    const data = await this.unitService.getAllData();
    return data;
  }

  @Post()
  async save(@Body() unitData: CreateUnitDto): Promise<IUnit> {
    const result = await this.unitService.saveUnit(unitData);

    return result;
  }

  // Available Units
  @Get('/availables')
  async availableUnitsList(): Promise<DefaultResponse<IUnit[]>> {
    const listOfUnits = await this.unitService.getAvailableUnits();
    return { data: listOfUnits };
  }
}
