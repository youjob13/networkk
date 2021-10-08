import React, { ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { MessageReduxForm } from './Messages/MessageForm';
import DialogItem from './DialogItem/DialogItem';
import Message from './Messages/Message';
import classes from './Dialogs.module.css';
import { getDialogsPage } from '../../redux/usersSelectors';
import { sendMessage } from '../../redux/dialogsReducer';

const Dialogs = (): ReactElement => {
  const dispatch = useDispatch();
  const { dialogsData, messagesData } = useSelector(getDialogsPage);

  const addMessage = (values: any) => {
    dispatch(sendMessage(values.newMessage));
  };

  return (
    <div className={classes.dialogs}>
      <div className={classes.dialogsItems}>
        {dialogsData.map(item => (
          <DialogItem key={item.id} name={item.name} id={item.id} />
        ))}
      </div>
      <div className={classes.messagesBlock}>
        <div className={classes.messages}>
          {messagesData.map(item => (
            <Message key={item.id} message={item.message} />
          ))}
        </div>
        <MessageReduxForm onSubmit={addMessage} />
      </div>
    </div>
  );
};

export default Dialogs;
