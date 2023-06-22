const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE = 'UPDATE_MESSAGE';
type DialogsItemsType = {
    MessageDialogsItems: Array<MessageDialogsItemType>
    UserDialogsItems: Array<UserDialogsItemType>
    updateWordInMessagePage: string
}
type UserDialogsItemType = {
    src: string
    name: string,
    id: number,
}

type MessageDialogsItemType = {
    src: string
    message: string,
    message_time: string,
    className: string,
    id: number,
}
type addMessageActionType = {
    newEl: string
    type: string
    newWords: string
    newMes: string
}
const chatListAddMessageReducer = (state: DialogsItemsType, action: addMessageActionType) => {
    switch (action.type) {
        case ADD_MESSAGE :
            const newMessage = {
                src: "https://templates.envytheme.com/zust/default/assets/images/user/user-29.jpg",
                message: action.newMes,
                message_time: '7:45',
                className: "",
                id: 6,
            }
            state.MessageDialogsItems.push(newMessage)
            return state
        case UPDATE_MESSAGE :
            state.updateWordInMessagePage = action.newWords;
            return state
    }
}

export const addMessageActionCreator = (message: string) =>{
    return {type: 'ADD_MESSAGE', newMes: message}
}
export const updateMessageInProfileActionCreator = (updateWords: string) => {
    return {type: 'UPDATE_MESSAGE', newWords: updateWords}
}


export default chatListAddMessageReducer