import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

import { IUnit } from './interfaces';

import QUERIES from './queries/index';

@Injectable()
export class UnitService {
  constructor(@InjectDataSource() private readonly connection: DataSource) {}

  async getAllData(): Promise<IUnit[]> {
    return this.connection.query<IUnit[]>(
      'SELECT * FROM public."Units" WHERE id=$1',
      ['1'],
    );
  }

  async saveUnit(unit: IUnit): Promise<IUnit> {
    const result = await this.connection.query<IUnit>(
      QUERIES.SAVE_DEPARTMENT(unit),
    );
    return result;
  }

  async getAvailableUnits(): Promise<IUnit[]> {
    const result = await this.connection.query<IUnit[]>(
      QUERIES.AVAILABLE_UNITS,
    );
    return result;
  }

  async unitsMoreDetailed(date: string) {
    const result = await this.connection.query(
      QUERIES.UNITS_EXPIRATION_LIST(date),
    );
    return result;
  }
}
