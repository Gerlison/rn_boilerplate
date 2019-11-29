//@flow
import * as React from 'react';
import {Container, Logo} from './styles';

function Splash(props: Props): React.Element<any> {
  const [treeHydrated, setTreeHydrated] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      setTreeHydrated(true)
    }, 500);
  }, [props.bootstrapped])

  if (treeHydrated)
    return props.children

  return (
    <Container>
      <Logo />
    </Container>
  );
}

type Props = {
  bootstrapped: boolean,
  children: React.Element<any>
}

export default Splash;