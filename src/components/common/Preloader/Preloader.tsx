import React, { ReactElement } from 'react';
import preloader from '../../../assests/img/preloader.gif';
import classes from './Preloader.module.css';

const Preloader = (): ReactElement => (
  <img className={classes.preloader} src={preloader} alt="" />
);

export default Preloader;
