import styled from 'styled-components';
import { Primary } from '../../utils';

export const Wrapper = styled.div`
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2``;

export const InputWrapper = styled.div`
  flex-direction: column;
  padding: 16px;
  margin: 12px;
  border: 2px solid #f7f7f7;
  background-color: ${Primary};
  border-radius: 12px;
  -webkit-box-shadow: 5px 5px 20px -4px #000000; 
  box-shadow: 5px 5px 20px -4px #000000;
`;

export const SubWrapper = styled.div`
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.h4``;

export const SubLabel = styled.h6``;

export const TextInput = styled.input`
  border: 2px solid #f7f7f7;
  border-radius: 6px;
  width: 50px;
  padding: 6px;
  margin: 4px;
  background-color: transparent;
`;

export const SelectInput = styled.input`
  border: 2px solid #f7f7f7;
  border-radius: 6px;
  width: 100px;
  padding: 6px;
  margin: 4px;
  background-color: transparent;
`;

export const Select = styled.select`
  outline: none;
  border: 2px solid #f7f7f7;
  border-radius: 6px;
  width: 100px;
  padding: 6px;
  margin: 4px;
  background-color: transparent;

  color: #f7f7f7;
`;

export const Option = styled.option`
  color: #000;
`;
