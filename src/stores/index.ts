import { create } from 'mobx-persist';
import OtherStore from './other.store';
import UserStore from './user.store';

class GlobalStore {
  otherStore: OtherStore;

  userStore: UserStore;

  constructor() {
    this.otherStore = new OtherStore();
    this.userStore = new UserStore();
  }
}

export type StoreKeyNames = keyof GlobalStore;

const user: StoreKeyNames = 'userStore';
const other: StoreKeyNames = 'otherStore';

const globalStore = new GlobalStore();
const hydrate = create({
  storage: localStorage,
});

hydrate(user, globalStore.userStore);
hydrate(other, globalStore.otherStore);

export { OtherStore, UserStore };

export default globalStore;
