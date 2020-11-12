import { connect } from "react-redux";
import { addPost } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

// const MyPostsContainer = () => {
//   return (
//     <StoreContext.Consumer>
//       {({ getState, dispatch }) => {
//         const addNewPost = () => {
//           dispatch(addPostActionCreator());
//         };
//         const changeNewPostText = (text) => {
//           dispatch(changeNewPostTextActionCreator(text));
//         };
//         return (
//           <MyPosts
//             posts={getState().profilePage.postData}
//             newsPostText={getState().profilePage.newsPostText}
//             addNewPost={addNewPost}
//             changeNewPostText={changeNewPostText}
//           />
//         );
//       }}
//     </StoreContext.Consumer>
//   );
// };

const mapStateToProps = ({ profilePage: { postData, profile } }) => ({
  postData,
  photo: profile.photos.small,
});

export const MyPostsContainer = connect(mapStateToProps, { addPost })(MyPosts);
