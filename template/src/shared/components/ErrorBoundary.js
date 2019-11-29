//@flow
import * as React from 'react';
import { ScrollView } from 'react-native'
import { Container, Text } from "../styles/general";

type Props = {
  children: React.Element<any>
}

type State = {
  hasError: boolean,
  error: Object,
  errorInfo: Object 
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error: Object) {
    return {hasError: true, error};
  }

  componentDidCatch(error: Object, errorInfo: Object) {
    // logErrorToMyService(error, errorInfo);
    this.setState({errorInfo})
  }

  render() {
    const { hasError, error, errorInfo } = this.state;
    if (hasError) {
      return (
        <ScrollView>
          <Container style={{justifyContent: 'center', padding: 18}}>
            <Text weight="BOLD" size="LARGER" color="DANGER">
              Algo de errado não está certo!
            </Text>
            <Text>{error.toString()}</Text>
            <Text color="SECUNDARY_LIGHT">
              {errorInfo && JSON.stringify(errorInfo)}
            </Text>
          </Container>
        </ScrollView>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
