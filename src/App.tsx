import { useState } from 'react';
import { 
    createTheme, 
    MantineProvider, 
    Button, 
} from '@mantine/core';
import MsgNotification from './components/resuableComponents/notifications/notifications';


const theme = createTheme({});

function App() {
  const [notificationMsgs, setNotificationMsgs] = useState<string[]>([]);
  const [count, setCount] = useState(0);

  const handleButtonAction = () => {
    setNotificationMsgs((state) => {
        return [`hello ${count}`, ...state];
    });
    setCount(count + 1);
    // setTimeout(() => {
    //     setNotificationMsgs((state) => {
    //         const newState =  [...state];
    //         newState.pop();
    //         return newState;
    //     });
    // }, 5000);
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
        {   
            notificationMsgs.map((msg, idx) => {
                return <MsgNotification msg={msg} idx={idx}/>
            })
        }
    </MantineProvider>
  );
}

export default App;