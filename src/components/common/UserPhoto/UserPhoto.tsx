import React from 'react';
import classes from './UserPhoto.module.css';
import userPhotoDefault from '../../../assests/img/user.png';

export const UserPhoto = ({ photo }: { photo: string }) => (
  <img className={classes.avatar} src={photo || userPhotoDefault} alt="" />
);
