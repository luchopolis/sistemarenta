import { IUnit } from '../interfaces';

export default {
  SAVE_DEPARTMENT: (unit: IUnit) => {
    return `INSERT INTO public."Units" (name, address) VALUES ('${unit.name}', '${unit.address}') RETURNING *`;
  },
  AVAILABLE_UNITS: `WITH unitsWithContracts AS (
    SELECT cunt."unit" as "id" FROM public."ContractTenantUnit" cunt 
    WHERE cunt."state" = 'true'
  ), unitsWithoutContracts AS (
    SELECT unts."id", unts."name", unts."address", tunt."name" as "type" FROM public."Units" unts
    INNER JOIN public."TypeUnits" tunt ON tunt."id" = unts."type"
    WHERE unts."id" NOT IN (SELECT "id" FROM unitsWithContracts)
  )
  SELECT * FROM unitsWithoutContracts`,
};
