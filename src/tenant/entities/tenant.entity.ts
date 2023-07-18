export class Tenant {
  private _id?: number;
  private _name: string;
  private _identifier: string;
  private _lastname: string;
  private _phoneNumber: string;
  private _userId?: number;
  private _status: boolean;

  constructor(
    name: string,
    identifier: string,
    lastname: string,
    phoneNumber: string,
    userId?: number,
    status?: boolean,
  ) {
    this._name = name;
    this._identifier = identifier;
    this._lastname = lastname;
    this._phoneNumber = phoneNumber;
    this._userId = userId;
    this._status = status ?? true;
  }
  get id(): number {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  get identifier(): string {
    return this._identifier;
  }

  get lastname(): string {
    return this._lastname;
  }

  get phoneNumber(): string {
    return this._phoneNumber;
  }

  get userId(): number {
    return this._userId;
  }

  get status(): boolean {
    return this._status;
  }
}
