import React, { FC } from 'react';
import { Wrapper, Title, SuccessPercentageWrapper, SuccessPercentage, TotalsWrapper, SubTitle, TitleWrapper, Label, SubLabel, TotalWrapper, SuccessTitle, SubTotalsWrapper } from './styles';
// import { Wrapper } from './styles';

type Props = {
  statistics?: TMRResultStatistics;
};

const Statistics: FC<Props> = ({ statistics }) => {
  if (statistics)
    return (
      <Wrapper>
        <TitleWrapper>
          <Title>Statistics</Title>
        </TitleWrapper>
        <SuccessPercentageWrapper>
          <SubTitle>SuccessPercentage</SubTitle>
          <SuccessPercentage>{statistics?.general.successPercentage}%</SuccessPercentage>
        </SuccessPercentageWrapper>
        <TotalsWrapper>
          <SubTitle>Totals</SubTitle>
          <SubTotalsWrapper>
            <TotalWrapper>
              <Label>FailedModuleOutputs</Label>
              <SubTitle>{statistics.general.totals.failedModuleOutputs}</SubTitle>
            </TotalWrapper>
            <TotalWrapper>
              <Label>FailedVotingResults</Label>
              <SubTitle>{statistics.general.totals.failedVotingResults}</SubTitle>
            </TotalWrapper>
            <TotalWrapper>
              <Label>SuccessVotingResults</Label>
              <SubTitle>{statistics.general.totals.successVotingResults}</SubTitle>
            </TotalWrapper>
          </SubTotalsWrapper>
        </TotalsWrapper>
      </Wrapper>
    );

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Statistics</Title>
        <SubTitle>You must run before have the statistics generated!</SubTitle>
      </TitleWrapper>
    </Wrapper>
  );
};

export default Statistics;
