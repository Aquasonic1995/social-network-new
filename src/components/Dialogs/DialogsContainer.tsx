import React from 'react';
import Dialogs from "./Dialogs";
import {
    addMessageActionCreator, MessageDialogsItemType,
    updateMessageInDialogsActionCreator,
    UserDialogsItemType
} from "../../Redux/DialogsPageAddMessageReducer";
import {stateType} from "../../Redux/store";
import {connect} from "react-redux";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";

type mapStateToPropsType = {
    UserDialogsItems: Array<UserDialogsItemType>
    MessageDialogsItems: Array<MessageDialogsItemType>
    updateWordInMessagePage: string
}
type mapDispatchToPropsType = {
    addMessage: (message: string) => void
    updateWordsInDialogs: (updateWordsInDialogs: string) => void
}
const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
return{
    UserDialogsItems: state.DialogsPage.UserDialogsItems,
    MessageDialogsItems: state.DialogsPage.MessageDialogsItems,
    updateWordInMessagePage: state.ProfilePage.updatePostInProfile
}
}
const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
    addMessage:(message:string) =>{
        dispatch(addMessageActionCreator(message))
    },
        updateWordsInDialogs:(text:string)=>
            dispatch(updateMessageInDialogsActionCreator(text))
    }
}
const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer;