import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
`;

export const Header = styled.View`
  width: 100%;
  padding: 64px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text`
  font-size: 28px;
  color: #2555ff;
`;
export const SubTitle = styled.Text`
  font-size: 14px;
  color: #666;
  font-weight: 300;
`;

export const Group = styled.View`
  margin-left: 24px;
`;
export const GroupLabel = styled.Text`
  font-size: 14px;
  color: #666;
  font-weight: 300;
  margin-top: 28px;
  margin-bottom: 16px;
`;

export const ItemContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 14px;
`;
export const Info = styled.View`
  margin-left: 16px;
`;
export const ItemTitle = styled.Text`
  font-size: 16px;
  color: #000;
  font-weight: 300;
  margin-bottom: 4px;
`;
export const ItemAuthor = styled.Text`
  font-size: 11px;
  color: #333;
  font-weight: 300;
`;
