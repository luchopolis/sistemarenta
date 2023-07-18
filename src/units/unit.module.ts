import { Module } from '@nestjs/common';
import { UnitController } from './unit.controller';
import { UnitService } from './unit.service';
import { DataSource } from 'typeorm';
// import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  controllers: [UnitController],
  providers: [UnitService],
  exports: [UnitService],
})
export class UnitModule {
  constructor(private dataSource: DataSource) {}
}
