import { FormatTimeUtility } from 'src/commons/formatTime';

interface IMainProperties {
  id: number;
}

export class ContractUnitEntity {
  private _id?: number;
  private _dayOfPayment: string;
  private _dateContract: Date;
  private _endContract: Date;
  private _tenant: IMainProperties;
  private _unit: IMainProperties;
  private _valueContract: number;
  private _state: boolean;

  constructor(
    dayOfPayment: string,
    dateContract: Date,
    endContract: Date,
    tenant: IMainProperties,
    unit: IMainProperties,
    state: boolean,
    valueContract: number,
    id?: number,
  ) {
    this._id = id;
    this._dayOfPayment = dayOfPayment;
    this._dateContract = dateContract;
    this._endContract = endContract;
    this._tenant = tenant;
    this._unit = unit;
    this._valueContract = valueContract;
    this._state = state;
  }

  get id() {
    return this._id;
  }

  get dayOfPayment() {
    return this._dayOfPayment;
  }

  get dateContract() {
    const extractDate = FormatTimeUtility.formatTime(this._dateContract);
    return extractDate;
  }

  get endContract() {
    const extractDate = FormatTimeUtility.formatTime(this._endContract);
    return extractDate;
  }

  get tenant() {
    return this._tenant;
  }

  get unit() {
    return this._unit;
  }

  get valueContract() {
    return this._valueContract;
  }

  get state() {
    return this._state;
  }
}
