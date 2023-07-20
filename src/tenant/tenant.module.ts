import { Module } from '@nestjs/common';
import { TenantService } from './tenant.service';
import { TenantController } from './tenant.controller';
import { TenantTProfile } from './shared/src/tenantTProfile';

@Module({
  controllers: [TenantController],
  providers: [TenantService, TenantTProfile],
})
export class TenantModule {}
