import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import classes from "./Profile.module.css";
import {NavLink} from "react-router-dom";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
const Profile = () => {
  return<>
      <div className={classes.image}>
          <NavLink to="/" className={classes.edit_cover_btn}>Edit Cover</NavLink>
      </div>
       <ProfileInfo/>
      <MyPostsContainer/>
</>
}
export default Profile