import { AutoMap } from '@automapper/classes';

export class Invoice {
  @AutoMap()
  id: number;

  @AutoMap()
  dueDate: string; // YYYY-MM-DD

  @AutoMap()
  contractTenantUnitId: number;

  @AutoMap()
  value: number;

  @AutoMap()
  status: string; // Pending, Paid, Overdue
}
