import { Invoice } from '../entities/invoice.entity';

export default {
  SAVE_INVOICE: (invoice: Invoice) => {
    return `INSERT INTO public."Invoices" ("dueDate", "contractTenantUnitId",value,status)
     VALUES ('${invoice.dueDate}', 
    '${invoice.contractTenantUnitId}', 
    '${invoice.value}', 
    '${invoice.status}') RETURNING *`;
  },
  INVOICES_BY_STATUS: (status: string) => {
    return `SELECT * FROM public."Invoices" WHERE status=${status}`;
  },
};
