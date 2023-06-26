import {v1} from 'uuid'

const ADD_FRIEND = 'ADD_FRIEND';
const DELETE_FRIEND = 'DELETE_FRIEND';
const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL'
const SET_USERS = 'SET_USERS'
export const SET_TOTAL_USER_COUNT = 'SET_TOTAL_USER_COUNT'
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
export const SET_TOGGLE_PRELOADER = 'SET_TOGGLE_PRELOADER'
let initialState = {
    cardFriends: [] as Array<UserStateType>,
    currentPageNumber: 1,
    pageSize: 21,
    totalUserCount: 30,
    preloader: false
}
export type UserStateType = {
    id: number
    name: string
    status: string
    uniqueUrlName: string
    photos: {
        small: string
        large: string
    }
    followed: boolean
}
type InitialStateInFriendPageType = typeof initialState
type ActionFriendPageReducerType =
    AddFriendAT
    | DelFriendAT
    | OpenModalInFriendAT
    | CloseModalInFriendAT
    | SetUsersAT
    | SetCurrentPageNumberAT
    | SetTotalUserCountAT
    | setTogglePreloaderAT
type AddFriendAT = {
    type: 'ADD_FRIEND', uId: number
}
type DelFriendAT = {
    type: 'DELETE_FRIEND', uId: number
}
type OpenModalInFriendAT = {
    type: 'OPEN_MODAL', uId: number
}
type CloseModalInFriendAT = {
    type: 'CLOSE_MODAL', uId: number
}
type SetUsersAT = {
    type: 'SET_USERS', users: Array<UserStateType>
}
type SetCurrentPageNumberAT = {
    type: 'SET_CURRENT_PAGE',
    currentPageNumber: number
}
type SetTotalUserCountAT = {
    type: 'SET_TOTAL_USER_COUNT',
    totalUserCount: number
}
type setTogglePreloaderAT = {
    type: 'SET_TOGGLE_PRELOADER'
    preloader: boolean
}
const friendsPageReducer = (state = initialState, action: ActionFriendPageReducerType): InitialStateInFriendPageType => {
    switch (action.type) {
        case ADD_FRIEND: {
            return {
                ...state,
                cardFriends: state.cardFriends.map(s => s.id === action.uId ? {...s, followed: !s.followed} : s)
            }
        }
        case DELETE_FRIEND: {
            return {
                ...state,
                cardFriends: state.cardFriends.map(s => s.id === action.uId ? {...s, followed: !s.followed} : s)
            }
        }
        case OPEN_MODAL: {
            return {
                ...state
            }
        }
        case CLOSE_MODAL: {
            return {
                ...state
            }
        }
        case SET_USERS: {
            return {...state, cardFriends: [...action.users]}
        }
        case SET_CURRENT_PAGE: {
            return {
                ...state,
                currentPageNumber: action.currentPageNumber
            }
        }
        case SET_TOTAL_USER_COUNT: {
            return {
                ...state,
                totalUserCount: action.totalUserCount
            }
        }
        case SET_TOGGLE_PRELOADER: {
            return {
                ...state,
                preloader: action.preloader
            }
        }
        default:
            return state
    }
}
export const addFriendAC = (uId: number): AddFriendAT => {
    return {type: ADD_FRIEND, uId: uId}
}
export const delFriendAC = (uId: number): DelFriendAT => {
    return {type: DELETE_FRIEND, uId: uId}
}
export const openModalInFriendAC = (uId: number): OpenModalInFriendAT => {
    return {type: OPEN_MODAL, uId: uId}
}
export const closeModalInFriendAC = (uId: number): CloseModalInFriendAT => {
    return {type: CLOSE_MODAL, uId: uId}
}
export const setUsersAC = (users: Array<UserStateType>): SetUsersAT => {
    return {type: SET_USERS, users: users}
}
export const setCurrentPageNumberAC = (currentPageNumber: number): SetCurrentPageNumberAT => {
    return {
        type: SET_CURRENT_PAGE,
        currentPageNumber: currentPageNumber
    }
}
export const setTotalUserCountAC = (totalUserCount: number): SetTotalUserCountAT => {
    return {
        type: SET_TOTAL_USER_COUNT,
        totalUserCount: totalUserCount
    }
}
export const setTogglePreloaderAC = (loader: boolean): setTogglePreloaderAT => {
    return {
        type: SET_TOGGLE_PRELOADER,
        preloader: loader
    }
}

export default friendsPageReducer