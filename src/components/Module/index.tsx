import React, { FC } from 'react';
import { ModuleTitle, ModuleWrapper } from './styles';

type Props = {};

const Module: FC<Props> = () => {
  return (
    <ModuleWrapper>
      <ModuleTitle>Módulo</ModuleTitle>
    </ModuleWrapper>
  );
};

export default Module;
