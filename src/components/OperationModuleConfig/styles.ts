import styled from 'styled-components';

export const Wrapper = styled.div`
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2``;

export const InputWrapper = styled.div`
  flex-direction: column;
  padding: 16px;
  margin: 12px;
  border: 2px solid #eee;
  background-color: #f16613;
  border-radius: 12px;
`;

export const SubWrapper = styled.div`
  flex-direction: column;
  align-items: center;
`;

export const Label = styled.h4``;

export const SubLabel = styled.h6``;

export const TextInput = styled.input`
  border: 2px solid #eee;
  border-radius: 6px;
  width: 50px;
  padding: 6px;
  margin: 4px;
  background-color: transparent;
`;

export const SelectInput = styled.input`
  border: 2px solid #eee;
  border-radius: 6px;
  width: 100px;
  padding: 6px;
  margin: 4px;
  background-color: transparent;
`;

export const Select = styled.select`
  outline: none;
  border: 2px solid #eee;
  border-radius: 6px;
  width: 100px;
  padding: 6px;
  margin: 4px;
  background-color: transparent;

  color: #eee;
`;

export const Option = styled.option`
  color: #000;
`;
