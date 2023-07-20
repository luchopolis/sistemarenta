import { Tenant } from '../entities/tenant.entity';

export default {
  GET_UNITS_FROM_TENANT: (tenantId: number) => `
    SELECT u."id" "unitId",u."name", ctu."dateContract", ctu."endContract", ctu."state", ctu."dayOfPayment" FROM public."ContractTenantUnit" ctu
    INNER JOIN public."Units" u ON u."id" = ctu."unit"
    INNER JOIN public."tenants" tn ON tn."id" = ctu."tenant"
    WHERE ctu."state" = true
    AND tn."id" = ${tenantId}
  `,
  SAVE_TENANT: (data: Tenant) => {
    return `INSERT INTO public."tenants" (name, identifier,lastname,phonenumber,status) 
    VALUES ('${data.name}','${data.identifier}','${data.lastname}','${data.phoneNumber}','${data.status}') RETURNING *`;
  },
};
