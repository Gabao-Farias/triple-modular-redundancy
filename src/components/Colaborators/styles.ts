import styled from 'styled-components';
import { GradientPrimary, GradientSecondary } from '../../utils';

export const Wrapper = styled.div`
  flex-direction: column;
  background: linear-gradient(0deg, ${GradientPrimary} 0%, ${GradientSecondary} 100%);
`;

export const Text = styled.p`
  font-weight: 300;
  font-size: 2rem;
  margin: 12px 0;
  text-align: center;
`;

export const ColaboratorsWrapper = styled.div`
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 12px 0;
`;

export const AvatarWrapper = styled.div`
  flex-direction: column;
  align-items: center;
`;

export const Avatar = styled.img`
  height: 100px;
  width: 100px;
  border-radius: 50px;
`;

export const Name = styled.p`
  margin: 6px;
`;
