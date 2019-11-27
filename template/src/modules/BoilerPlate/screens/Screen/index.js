/**
  @flow
*/

import React from 'react';
import {
  Container,
  Header,
  Title,
  SubTitle,
  Group,
  GroupLabel,
  ItemContainer,
  Info,
  ItemTitle,
  ItemAuthor,
} from './styles';
import Icon from 'react-native-vector-icons/Feather';

function Screen(props: { componentId: string }) {
  return (
    <Container>
      <Header>
        <Title>React-Native</Title>
        <SubTitle>BoilerPlate by GERLISON</SubTitle>
      </Header>
      <Group>
        <GroupLabel>NAVIGATION</GroupLabel>
        <ItemContainer>
          <Icon name="compass" size={32} color="#188fff" />
          <Info>
            <ItemTitle>REACT-NAVIGATION</ItemTitle>
            <ItemAuthor>REACT-NAVIGATION</ItemAuthor>
          </Info>
        </ItemContainer>
      </Group>
      <Group>
        <GroupLabel>STATE MANAGEMENT</GroupLabel>
        <ItemContainer>
          <Icon name="compass" size={32} color="#188fff" />
          <Info>
            <ItemTitle>REDUX</ItemTitle>
            <ItemAuthor>REDUXJS</ItemAuthor>
          </Info>
        </ItemContainer>
        <ItemContainer noborder>
          <Icon name="compass" size={32} color="#188fff" />
          <Info>
            <ItemTitle>REDUX-THUNK</ItemTitle>
            <ItemAuthor>REDUXJS</ItemAuthor>
          </Info>
        </ItemContainer>
        <ItemContainer noborder>
          <Icon name="compass" size={32} color="#188fff" />
          <Info>
            <ItemTitle>REDUX-PERSIST</ItemTitle>
            <ItemAuthor>RT2ZZ</ItemAuthor>
          </Info>
        </ItemContainer>
        <ItemContainer noborder>
          <Icon name="compass" size={32} color="#188fff" />
          <Info>
            <ItemTitle>RESELECT</ItemTitle>
            <ItemAuthor>REDUXJS</ItemAuthor>
          </Info>
        </ItemContainer>
      </Group>
      <Group>
        <GroupLabel>ICONOGRAPHY</GroupLabel>
        <ItemContainer>
          <Icon name="compass" size={32} color="#188fff" />
          <Info>
            <ItemTitle>REACT-NATIVE-VECTOR-ICONS</ItemTitle>
            <ItemAuthor>OBLADOR</ItemAuthor>
          </Info>
        </ItemContainer>
      </Group>
      <Group>
        <GroupLabel>TYPING</GroupLabel>
        <ItemContainer>
          <Icon name="compass" size={32} color="#188fff" />
          <Info>
            <ItemTitle>FLOW</ItemTitle>
            <ItemAuthor>FACEBOOK</ItemAuthor>
          </Info>
        </ItemContainer>
      </Group>
      <Group>
        <GroupLabel>UTILITIES</GroupLabel>
        <ItemContainer>
          <Icon name="compass" size={32} color="#188fff" />
          <Info>
            <ItemTitle>STYLED-COMPONENTS</ItemTitle>
            <ItemAuthor>STYLED-COMPONENTS</ItemAuthor>
          </Info>
        </ItemContainer>
        <ItemContainer>
          <Icon name="compass" size={32} color="#188fff" />
          <Info>
            <ItemTitle>LODASH</ItemTitle>
            <ItemAuthor>LODASH</ItemAuthor>
          </Info>
        </ItemContainer>
        <ItemContainer>
          <Icon name="compass" size={32} color="#188fff" />
          <Info>
            <ItemTitle>MOMENT</ItemTitle>
            <ItemAuthor>MOMENT</ItemAuthor>
          </Info>
        </ItemContainer>
      </Group>
      <Group>
        <GroupLabel>STORAGE</GroupLabel>
        <ItemContainer>
          <Icon name="compass" size={32} color="#188fff" />
          <Info>
            <ItemTitle>ASYNC-STORAGE</ItemTitle>
            <ItemAuthor>REACT-NATIVE-COMMUNITY</ItemAuthor>
          </Info>
        </ItemContainer>
      </Group>
    </Container>
  );
}

export default Screen;
