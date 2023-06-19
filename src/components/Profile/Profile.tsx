import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import s from "./Profile.module.css";

const Profile = () => {
  return<>
      <div className={s.image}>ava+desc</div>
      <MyPosts/>
</>
}
export default Profile