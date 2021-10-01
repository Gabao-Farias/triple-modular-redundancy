import React, { FC } from 'react';
import { Avatar, AvatarWrapper, ColaboratorsWrapper, Wrapper, Text, Name } from './styles';

type Props = {};

const contributors = [
  {
    image: "https://avatars.githubusercontent.com/u/61251953?v=4",
    name: 'Gabão',
  },
  {
    image: "https://avatars.githubusercontent.com/u/42523274?v=4",
    name: 'Bruno Cabelleira dos Santos',
  }
];

const Colaborators: FC<Props> = () => {
  return (
    <Wrapper>
      <Text>
        The people who helped this project come true are:
      </Text>
      <ColaboratorsWrapper>
        {contributors.map((item) => (
          <AvatarWrapper>
            <Avatar src={item.image} />
            <Name>{item.name}</Name>
            </AvatarWrapper>
        ))}
      </ColaboratorsWrapper>
    </Wrapper>
  );
};

export default Colaborators;
