import styled from 'styled-components';
import { ErrorColor, PureWhite, WarningColor } from '../../utils';

type LabelProps = {
  error?: boolean;
};

type ModuleProps = {
  error?: boolean;
};

export const Wrapper = styled.div`
  flex-direction: column;
`;

export const ResultsTitleWrapper = styled.div`
  flex-direction: column;
  align-items: center;
`;

export const ResultsTitle = styled.h1``;

export const ResultsSubTitle = styled.h3``;

export const ResultsWrapper = styled.div`
  flex-direction: column;
`;

export const Label = styled.h4<LabelProps>`
  background-color: ${({ error = false }) => error ? ErrorColor : 'transparent'};
  border-radius: 6px;
  padding: 2px 6px;
  font-weight: ${({ error = false }) => error ? 900 : 700};
`;

export const IterationWrapper = styled.div`
  flex-direction: column;
  border: 2px solid ${PureWhite};
  margin: 6px;
  padding: 6px 10px;
  border-radius: 10px;
`;

export const IterationIndex = styled.h2``;

export const ModulesWrapper = styled.div`
  overflow-x: auto;
  margin: 12px;
`;

export const ModuleWrapper = styled.div<ModuleProps>`
  flex-direction: column;
  border: 2px solid ${({ error = false }) => error ? WarningColor : PureWhite};
  background-color: ${({ error = false }) => error ? WarningColor : 'transparent'};
  margin: 6px;
  padding: 6px;
  border-radius: 6px;
`;
