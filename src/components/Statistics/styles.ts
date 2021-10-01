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

export const Title = styled.h1``;

export const SubTitle = styled.h3``;

export const SuccessPercentageWrapper = styled.div`
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 500px;
  /* margin: 96px; */
`;

export const SuccessTitle = styled.h2`
  font-size: 2rem;
`;

export const SuccessPercentage = styled.p`
  font-size: 4rem;
`;

export const TotalsWrapper = styled.div`
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  height: 300px;
`;

export const SubTotalsWrapper = styled.div`
  justify-content: center;
  flex-wrap: wrap;
`;

export const TotalWrapper = styled.div`
  flex-direction: column;
  align-items: center;
  border: 2px solid ${PureWhite};
  border-radius: 6px;
  padding: 6px;
  margin: 12px;
`;

export const Label = styled.h5``;

export const SubLabel = styled.h6``;

export const ChartsWrapper = styled.div`
  flex-direction: column;
  align-items: center;
  /* background-color: #000; */
  padding: 24px 0;
`;

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

export const ChartTitle = styled.h3`

`;

export const SubChartWrapper = styled.div`
  display: flex;
  width: ${defaultChartWidth}px;
  justify-content: center;
`;
