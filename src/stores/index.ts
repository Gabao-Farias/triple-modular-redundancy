import { create } from 'mobx-persist';
import OtherStore from './other.store';
import TMRStore from './tmr.store';
import UserStore from './user.store';

class GlobalStore {
  otherStore: OtherStore;

  userStore: UserStore;

  tmrStore: TMRStore;

  constructor() {
    this.otherStore = new OtherStore();
    this.userStore = new UserStore();
    this.tmrStore = new TMRStore();
  }
}

export type StoreKeyNames = keyof GlobalStore;

const user: StoreKeyNames = 'userStore';
const other: StoreKeyNames = 'otherStore';
const tmr: StoreKeyNames = 'tmrStore';

const globalStore = new GlobalStore();
const hydrate = create({
  storage: localStorage,
});

hydrate(user, globalStore.userStore);
hydrate(other, globalStore.otherStore);
hydrate(tmr, globalStore.tmrStore);

export { OtherStore, UserStore, TMRStore };

export default globalStore;
