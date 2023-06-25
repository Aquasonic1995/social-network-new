import React from 'react';
import {
    AddMessageInProfilePage,
    addPostActionCreator,
    updatePostInProfileActionCreator
} from '../../../Redux/ProfilePageAddPostReducer';
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {AppStateType} from "../../../Redux/redux-store";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    messageData: Array<AddMessageInProfilePage>
}
type mapDispatchToPropsType = {
    addPost: (post: string) => void
    updatePostInProfilePage: (updateWords: string) => void
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        messageData: state.ProfilePage.messages
    }
}
const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {

    return {
        addPost: (post: string) => {
            dispatch(addPostActionCreator(post))
        },
        updatePostInProfilePage: (updateWords: string) => {
            dispatch(updatePostInProfileActionCreator(updateWords))
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer
