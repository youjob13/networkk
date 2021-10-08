import { connect } from "react-redux";
import { addPost } from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const mapStateToProps = ({ profilePage: { postData, profile } }: any) => ({
  postData,
  photo: profile.photos.small,
});

export const MyPostsContainer = connect(mapStateToProps, { addPost })(MyPosts);
