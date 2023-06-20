import {v1} from "uuid";
import {dispatchActionType} from "./store";

const ADD_POST = 'ADD_POST';
const UPDATE_POST = 'UPDATE_POST';

let initialState = {
    messages: [
        {
            user_name: "Julie R. Morley",
            message: 'Done rut con leo ege males. Nella quits lorem ut libero dalesman fugitive. Done rut-rum tongue leo wget dalesman. Done rut-rum tongue leo wget dalesman. Present sapien massa convallis a pellentesque nec egestas non nisi. Curabitur non nulla sit amet nisl tempus convallis quis.',
            countLikes: 5,
            src: 'https://templates.envytheme.com/zust/default/assets/images/user/user-2.jpg',
            id: v1(),
        },
        {
            user_name: "Herta Smith",
            message: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad fugiat labore nulla placeat reiciendis. A asperiores dignissimos illo libero, magnam natus, nostrum qui quibusdam rem saepe sint tempora totam voluptatibus! Ad at cum cumque doloremque ducimus eos eum exercitationem expedita id illum ipsa, ipsum iure minus nisi       odio officia quas quod recusandae saepe sunt, veritatis voluptates voluptatibus? Fugiat, laudantium',
            countLikes: 8,
            src: 'https://templates.envytheme.com/zust/default/assets/images/user/user-11.jpg',
            id: v1(),
        },
    ],
    updatePostInProfile: '',
}

const profilePageAddPostReducer = (state = initialState, action: dispatchActionType) => {
    switch (action.type) {
        case ADD_POST :
            const newPost = {
                user_name: "Julie R. Morley",
                message: action.newEl,
                countLikes: 0,
                src: 'https://templates.envytheme.com/zust/default/assets/images/user/user-16.jpg',
                id: v1(),
            }
            return {
                ...state,
                messages: [newPost, ...state.messages]
            };
        case UPDATE_POST :{
            return {
                ...state,
                updatePostInProfile: action.newWords
            };
        }

        default:
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