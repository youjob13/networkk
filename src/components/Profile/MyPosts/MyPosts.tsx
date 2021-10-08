import React from "react";
import { MyPostsReduxForm } from "./MyPostsForm";

import Post from "./Post/Post";
import classes from "./MyPosts.module.css";

const MyPosts = React.memo(({ addPost, postData, photo }: any) => {
  const addNewPost = (values: any) => {
    addPost(values.newPostText);
  };

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <MyPostsReduxForm onSubmit={addNewPost} />
      <div className={classes.item}>
        {[...postData].reverse().map((item) => (
          <Post
            key={item.id}
            photo={photo}
            message={item.message}
            likeCount={item.likeCount}
          />
        ))}
      </div>
    </div>
  );
});

export default MyPosts;
