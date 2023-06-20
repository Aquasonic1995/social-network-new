import React from 'react';
import {addPostActionCreator, updatePostInProfileActionCreator} from '../../../Redux/ProfilePageAddPostReducer';
import {stateType} from "../../../Redux/store";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

const mapStateToProps = (state: stateType) => {
    return {
        messageData: state.ProfilePage.messages
    }
}
const mapDispatchToProps = (dispatch: any) => {

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
