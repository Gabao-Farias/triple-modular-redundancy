import React, { FC } from 'react';
import { VoterTitle, VoterWrapper } from './styles';

type Props = {};

const Voter: FC<Props> = () => {
  return (
    <VoterWrapper>
      <VoterTitle>Votador</VoterTitle>
    </VoterWrapper>
  );
};

export default Voter;
