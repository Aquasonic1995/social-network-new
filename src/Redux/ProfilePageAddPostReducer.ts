const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE_POST';

type messageType = {
    user_name: string,
    message: string
    countLike: number,
    src: string,
    id: number,
}
type MessagesType = {
    messages: Array<messageType>
    updatePostInProfile: string
}
type addPostActionType = {
    newEl: string
    type: string
    newWords: string
    newMes: string
}
const profilePageAddPostReducer = (state: MessagesType, action: addPostActionType) => {
    switch (action.type) {
        case ADD_POST :
            const newPost = {
                user_name: "Julie R. Morley",
                message: action.newEl,
                countLike: 0,
                src: 'https://templates.envytheme.com/zust/default/assets/images/user/user-16.jpg',
                id: 5,
            }
            state.messages.unshift(newPost)
            return state
        case UPDATE_POST :
            state.updatePostInProfile = action.newWords;
            return state
    }
}
export default profilePageAddPostReducer

export const addPostActionCreator = (post: string) =>{
    return {type: 'ADD_POST', newEl: post}
}
export const updatePostInProfileActionCreator = (updateWords: string) => {
    return {type: 'UPDATE_POST', newWords: updateWords}
}