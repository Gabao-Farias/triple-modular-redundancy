import half from './half';
import double from './double';
import square from './square';
import cube from './cube';

const functions = {
  half,
  double,
  square,
  cube
};

export type FunctionsType = typeof functions;
export type FunctionsKeys = keyof FunctionsType;

export default functions;
