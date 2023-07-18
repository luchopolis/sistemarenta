class UnitModels {
  private _id?: number;
  private _name: string;
  private _address: string;

  set address(address: string) {
    this._address = address;
  }

  get address(): string {
    return this._address;
  }

  set name(name: string) {
    this._name = name;
  }

  get name(): string {
    return this._name;
  }

  set id(id: number) {
    this._id = id;
  }

  get id(): number {
    return this._id;
  }
}

export default UnitModels;
