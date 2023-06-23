import React from 'react';
import Dialogs from "./Dialogs";
import {addMessageActionCreator, updateMessageInDialogsActionCreator} from "../../Redux/DialogsPageAddMessageReducer";
import {stateType} from "../../Redux/store";
import {connect} from "react-redux";

const mapStateToProps = (state:stateType) =>{
return{
    UserDialogsItems: state.DialogsPage.UserDialogsItems,
    MessageDialogsItems: state.DialogsPage.MessageDialogsItems
}
}
const mapDispatchToProps = (dispatch: any) => {
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