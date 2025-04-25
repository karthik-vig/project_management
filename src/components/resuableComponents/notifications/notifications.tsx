import { useEffect } from 'react';
import MsgNotification from "./components/MsgNotification";

const allNotificationMsgs: string[] = [];

type Props = {
    msg: string;
};

const AllNotifications = (props: Props) => {
    const {
        msg,
    } = props;

    useEffect(() => {
        allNotificationMsgs.push(msg);
    }, [msg]);

    setInterval(() => {
        allNotificationMsgs.unshift();
    }, 5000);

    return (
        <>
            {
                allNotificationMsgs.map((msg, idx) => {
                    return <MsgNotification msg={msg} idx={idx} />;
                })
            }
        </>
    );
};

export default AllNotifications;