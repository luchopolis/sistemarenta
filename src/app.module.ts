import { Module } from '@nestjs/common';
import { UnitModule } from './units/unit.module';
import { ContractModule } from './contractUnits/contractUnits.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TenantModule } from './tenant/tenant.module';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { UserModule } from './user/user.module';
import { InvoiceModule } from './invoice/invoice.module';

@Module({
  imports: [
    UnitModule,
    ContractModule,
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'db.cmhzqtcualszjuwlzfiz.supabase.co',
      port: 5432,
      username: 'postgres',
      password: 'H410!1121@2',
      database: 'postgres',
      entities: [],
      synchronize: false,
    }),
    TenantModule,
    UserModule,
    InvoiceModule,
  ],
})
export class AppModule {}
