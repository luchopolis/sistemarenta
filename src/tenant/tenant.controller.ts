import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { TenantService } from './tenant.service';
import { UpdateTenantDto } from './dto/update-tenant.dto';

import { DefaultResponse } from 'src/commons/SanitizeResponse';
import { ITenantsUnits } from './interfaces/tenants-units.interface';
import { CreateTenantTDto } from './dto/create-tenantT.dto';
import { TenantReadDTO } from './dto/read-tenant.dto';

@Controller('tenants')
export class TenantController {
  constructor(private readonly tenantService: TenantService) {}

  @Post()
  async create(
    @Body() createTenantDto: CreateTenantTDto,
  ): Promise<DefaultResponse<TenantReadDTO>> {
    return { data: await this.tenantService.create(createTenantDto) };
  }

  @Get()
  findAll() {
    return this.tenantService.findAll();
  }

  @Get('/units/:tenantId')
  async findActiveUnitAssigned(
    @Param() params: { tenantId: string },
  ): Promise<DefaultResponse<ITenantsUnits[]>> {
    const tenantId = params.tenantId;
    const result = await this.tenantService.unitsFromTenant(+tenantId);
    return { data: result };
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tenantService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTenantDto: UpdateTenantDto) {
    return this.tenantService.update(+id, updateTenantDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tenantService.remove(+id);
  }
}
