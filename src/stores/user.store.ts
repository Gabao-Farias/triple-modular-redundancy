import { action, makeAutoObservable, observable } from 'mobx';
import { persist } from 'mobx-persist';

export default class UserStore {
  constructor() {
    makeAutoObservable(this);
  }

  @persist('object')
  @observable
  nome?: string;

  @persist('object')
  @observable
  idade?: number;

  @action
  setIdade = (idade: number): void => {
    this.idade = idade;
  };

  @action
  setNome = (nome: string): void => {
    this.nome = nome;
  };
}
