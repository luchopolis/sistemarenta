import { AutoMap } from '@automapper/classes';
export class Tenant {
  @AutoMap()
  id: number;

  @AutoMap()
  name: string;

  @AutoMap()
  identifier: string;

  @AutoMap()
  lastname: string;

  @AutoMap()
  phoneNumber: string;

  @AutoMap()
  userId?: number;

  @AutoMap()
  status: boolean;
}
