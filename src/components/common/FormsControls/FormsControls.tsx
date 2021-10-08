import React, { ReactElement } from 'react';
import classes from './FormControls.module.css';

const FormControl = ({
  meta: { touched, error },
  children,
}: any): ReactElement => {
  const hasError = touched && error;
  return (
    <div className={`${classes.formControl} ${hasError ? classes.error : ''}`}>
      <div>{children}</div>
      {hasError && <span>{error}</span>}
    </div>
  );
};

export const Input = (props: any): ReactElement => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export const Textarea = (props: any): ReactElement => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};
