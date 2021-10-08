import React, { ReactElement } from 'react';

import classes from './Message.module.css';

const Message = ({ message }: { message: string }): ReactElement => (
  <div className={classes.message}>{message}</div>
);

export default Message;
