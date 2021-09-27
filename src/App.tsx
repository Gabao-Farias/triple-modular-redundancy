import { inject, observer } from 'mobx-react';
import React from 'react';
import { Input, Module } from './components';
import { StoreKeyNames } from './stores';
import TMRStore from './stores/tmr.store';
// import { inject, observer } from 'mobx-react';

type Props = {
  tmrStore?: TMRStore;
};

const Demo: React.FC<Props> = ({ tmrStore }) => {
  console.log(tmrStore);
  const handleClick:React.MouseEventHandler<HTMLButtonElement> | undefined = async () => {
    try {
      await tmrStore?.run();
    } catch (error) {
      console.log("TÃO ME FUDENDO!");
    }
  };

  return (
    <>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: 800,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Input />
        <button onClick={handleClick}>Oii</button>
        <h1>Hello world!</h1>
        <h4>{tmrStore?.moduleConfig.operationName}</h4>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: 800,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Module />
        <h1>Hello world!</h1>
      </div>
    </>
  );
};

const tmr: StoreKeyNames = 'tmrStore';

export default inject(tmr)(observer(Demo));
