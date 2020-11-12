import React from "react";
import { MessageReduxForm } from "./Messages/MessageForm";

import DialogItem from "./DialogItem/DialogItem";
import Message from "./Messages/Message";

import classes from "./Dialogs.module.css";

const Dialogs = ({
  dialogsPage: { dialogsData, messagesData },
  sendMessage,
}) => {
  const addMessage = (values) => {
    sendMessage(values.newMessage);
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsData.map((item) => (
          <DialogItem key={item.id} name={item.name} id={item.id} />
        ))}
      </div>
      <div className={classes.messagesBlock}>
        <div className={classes.messages}>
          {messagesData.map((item) => (
            <Message key={item.id} message={item.message} id={item.id} />
          ))}
        </div>
        <MessageReduxForm onSubmit={addMessage} />
      </div>
    </div>
  );
};

export default Dialogs;
