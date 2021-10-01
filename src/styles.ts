import styled from 'styled-components';
import { GradientPrimary, GradientSecondary } from './utils';

export const Wrapper = styled.div`
  flex-direction: column;
  background: rgb(0,0,0);
  background: linear-gradient(352deg, ${GradientSecondary} 20%, ${GradientPrimary} 100%);
  padding: 12px 6px;
`;

export const ConfigTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

export const ConfigWrapper = styled.div`
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  min-height: 400px;
`;

export const ButtonWrapper = styled.div`
  justify-content: center;
`;

export const RunButton = styled.button`
  display: flex;
  justify-content: center;
  margin: 24px;
  background: rgb(0,0,0);
  background-color: #00000099;
  border-radius: 6px;
  padding: 24px;
  font-size: 2rem;
  transition: 0.3s;

  &:hover {
    cursor: pointer;
    background-color: #ffffff55;
  }
`;
