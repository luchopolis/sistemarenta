import { Injectable } from '@nestjs/common';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { UpdateTenantDto } from './dto/update-tenant.dto';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

import queries from './queries/index';
import { ITenantsUnits } from './interfaces/tenants-units.interface';

@Injectable()
export class TenantService {
  constructor(@InjectDataSource() private readonly connection: DataSource) {}

  create(createTenantDto: CreateTenantDto) {
    return 'This action adds a new tenant';
  }

  findAll() {
    return `This action returns all tenant`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tenant`;
  }

  update(id: number, updateTenantDto: UpdateTenantDto) {
    return `This action updates a #${id} tenant`;
  }

  remove(id: number) {
    return `This action removes a #${id} tenant`;
  }

  async unitsFromTenant(tenantId: number) {
    const result = await this.connection.query<ITenantsUnits[]>(
      queries.GET_UNITS_FROM_TENANT(tenantId),
    );
    return result;
  }
}
