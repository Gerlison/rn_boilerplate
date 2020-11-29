import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

const MOCK = [
  {
    id: 1,
    label: 'NAVIGATION',
    items: [
      {
        id: 1,
        title: 'REACT-NAVIGATION',
        author: 'REACT-NAVIGATION',
      },
    ],
  },
  {
    id: 2,
    label: 'STATE MANAGEMENT',
    items: [
      {
        id: 1,
        title: 'REDUX',
        author: 'REDUXJS',
      },
      {
        id: 2,
        title: 'REDUX-SAGA',
        author: 'REDUX-SAGA',
      },
    ],
  },
  {
    id: 3,
    label: 'ICONOGRAPHY',
    items: [
      {
        id: 1,
        title: 'REACT-NATIVE-VECTOR-ICONS',
        author: 'OBLADOR',
      },
    ],
  },
  {
    id: 4,
    label: 'UTILITIES',
    items: [
      {
        id: 1,
        title: 'STYLED-COMPONENTS',
        author: 'STYLED-COMPONENTS',
      },
    ],
  },
];

const Sample = () => (
  <Container>
    <Header>
      <Title>React-Native</Title>
      <SubTitle>BoilerPlate by GERLISON</SubTitle>
    </Header>
    {MOCK.map((group) => (
      <Group key={group.id}>
        <GroupLabel>{group.label}</GroupLabel>

        {group.items.map((item) => (
          <ItemContainer key={item.id}>
            <Icon name="compass" size={32} color="#188fff" />
            <Info>
              <ItemTitle>{item.title}</ItemTitle>
              <ItemAuthor>{item.author}</ItemAuthor>
            </Info>
          </ItemContainer>
        ))}
      </Group>
    ))}
  </Container>
);

const Container = styled.ScrollView`
  flex: 1;
`;

const Header = styled.View`
  width: 100%;
  padding: 64px;
  align-items: center;
  justify-content: center;
`;

const Title = styled.Text`
  font-size: 28px;
  color: #2555ff;
`;

const SubTitle = styled.Text`
  font-size: 14px;
  color: #666;
  font-weight: 300;
`;

const Group = styled.View`
  margin-left: 24px;
`;

const GroupLabel = styled.Text`
  font-size: 14px;
  color: #666;
  font-weight: 300;
  margin-top: 28px;
  margin-bottom: 16px;
`;

const ItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 14px;
`;

const Info = styled.View`
  margin-left: 16px;
`;

const ItemTitle = styled.Text`
  font-size: 16px;
  color: #000;
  font-weight: 300;
  margin-bottom: 4px;
`;

const ItemAuthor = styled.Text`
  font-size: 11px;
  color: #333;
  font-weight: 300;
`;

export default Sample;
