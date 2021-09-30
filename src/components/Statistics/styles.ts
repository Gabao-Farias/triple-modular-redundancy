import styled from "styled-components";
import { PureWhite } from "../../utils";

export const Wrapper = styled.div`
  flex-direction: column;
`;

export const TitleWrapper = styled.div`
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h1``;

export const SubTitle = styled.h2``;

export const SuccessPercentageWrapper = styled.div`
  flex-direction: column;
  align-items: center;
  margin: 96px;
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
