import React, { ReactElement } from 'react';
import { Field, reduxForm } from 'redux-form';
import {
  maxLengthCreator,
  required,
} from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FormsControls';

import classes from '../Dialogs.module.css';

const maxLength250 = maxLengthCreator(250);

const MessageForm = ({ handleSubmit }: any): ReactElement => (
  <form onSubmit={handleSubmit}>
    <div>
      <Field
        name="newMessage"
        validate={[required, maxLength250]}
        component={Textarea}
        className={classes.textarea}
        placeholder="Напишите сообщение"
      />
    </div>
    <div>
      <button type="button" className={classes.sendMessage}>
        Send Message
      </button>
    </div>
  </form>
);

export const MessageReduxForm = reduxForm({ form: 'MessageForm' })(MessageForm);
