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
    INNER JOIN public."typeUnits" tunt ON tunt."id" = unts."type"
    WHERE unts."id" NOT IN (SELECT "id" FROM unitsWithContracts)
  )
  SELECT * FROM unitsWithoutContracts`,
  UNITS_EXPIRATION_LIST: (date: string) => `
  WITH basicData AS (
    SELECT
      u."id" AS "unitId",
      u."name" AS "unitName",
      t."id" AS "tenantId",
      CONCAT(EXTRACT(YEAR FROM '${date}'::DATE), '-', to_char('${date}'::DATE, 'MM'), '-', cunt."dayOfPayment") AS "dayPayment",
      CONCAT(t."name", ' ', t."lastname") AS "tenantName",
      ABS(DATE_PART('day', '${date}'::DATE) - DATE_PART('day', CONCAT(EXTRACT(YEAR FROM '${date}'::DATE), '-', to_char('${date}'::DATE, 'MM'), '-', cunt."dayOfPayment")::DATE)) AS "daysNear",
      CASE WHEN ABS(DATE_PART('day', '${date}'::DATE) - DATE_PART('day', CONCAT(EXTRACT(YEAR FROM '${date}'::DATE), '-', to_char('${date}'::DATE, 'MM'), '-', cunt."dayOfPayment")::DATE)) <= 5 THEN true ELSE false END AS "expireSoon"
    FROM public."ContractTenantUnit" cunt
    INNER JOIN public."tenants" t ON cunt."tenant" = t."id"
    INNER JOIN public."Units" u ON cunt."unit" = u."id"
    ORDER BY "expireSoon"
  )
  SELECT * FROM basicData;`,
  UPDATE_UNIT: (id: number, unit: IUnit) => {
    let updateSql = ``;

    for (const [key, value] of Object.entries(unit)) {
      updateSql += `"${key}"='${value}',`;
    }

    updateSql = updateSql.slice(0, updateSql.length - 1);

    return `UPDATE public."Units" SET ${updateSql} WHERE id = '${id}' returning *`;
  },
};
