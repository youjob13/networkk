import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input, Textarea } from "../../../common/FormsControls/FormsControls";
import classes from "../ProfileInfo.module.css";
import style from "../../../common/FormsControls/FormControls.module.css";

const ProfileDataForm = ({ error, handleSubmit, profile }: any) => (
  <form onSubmit={handleSubmit} className={classes.information}>
    <div>
      <p>
        <strong>FullName: </strong>
        <Field
          className={classes.inputInfo}
          validate={[]}
          name="fullName"
          component={Input}
          type="text"
          placeholder="FullName"
        />
      </p>
      <p>
        <strong>Looking for a job: </strong>
        <p>
          <Field name="lookingForAJob" type="checkbox" component={Input} />
        </p>
        <p>
          <Field
            className={classes.inputInfo}
            validate={[]}
            name="lookingForAJobDescription"
            type="text"
            component={Textarea}
          />
        </p>
      </p>
      <p>
        <strong>Info: </strong>
        <Field
          className={classes.inputInfo}
          validate={[]}
          name="aboutMe"
          type="text"
          component={Textarea}
        />
      </p>
      <div>
        <div className={classes.additionalInfo}>
          <strong>Контакты</strong>
          {Object.keys(profile.contacts).map((key) => {
            return (
              <div key={key}>
                <b>{key}:</b>
                <br />
                <Field
                  className={classes.inputInfo}
                  validate={[]}
                  name={`contacts.${key}`}
                  type="text"
                  component={Input}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
    {error && <div className={style.formSummaryError}>{error}</div>}
    <button type="button" className={classes.btnSaveEdit}>Save Changes</button>
  </form>
);

export const ProfileDataReduxForm  = reduxForm({ form: "profileInfo" })(
  ProfileDataForm
) as any;
