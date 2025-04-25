import { useState } from 'react';
import { 
    createTheme, 
    MantineProvider, 
    Button, 
} from '@mantine/core';
import AllNotifications from './components/resuableComponents/notifications/notifications';


const theme = createTheme({});

function App() {
//   const [notificationMsgs, setNotificationMsgs] = useState<string[]>([]);
  const [count, setCount] = useState(0);
  const [notificationMsg, setNotificationMsg] = useState<string>('');

  const handleButtonAction = () => {
    setNotificationMsg(`hello ${count}`);
    setCount(count + 1);
  }

  return (
    <MantineProvider theme={theme}>
        <Button
            onClick={handleButtonAction}
            variant="filled"
            size="sm"
            color="orange"
            radius="lg"
        >
            Increase count
        </Button>
        <AllNotifications msg={notificationMsg} />
    </MantineProvider>
  );
}

export default App;