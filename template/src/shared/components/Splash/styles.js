import styled from "styled-components/native";
import { Container as GenericContainer } from '../../styles/general';

export const Container = styled(GenericContainer)`
    align-items: center;
    justify-content: center;
    background-color: #FFF;
`;

export const Logo = styled.Image.attrs(props => ({
    source: require('~images/React-icon.png'),
    redizeMode: 'contain'
}))`
    width: 100px;
    height: 100px;
`;