import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

type PostPropsType={
    messageData: Array<Object>;
}
const Profile = (props: PostPropsType) => {
  return<>
       <ProfileInfo/>
      <MyPosts messageData={props.messageData} />
</>
}
export default Profile