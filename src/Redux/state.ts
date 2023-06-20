import classes from "../components/Dialogs/Dialogs.module.css";

type messageType = {
    message: string
    countLike: number,
    id: number,
    src: string,
    user_name: string,
}
type MessagesType = {
    messages: Array<messageType>
    updatePostInProfile: string
}
type PropsDialogsItemsType = {
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

type cardFriendType = {
    cardAvatar: string,
    cardBg: string,
    user_name: string,
    id: number,
}
type cardFriendsType = {
    cardFriends: Array<cardFriendType>
}
type stateType = {
    ProfilePage: MessagesType
    MessagePage: PropsDialogsItemsType
    FriendsPage: cardFriendsType
}
type storeType = {
    _state: stateType,
    dispatch: Function,
    getState(): stateType,
}
type dispatchActionType = {
    newEl: string
    type: string
    newWords: string
    newMes: string
}
const store: storeType = {
    _state: {
        ProfilePage: {
            messages: [
                {
                    user_name: "Julie R. Morley",
                    message: 'Done rut con leo ege males. Nella quits lorem ut libero dalesman fugitive. Done rut-rum tongue' +
                        ' leo wget dalesman. Done rut-rum tongue leo wget dalesman. Present sapien massa convallis a pellentesq' +
                        'ue nec egestas non nisi. Curabitur non nulla sit amet nisl tempus convallis quis.',
                    countLike: 5,
                    id: 1,
                    src: 'https://templates.envytheme.com/zust/default/assets/images/user/user-2.jpg',
                },
                {
                    user_name: "Herta Smith",
                    message: 'hello how are you?',
                    countLike: 8,
                    id: 2,
                    src: 'https://templates.envytheme.com/zust/default/assets/images/user/user-11.jpg',
                },
            ],
            updatePostInProfile: '',
        },
        MessagePage: {
            UserDialogsItems: [
                {
                    src: "https://templates.envytheme.com/zust/default/assets/images/user/user-13.jpg",
                    name: "Matthew Voss",
                    id: 1,
                },
                {
                    src: "https://templates.envytheme.com/zust/default/assets/images/user/user-29.jpg",
                    name: "Lolita",
                    id: 2,

                },
                {
                    src: "https://templates.envytheme.com/zust/default/assets/images/user/user-28.jpg",
                    name: "Alex Piter",
                    id: 3,

                },
                {
                    src: "https://templates.envytheme.com/zust/default/assets/images/user/user-10.jpg",
                    name: "James Smith",
                    id: 4,
                },
            ],
            MessageDialogsItems: [
                {
                    src: "https://templates.envytheme.com/zust/default/assets/images/user/user-29.jpg",
                    message: "Hello, dear I want talk to you?",
                    message_time: "7 45 АМ",
                    className: "",
                    id: 1,
                },
                {
                    src: "https://templates.envytheme.com/zust/default/assets/images/user/user-13.jpg",
                    message: "Said how can I cooperate with you",
                    message_time: "8 45 АМ",
                    className: classes.chat__left,
                    id: 2,
                },
                {
                    src: "https://templates.envytheme.com/zust/default/assets/images/user/user-28.jpg",
                    message: "Hello, dear I want talk to you?",
                    message_time: "9 45 АМ",
                    className: "",
                    id: 3,
                },
                {
                    src: "https://templates.envytheme.com/zust/default/assets/images/user/user-28.jpg",
                    message: "I need some ideas from you about my design",
                    message_time: "10 45 АМ",
                    className: classes.chat__left,
                    id: 4,
                }
            ],
            updateWordInMessagePage: '',
        },
        FriendsPage: {
            cardFriends: [
                {
                    cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-1.jpg',
                    cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-1.jpg',
                    user_name: 'Jose Marroquin',
                    id: 1
                },
                {
                    cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-2.jpg',
                    cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-2.jpg',
                    user_name: 'Myrtle Lewis',
                    id: 2
                },
                {
                    cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-3.jpg',
                    cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-3.jpg',
                    user_name: 'Howard Tam',
                    id: 3
                },
                {
                    cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-4.jpg',
                    cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-4.jpg',
                    user_name: 'Kimberly Blum',
                    id: 4
                },
                {
                    cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-5.jpg',
                    cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-5.jpg',
                    user_name: 'Mary Mercado',
                    id: 5
                },
                {
                    cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-6.jpg',
                    cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-6.jpg',
                    user_name: 'Robert Ward',
                    id: 6
                }
            ],
        }
    },
    getState(): stateType {
        return this._state
    },
    dispatch(action: dispatchActionType) {
        if (action.type === ADD_POST) {
            const newPost = {
                user_name: "Julie R. Morley",
                message: action.newEl,
                countLike: 0,
                src: 'https://templates.envytheme.com/zust/default/assets/images/user/user-16.jpg',
                id: 5,
            }
            this._state.ProfilePage.messages.unshift(newPost)
        } else if (action.type === UPDATE_POST) {
            this._state.ProfilePage.updatePostInProfile = action.newWords;
        } else if (action.type === ADD_MESSAGE) {
            const newMessage = {
                src: "https://templates.envytheme.com/zust/default/assets/images/user/user-29.jpg",
                message: action.newMes,
                message_time: '7:45',
                className: "",
                id: 6,
            }
            this._state.MessagePage.MessageDialogsItems.push(newMessage)
        } else if (action.type === UPDATE_MESSAGE) {
            this._state.MessagePage.updateWordInMessagePage = action.newWords;
        }
    },
}
export const addPostActionCreator = (post: string) =>{
    return {type: 'ADD_POST', newEl: post}
}
export const updatePostInProfileActionCreator = (updateWords: string) => {
    return {type: 'UPDATE_POST', newWords: updateWords}
}
export const addMessageActionCreator = (message: string) =>{
    return {type: 'ADD_MESSAGE', newMes: message}
}
export const updateMessageInProfileActionCreator = (updateWords: string) => {
    return {type: 'UPDATE_MESSAGE', newWords: updateWords}
}

const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE_POST';

const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE = 'UPDATE_MESSAGE';

export default store

