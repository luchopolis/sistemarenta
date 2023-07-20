import { Injectable } from '@nestjs/common';
import { AutomapperProfile, InjectMapper } from '@automapper/nestjs';
import { Mapper, createMap, ignore, forMember } from '@automapper/core';
import { CreateTenantTDto } from 'src/tenant/dto/create-tenantT.dto';
import { TenantReadDTO } from '../../dto/read-tenant.dto';
import { Tenant } from 'src/tenant/entities/tenant.entity';

@Injectable()
export class TenantTProfile extends AutomapperProfile {
  constructor(@InjectMapper() mapper: Mapper) {
    super(mapper);
  }

  override get profile() {
    return (mapper: Mapper) => {
      createMap(mapper, Tenant, TenantReadDTO);
      createMap(
        mapper,
        CreateTenantTDto,
        Tenant,
        forMember((dest) => dest.id, ignore()),
      );
    };
  }
}
