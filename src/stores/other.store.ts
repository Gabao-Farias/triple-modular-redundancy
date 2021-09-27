import { action, makeAutoObservable, observable } from 'mobx';

export default class OtherStore {
  constructor() {
    makeAutoObservable(this);
  }

  @observable
  local?: string;

  @observable
  altitude?: number;

  @action
  setLocal = (local: string): void => {
    this.local = local;
  };

  @action
  setAltitude = (altitude: number): void => {
    this.altitude = altitude;
  };
}
