import styled from "styled-components";
import { PureWhite } from "../../utils";

const defaultChartWidth = 850;

export const Wrapper = styled.div`
  flex-direction: column;
  padding-top: 48px;
`;

export const TitleWrapper = styled.div`
  flex-direction: column;
  align-items: center;
`;

export const SubWrapper = styled.div`
  flex-direction: column;
  padding: 24px 0;
  justify-content: center;
`;

export const Title = styled.h1``;

export const SubTitle = styled.h3``;

export const TopicWrapper = styled.div`
  justify-content: center;
  padding: 24px;
`;

export const Topic = styled.h2``;

export const PercentagesWrapper = styled.div`
  justify-content: space-evenly;
`;

export const TotalsWrapper = styled.div`
  justify-content: space-evenly;
`;

export const TotalsSubWrapper = styled.div`
  flex-direction: column;
`;

export const PercentageWrapper = styled.div`
  flex-direction: column;
  align-items: center;
  border: 2px solid ${PureWhite};
  border-radius: 6px;
  padding: 6px;
  margin: 12px;
`;

export const TotalWrapper = styled.div`
  flex-direction: column;
  align-items: center;
  border: 2px solid ${PureWhite};
  border-radius: 6px;
  padding: 6px;
  margin: 12px;
`;

export const Label = styled.h4``;

export const SubLabel = styled.h5``;

export const ChartWrapper = styled.div`
  width: 100%;
  padding-top: 24px;
  flex-direction: column;
  align-items: center;
  overflow-x: auto;

  @media (max-width: ${defaultChartWidth}px){
    align-items: unset;
  }
`;

export const SubChartWrapper = styled.div`
  display: flex;
  width: ${defaultChartWidth}px;
  justify-content: center;
`;

export const ChartArrayWrapper = styled.div`
  flex-direction: column;
`;

export const ChartTitle = styled.h3``;
