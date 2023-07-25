import { ContractUnitEntity } from '../entities/ContractUnit';

export default {
  ACTIVE_CONTRACTS: () => {
    return `SELECT * FROM public."ContractTenantUnit" WHERE state = true`;
  },
  SAVE_CONTRACT: (data: ContractUnitEntity) => {
    return `INSERT INTO public."ContractTenantUnit" 
    (tenant, unit, "dateContract", "endContract", state, "dayOfPayment", "valueContract")
    VALUES ('${data.tenant.id}', '${data.unit.id}', 
      '${data.dateContract}'::DATE, 
      '${data.endContract}'::DATE, 
      '${data.state}', 
      '${data.dayOfPayment}',
      '${data.valueContract}'
    ) RETURNING *`;
  },
  CONTRACT_VALUE: (contractId: number) => {
    return `SELECT "valueContract" FROM public."ContractTenantUnit" WHERE id=${contractId}`;
  },
};
