import {v1} from 'uuid'
const ADD_FRIEND = 'ADD_FRIEND';
const DELETE_FRIEND = 'DELETE_FRIEND';
const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL'
const SET_USERS = 'SET_USERS'
let initialState = {
    cardFriends: [
        {
            cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-1.jpg',
            cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-1.jpg',
            user_name: 'Jose Marroquin',
            id: v1(),
            friendStatus: true,
            sendMessageStatus: false
        },
        {
            cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-2.jpg',
            cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-2.jpg',
            user_name: 'Myrtle Lewis',
            id: v1(),
            friendStatus: false,
            sendMessageStatus: false
        },
        {
            cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-3.jpg',
            cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-3.jpg',
            user_name: 'Howard Tam',
            id: v1(),
            friendStatus: true,
            sendMessageStatus: false
        },
        {
            cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-4.jpg',
            cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-4.jpg',
            user_name: 'Kimberly Blum',
            id: v1(),
            friendStatus: false,
            sendMessageStatus: false
        },
        {
            cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-5.jpg',
            cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-5.jpg',
            user_name: 'Mary Mercado',
            id: v1(),
            friendStatus: true,
            sendMessageStatus: false
        },
        {
            cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-6.jpg',
            cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-6.jpg',
            user_name: 'Robert Ward',
            id: v1(),
            friendStatus: false,
            sendMessageStatus: false
        }
    ],
}
type userStateType = {
    cardAvatar: string,
    cardBg: string,
    user_name: string,
    id: string,
    friendStatus: boolean,
    sendMessageStatus: boolean
}
type initialStateType = {
    cardFriends: Array<userStateType>
}
type actionFriendPageReducerType = addFriendAT | delFriendAT | openModalInFriendAT | closeModalInFriendAT | setUsersAT
type addFriendAT = {
    type: 'ADD_FRIEND', uId: string
}
type delFriendAT = {
    type: 'DELETE_FRIEND', uId: string
}
type openModalInFriendAT = {
    type: 'OPEN_MODAL', uId: string
}
type closeModalInFriendAT = {
    type: 'CLOSE_MODAL', uId: string
}
type setUsersAT = {
    type: 'SET_USERS', users: userStateType
}
const friendsPageReducer = (state = initialState, action: actionFriendPageReducerType): initialStateType => {
    switch (action.type) {
        case ADD_FRIEND: {
            return {
                cardFriends: [
                    ...state.cardFriends.map((s) => {
                        if (s.id === action.uId) {
                            return {...s, friendStatus: false};
                        }
                        return s
                    }),
                ],
            }
        }
        case DELETE_FRIEND: {
            return {
                cardFriends: [
                    ...state.cardFriends.map((s) => {
                        if (s.id === action.uId) {
                            return {...s, friendStatus: true};
                        }
                        return s
                    }),
                ],
            }
        }
        case OPEN_MODAL: {
            return {
                cardFriends: [
                    ...state.cardFriends.map((c) => {
                        if (c.id === action.uId) {
                            return {...c, sendMessageStatus: true};
                        }
                        return c
                    })
                ]
            }
        }
        case CLOSE_MODAL: {
            return {
                cardFriends: [
                    ...state.cardFriends.map((c) => {
                        if (c.id === action.uId) {
                            return {...c, sendMessageStatus: false};
                        }
                        return c
                    })
                ]
            }
        }
        case SET_USERS: {
            return {...state, cardFriends: [...initialState.cardFriends, action.users]}
        }
    }


    return state
}
export const addFriendAC = (uId: string): addFriendAT => {
    return {type: ADD_FRIEND, uId: uId}
}
export const delFriendAC = (uId: string): delFriendAT => {
    return {type: DELETE_FRIEND, uId: uId}
}
export const openModalInFriendAC = (uId: string): openModalInFriendAT  => {
    return {type: OPEN_MODAL, uId: uId}
}
export const closeModalInFriendAC = (uId: string): closeModalInFriendAT => {
    return {type: CLOSE_MODAL, uId: uId}
}
export const setUsersAC = (users: userStateType): setUsersAT => {
    return {type: SET_USERS, users: users}
}
export default friendsPageReducer