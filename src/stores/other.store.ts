import { action, makeAutoObservable, observable } from 'mobx';
import { persist } from 'mobx-persist';

export default class OtherStore {
  constructor() {
    makeAutoObservable(this);
  }

  @persist('object')
  @observable
  local?: string;

  @persist('object')
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
