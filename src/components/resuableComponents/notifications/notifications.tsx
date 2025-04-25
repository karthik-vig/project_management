import { useEffect, useState } from "react";
import { createPortal } from 'react-dom';
import { 
    Notification,
    Badge,
} from '@mantine/core';
import {
    motion,
    AnimatePresence,
} from 'motion/react';

type Props = {
    msg: string;
    idx: number;
};

const MsgNotification = (props: Props) => {
    const {
        msg,
        idx,
    } = props;
    const [display, setDisplay] = useState(false);

    useEffect(() => {
        setDisplay(true);
        setTimeout(() => {
            setDisplay(false);
        }, 5000);
    }, []);

    const handleNotificationClose = () => {
        setDisplay(false);
    };

    return createPortal(
        <AnimatePresence>
            { display ?
            <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
            >
                {
                    <Notification
                        withBorder
                        color="red"
                        radius="md"
                        title="Current Count"
                        onClose={handleNotificationClose}
                        style={{
                            height: '75px',
                            width: '500px',
                        }}
                        key={idx}
                    >   
                        {msg}
                        <Badge color="green">Good Message</Badge>
                    </Notification>
                }
            </motion.div>
        : null }
        </AnimatePresence>,
        document.body
    )
};

export default MsgNotification;

