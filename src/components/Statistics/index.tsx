import React, { FC } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ReferenceLine, Tooltip, XAxis, YAxis } from 'recharts';
import { PureWhite, WarningColor } from '../../utils';
import { Wrapper, Title, SuccessPercentageWrapper, SuccessPercentage, TotalsWrapper, SubTitle, TitleWrapper, Label, TotalWrapper, SubTotalsWrapper, ChartsWrapper, ChartWrapper, ChartTitle, SubChartWrapper } from './styles';

type Props = {
  statistics?: TMRResultStatistics;
};

// const retrieveChartFormattedData = (): BrushBarChartDataType[] => {

// };

const Statistics: FC<Props> = ({ statistics }) => {
  if (statistics)
    return (
      <Wrapper>
        <TitleWrapper>
          <Title>Statistics</Title>
        </TitleWrapper>
        <SuccessPercentageWrapper>
          <SubTitle>SuccessPercentage</SubTitle>
          <SuccessPercentage>{statistics?.general.successPercentage.toFixed(2)}%</SuccessPercentage>
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
        <ChartsWrapper>
          <SubTitle>Charts</SubTitle>
          <ChartTitle>ModulesStatusByIteration</ChartTitle>
          <ChartWrapper>
            <SubChartWrapper>
              <BarChart
                width={800}
                height={300}
                data={statistics.statisticsPerIteration}
                margin={{
                  top: 5,
                  right: 30,
                  left: 20,
                  bottom: 5,
                }}
              >
                <Tooltip />
                <CartesianGrid strokeDasharray="12 8" />
                <XAxis stroke={PureWhite} dataKey="iteration" />
                <YAxis stroke={PureWhite} />
                <Legend verticalAlign="bottom"  wrapperStyle={{ lineHeight: '40px' }} />
                <ReferenceLine y={0} stroke="#000" />
                <Bar dataKey="failedModuleOutputs" fill={WarningColor} />
              </BarChart>
            </SubChartWrapper>
          </ChartWrapper>
        </ChartsWrapper>
      </Wrapper>
    );

  return (
    <Wrapper>
      <TitleWrapper>
        <Title>Statistics</Title>
        <SubTitle>You must run to generate statistics!</SubTitle>
      </TitleWrapper>
    </Wrapper>
  );
};

export default Statistics;
