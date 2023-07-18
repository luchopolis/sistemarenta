import { Module } from '@nestjs/common';
import { ContractUnitController } from './contractUnits.controller';
import { ContractUnitService } from './contractUnits.service';
import { DataSource } from 'typeorm';
// import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [ContractUnitController],
  providers: [ContractUnitService],
  exports: [ContractUnitService],
})
export class ContractModule {
  constructor(private dataSource: DataSource) {}
}
