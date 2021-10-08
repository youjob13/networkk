import React from "react";
import { Field, reduxForm } from "redux-form";
import { Textarea } from "../../common/FormsControls/FormsControls";
import {
  required,
  maxLengthCreator,
} from "../../../utils/validators/validators";
import classes from "./MyPosts.module.css";

const maxLength150 = maxLengthCreator(150);

const MyPostsForm = ({ handleSubmit }: any) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="newPostText"
          component={Textarea}
          validate={[required, maxLength150]}
          className={classes.textarea}
          placeholder="Расскажите, что у Вас нового!"
        />
      </div>
      <div>
        <button type="button" className={classes.addPost}>Add post</button>
      </div>
    </form>
  );
};

export const MyPostsReduxForm = reduxForm({ form: "newPost" })(MyPostsForm);
