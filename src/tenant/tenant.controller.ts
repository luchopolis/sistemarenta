import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  NotFoundException,
} from '@nestjs/common';
import { TenantService } from './tenant.service';
import { UpdateTenantDto } from './dto/update-tenant.dto';

import { DefaultResponse } from 'src/commons/SanitizeResponse';
import { ITenantsUnits } from './interfaces/tenants-units.interface';
import { CreateTenantTDto } from './dto/create-tenantT.dto';
import { TenantReadDTO } from './dto/read-tenant.dto';
import { Tenant } from './entities/tenant.entity';

@Controller('tenants')
export class TenantController {
  constructor(private readonly tenantService: TenantService) {}

  @Post()
  async create(
    @Body() createTenantDto: CreateTenantTDto,
  ): Promise<DefaultResponse<TenantReadDTO>> {
    return { data: await this.tenantService.create(createTenantDto) };
  }

  @Get('/test')
  getTest() {
    return 'HI WORKING CI/CD';
  }

  @Get()
  async findAll(): Promise<DefaultResponse<Tenant[]>> {
    const result = await this.tenantService.findAll();
    return { data: result };
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
  async findOne(@Param('id') id: string) {
    const result = await this.tenantService.findOne(+id);

    if (!result[0]) throw new NotFoundException(`Entity ${id} not found`);
    return result;
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
