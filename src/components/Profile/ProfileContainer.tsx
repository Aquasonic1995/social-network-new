import React, {useEffect} from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import classes from "./Profile.module.css";
import {NavLink} from "react-router-dom";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import axios from "axios";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
const ProfileContainer = () => {
    useEffect(() =>{
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
            .then(response => response.data)
    },[])
  return<>
      <div className={classes.image}>
          <NavLink to="/" className={classes.edit_cover_btn}>Edit Cover</NavLink>
      </div>
       <ProfileInfo/>
      <MyPostsContainer/>
</>
}
const mapStateToProps = (state: AppStateType) => {
    return {}
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);