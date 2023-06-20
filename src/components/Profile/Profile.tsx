import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import classes from "./Profile.module.css";
import {NavLink} from "react-router-dom";

type messageType = {
    message: string
    countLike: number,
    id: number,
    src: string,
    user_name: string,
}
type PostPropsType={
    messageData: updatePostInProfileType;
    dispatch: Function,
}
type updatePostInProfileType = {
    messages: Array<messageType>

}

const Profile = (props: PostPropsType) => {
  return<>
      <div className={classes.image}>
          <NavLink to="/" className={classes.edit_cover_btn}>Edit Cover</NavLink>
      </div>
       <ProfileInfo/>
      <MyPosts messageData={props.messageData} dispatch={props.dispatch}/>
</>
}
export default Profile