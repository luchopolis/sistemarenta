import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateTenantDto } from './dto/create-tenant.dto';
import { UpdateTenantDto } from './dto/update-tenant.dto';
import { InjectDataSource } from '@nestjs/typeorm';
import { Mapper } from '@automapper/core';
import { InjectMapper } from '@automapper/nestjs';
import { DataSource, QueryFailedError } from 'typeorm';

import queries from './queries/index';
import { ITenantsUnits } from './interfaces/tenants-units.interface';
import { CreateTenantTDto } from './dto/create-tenantT.dto';
import { Tenant } from './entities/tenant.entity';
import { TenantReadDTO } from './dto/read-tenant.dto';
import { RawQueryException } from 'src/commons/Exceptions/RawQueryException';

@Injectable()
export class TenantService {
  constructor(
    @InjectDataSource() private readonly connection: DataSource,
    @InjectMapper() private readonly classMapper: Mapper,
  ) {}

  async findAll(): Promise<Tenant[]> {
    try {
      const tenantsData = await this.connection.query<Tenant[]>(
        queries.SELECT_ALL_TENANTS(),
      );
      return tenantsData;
    } catch (ex: unknown) {
      if (ex.constructor === QueryFailedError) {
        throw new RawQueryException(ex);
      }

      throw new InternalServerErrorException(ex);
    }
  }

  async findOne(id: number): Promise<Tenant> {
    const entity = await this.connection.query<Tenant>(queries.GET_BY_ID(id));
    return entity;
  }

  update(id: number, updateTenantDto: UpdateTenantDto) {
    return `This action updates a #${id} tenant`;
  }

  remove(id: number) {
    return `This action removes a #${id} tenant`;
  }

  async create(tenantD: CreateTenantTDto): Promise<TenantReadDTO> {
    try {
      const entity = this.classMapper.map(tenantD, CreateTenantTDto, Tenant);
      const resultSaved = await this.connection.query<Tenant>(
        queries.SAVE_TENANT(entity),
      );

      return this.classMapper.map(resultSaved[0], Tenant, TenantReadDTO);
    } catch (ex) {
      throw new Error(`create error: ${ex.message}.`);
    }
  }

  async unitsFromTenant(tenantId: number) {
    const result = await this.connection.query<ITenantsUnits[]>(
      queries.GET_UNITS_FROM_TENANT(tenantId),
    );
    return result;
  }
}
