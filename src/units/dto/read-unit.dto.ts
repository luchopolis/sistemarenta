import { AutoMap } from '@automapper/classes';

export class ReadUnitDto {
  @AutoMap()
  id: number;

  @AutoMap()
  name: string;

  @AutoMap()
  address: string;

  @AutoMap()
  type: number;
}
