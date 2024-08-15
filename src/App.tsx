
import { MantineProvider } from '@mantine/core'
import { theme } from './theme';
import Router from './routes';

import '@mantine/core/styles.css';

const App = () => {
  return (
    <MantineProvider theme={theme} defaultColorScheme='auto'>
      <Router />
    </MantineProvider>
  );
}

export default App;