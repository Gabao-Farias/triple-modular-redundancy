import React, { FC } from 'react';
import { Bar, BarChart, CartesianGrid, Legend, ReferenceLine, Tooltip, XAxis, YAxis } from 'recharts';
import TMRResult from '../../lib/tmr/TMRResult';
import { PureWhite, WarningColor } from '../../utils';
import { SubTitle, SubWrapper, TitleWrapper, Title, Topic, TopicWrapper, Wrapper, PercentagesWrapper, PercentageWrapper, Label, SubLabel, TotalsWrapper, TotalWrapper, TotalsSubWrapper, ChartWrapper, SubChartWrapper, ChartArrayWrapper, ChartTitle } from './styles';

type Props = {
  benchmarkingResults?: TMRResult[];
};

const Benchmarking: FC<Props> = ({ benchmarkingResults }) =>
  benchmarkingResults
  ? (
    <Wrapper>
      <TitleWrapper>
        <Title>Benchmark</Title>
        <SubTitle>over different voting methods</SubTitle>
      </TitleWrapper>
      <SubWrapper>
        <TopicWrapper>
          <Topic>SuccessPercentage</Topic>
        </TopicWrapper>
        <PercentagesWrapper>
          {benchmarkingResults.map((item) => (
            <PercentageWrapper>
              <Label>{item.votingMethod}</Label>
              <SubLabel>{item.statistics?.general.successPercentage.toFixed(2)}%</SubLabel>
            </PercentageWrapper>
          ))}
        </PercentagesWrapper>
      </SubWrapper>
      <SubWrapper>
        <TopicWrapper>
          <Topic>Totals</Topic>
        </TopicWrapper>
        <TotalsWrapper>
          {benchmarkingResults.map((item) => (
            <TotalsSubWrapper>
              <TotalWrapper>
                <Label>{item.votingMethod}</Label>
                <Label>failedModuleOutputs</Label>
                <SubLabel>{item.statistics?.general.totals.failedModuleOutputs}</SubLabel>
              </TotalWrapper>
              <TotalWrapper>
                <Label>{item.votingMethod}</Label>
                <Label>failedVotingResults</Label>
                <SubLabel>{item.statistics?.general.totals.failedVotingResults}</SubLabel>
              </TotalWrapper>
              <TotalWrapper>
                <Label>{item.votingMethod}</Label>
                <Label>successVotingResults</Label>
                <SubLabel>{item.statistics?.general.totals.successVotingResults}</SubLabel>
              </TotalWrapper>
            </TotalsSubWrapper>
          ))}
        </TotalsWrapper>
      </SubWrapper>
      <SubWrapper>
        <TopicWrapper>
          <Topic>Charts</Topic>
        </TopicWrapper>
        <ChartArrayWrapper>
          {benchmarkingResults.map((item) => (
            <ChartWrapper>
              <ChartTitle>failedModuleOutputs ({item.votingMethod})</ChartTitle>
              <SubChartWrapper>
                <BarChart
                  width={800}
                  height={300}
                  data={item.statistics?.statisticsPerIteration}
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
          ))}
        </ChartArrayWrapper>
      </SubWrapper>
    </Wrapper>
  ) : null;

export default Benchmarking;
