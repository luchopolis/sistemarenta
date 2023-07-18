import { ContractUnitEntity } from '../entities/ContractUnit';

export default {
  ACTIVE_CONTRACTS: () => {
    return `SELECT * FROM public."ContractTenantUnit" WHERE state = true`;
  },
  SAVE_CONTRACT: (data: ContractUnitEntity) => {
    return `INSERT INTO public."ContractTenantUnit" 
    (tenant, unit, "dateContract", "endContract", state, "dayOfPayment")
    VALUES ('${data.tenant.id}', '${data.unit.id}', 
      '${data.dateContract}'::DATE, 
      '${data.endContract}'::DATE, 
      '${data.state}', 
      '${data.dayOfPayment}'
    ) RETURNING *`;
  },
};
