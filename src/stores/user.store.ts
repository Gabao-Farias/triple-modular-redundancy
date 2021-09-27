import { action, makeAutoObservable, observable } from 'mobx';

export default class UserStore {
  constructor() {
    makeAutoObservable(this);
  }

  @observable
  nome?: string;

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
