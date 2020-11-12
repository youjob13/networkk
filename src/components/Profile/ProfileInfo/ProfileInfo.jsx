import React from "react";
import Preloader from "../../common/preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import classes from "./ProfileInfo.module.css";
import { UserPhoto } from "../../common/UserPhoto/UserPhoto";
import uploadPhoto from "../../../assests/img/upload.png";
import { useState } from "react";
import { useEffect } from "react";
import { ProfileDataReduxForm } from "./ProfileDataForm/ProfileDataForm";

const ProfileInfo = ({
  saveProfile,
  savePhoto,
  isOwner,
  profile,
  status,
  updateStatus,
}) => {
  const [editMode, setEditMode] = useState(false);
  const activeEditMode = () => {
    setEditMode(true);
  };

  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) savePhoto(e.target.files[0]);
  };
  const onSubmit = (formData) => {
    saveProfile(formData).then(() => {
      setEditMode(false);
    });
  };
  return (
    <div className={classes.profileInfo}>
      <div className={classes.userPhoto}>
        <UserPhoto photo={profile.photos.large} />
        {isOwner && (
          <div className={classes.inputWrapper}>
            <input
              className={classes.inputFile}
              id="input__file"
              type="file"
              name="file"
              onChange={onMainPhotoSelected}
            />
            <label for="input__file" className={classes.inputFileButton}>
              <span className={classes.inputFileIconWrapper}>
                <img src={uploadPhoto} alt="Выбрать файл" width="25" />
              </span>
              <span className={classes.inputFileButtonText}>Выберите файл</span>
            </label>
          </div>
        )}
      </div>
      <div className={classes.profileUserInfo}>
        {editMode ? (
          <ProfileDataReduxForm
            profile={profile}
            initialValues={profile}
            onSubmit={onSubmit}
          />
        ) : (
          <ProfileData
            updateStatus={updateStatus}
            status={status}
            activeEditMode={activeEditMode}
            isOwner={isOwner}
            profile={profile}
          />
        )}
      </div>
    </div>
  );
};
const ProfileData = ({
  status,
  updateStatus,
  activeEditMode,
  profile,
  isOwner,
}) => {
  const [isContacts, setIsContacts] = useState(false);
  const onAdditionalInfoClick = () => {
    setIsContacts(!isContacts);
  };
  return (
    <>
      <div className={classes.name}>{profile.fullName.toUpperCase()}</div>
      {isOwner ? (
        <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />
      ) : (
        <div>{status}</div>
      )}

      <div className={classes.information}>
        <div>
          <div>
            <p>
              <strong>Looking for a job: </strong>
              <span>{profile.lookingForAJob ? "Yes" : "No"}</span>
            </p>
            {profile.lookingForAJobDescription && (
              <p>
                <strong>Job Description: </strong>
                <span>{profile.lookingForAJobDescription}</span>
              </p>
            )}
            <p>
              <strong>Info: </strong>
              {profile.aboutMe}
            </p>
          </div>
          <div>
            <div className={classes.additionalInfo}>
              <div>
                <strong>Контакты</strong>
                {isContacts ? (
                  <button
                    className={classes.btnContacts}
                    onClick={onAdditionalInfoClick}
                  >
                    hidden contacts
                  </button>
                ) : (
                  <button
                    className={classes.btnContacts}
                    onClick={onAdditionalInfoClick}
                  >
                    expand contacts
                  </button>
                )}
              </div>
              {isContacts &&
                Object.keys(profile.contacts).map((key) => {
                  console.log(profile.contacts[key]);
                  if (
                    profile.contacts[key] !== null &&
                    profile.contacts[key].trim() !== ""
                  )
                    return (
                      <Contact
                        key={key}
                        contactTitle={key}
                        contactValue={profile.contacts[key]}
                      />
                    );
                })}
            </div>
          </div>
        </div>
        {isOwner && (
          <button className={classes.btnChangeInfo} onClick={activeEditMode}>
            Edit
          </button>
        )}
      </div>
    </>
  );
};

const Contact = ({ contactTitle, contactValue }) => {
  return (
    <p className={classes.contacts}>
      <strong>{contactTitle}</strong>:{" "}
      <a className={classes.socialLink} href="/">
        {contactValue}
      </a>
    </p>
  );
};

export default ProfileInfo;
