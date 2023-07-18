import { Module } from '@nestjs/common';
import { UnitModule } from './units/unit.module';
import { ContractModule } from './contractUnits/contractUnits.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TenantModule } from './tenant/tenant.module';

@Module({
  imports: [
    UnitModule,
    ContractModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'root1',
      database: 'sitemarenta',
      entities: [],
      synchronize: false,
    }),
    TenantModule,
  ],
})
export class AppModule {}
