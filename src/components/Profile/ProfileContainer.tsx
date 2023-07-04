import React, {useEffect} from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import classes from "./Profile.module.css";
import {NavLink, useParams} from "react-router-dom";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import axios from "axios";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import {setProfileUserAC} from "../../Redux/ProfilePageReducer";
import {userAPI} from "../API/api";
type PathParamsType = {
    userId: string,
}
type MapStateToPropsType = {
    userId?: number
    lookingForAJob?: boolean
    lookingForAJobDescription?: string
    fullName?: string
    contacts?: {
        github?: string
        vk?: string
        facebook?: string
        instagram?: string
        twitter?: string
        website?: string
        youtube?: string
        mainLink?: string
    }
    photos?: {
        small?: string
        large?: string
    }
}
type initialProfileType = {
    profile: null
}
type MapStateToPropsMainType = MapStateToPropsType | initialProfileType

type MapDispatchToPropsType = {
    setProfileUser: (profile: MapStateToPropsMainType) => void
}
type StatePropsType = MapStateToPropsType & MapDispatchToPropsType
// type PropsType = RouteComponentProps<PathParamsType> & StatePropsType

const ProfileContainer = (props:any) => {
    let { userId } = useParams();
    if (!userId) {
        userId = "2";
    }
    useEffect(() =>{

        userAPI.setProfileUser(userId).then(data => props.setProfileUser(data))

    },[])
  return<>
      <div className={classes.image}>
          <NavLink to="/" className={classes.edit_cover_btn}>Edit Cover</NavLink>
      </div>
      <ProfileInfo {...props}/>
      <MyPostsContainer/>
</>
}
const mapStateToProps = (state: AppStateType):MapStateToPropsMainType => {
    return {
        profile: state.ProfilePage.profile,
    }
}
const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        setProfileUser: (profile: initialProfileType) => {
            dispatch(setProfileUserAC(profile))
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);