import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';

import QUERIES from './queries/index';
import { ICreateContractUnit } from './interfaces/contractUnits.interface';
import { ContractUnitEntity } from './entities/ContractUnit';

@Injectable()
export class ContractUnitService {
  constructor(@InjectDataSource() private readonly connection: DataSource) {}

  async saveContract(
    contractData: ICreateContractUnit,
  ): Promise<ICreateContractUnit> {
    const entityContractUnit = new ContractUnitEntity(
      contractData.dayOfPayment,
      contractData.dateContract,
      contractData.endContract,
      contractData.tenant,
      contractData.unit,
      contractData.state,
    );

    const result = await this.connection.query<ICreateContractUnit>(
      QUERIES.SAVE_CONTRACT(entityContractUnit),
    );

    return result[0];
  }
}
