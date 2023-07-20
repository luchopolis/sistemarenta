import { AutoMap } from '@automapper/classes';

export class TenantReadDTO {
  @AutoMap()
  id: number;

  @AutoMap()
  name: string;

  @AutoMap()
  lastname: string;

  @AutoMap()
  identifier: string;

  @AutoMap()
  phoneNumber: string;

  @AutoMap()
  userId?: number;

  @AutoMap()
  status: boolean;
}
