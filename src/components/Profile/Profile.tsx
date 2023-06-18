import React from "react";
import MyPost from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return<>
      <div className={s.image}>ava+desc</div>
      <MyPost/>
</>
}
export default Profile