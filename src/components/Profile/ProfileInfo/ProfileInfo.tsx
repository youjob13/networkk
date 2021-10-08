import React, { FormEvent, ReactElement, useState } from "react";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import classes from "./ProfileInfo.module.css";
import { UserPhoto } from "../../common/UserPhoto/UserPhoto";
import uploadPhoto from "../../../assests/img/upload.png";
import { ProfileDataReduxForm } from "./ProfileDataForm/ProfileDataForm";

function Contact ({ contactTitle, contactValue }: any): ReactElement {
  return (
    <p className={classes.contacts}>
      <strong>{contactTitle}</strong>:{" "}
      <a className={classes.socialLink} href="/">
        {contactValue}
      </a>
    </p>
  );
};

const ProfileData = ({  status,
                        updateStatus,
                        activeEditMode,
                            profile,
                        isOwner,
                      }: any): ReactElement => {
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
                    type="button"
                    className={classes.btnContacts}
                    onClick={onAdditionalInfoClick}
                  >
                    hidden contacts
                  </button>
                ) : (
                  <button
                    type="button"
                    className={classes.btnContacts}
                    onClick={onAdditionalInfoClick}
                  >
                    expand contacts
                  </button>
                )}
              </div>
              {isContacts &&
              Object.keys(profile.contacts).map((key) => {
                if (
                  profile.contacts[key] !== null &&
                  profile.contacts[key].trim() !== ""
                ) {
                  return (
                    <Contact
                      key={key}
                      contactTitle={key}
                      contactValue={profile.contacts[key]}
                    />
                  );
                }
                return <></> // TODO: remove
              })}
            </div>
          </div>
        </div>
        {isOwner && (
          <button type="button" className={classes.btnChangeInfo} onClick={activeEditMode}>
            Edit
          </button>
        )}
      </div>
    </>
  );
};

const ProfileInfo = ({
  saveProfile,
  savePhoto,
  isOwner,
  profile,
  status,
  updateStatus,
}: any): ReactElement => {
  const [editMode, setEditMode] = useState(false);

  const activeEditMode = (): void => {
    setEditMode(true);
  };
  const onMainPhotoSelected = (event: FormEvent): void => {
    const target = event.target as HTMLFormElement;

    if (target.files.length) {
      savePhoto(target.files[0]);
    }
  };
  const onSubmit = (formData: FormData): any => {
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
            <label htmlFor="input__file" className={classes.inputFileButton}>
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

export default ProfileInfo;
