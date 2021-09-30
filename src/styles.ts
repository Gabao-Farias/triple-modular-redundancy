import styled from 'styled-components';
import { GradientPrimary, GradientSecondary } from './utils';

export const Wrapper = styled.div`
  flex-direction: column;
  background: rgb(0,0,0);
  background: linear-gradient(352deg, ${GradientSecondary} 20%, ${GradientPrimary} 100%);
`;

export const ConfigTitle = styled.h2``;

export const ConfigWrapper = styled.div`
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`;

export const RunButton = styled.button`
  margin: 24px;
  background: rgb(0,0,0);
  background-color: #00000044;
  border-radius: 6px;
  padding: 24px;
  font-size: 2rem;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    background-color: #ffffff44;
  }
`;
