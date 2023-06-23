import chatListAddMessageReducer , {
    ADD_MESSAGE,
    initialState,
    UPDATE_MESSAGE
} from "./DialogsPageAddMessageReducer";

test('check add new message in dialogs', () => {
    const action = {
        type: ADD_MESSAGE,
        newMes: 'hello',
    }
    const endState = chatListAddMessageReducer(initialState, action)
    expect(endState.MessageDialogsItems.length).toBe(5)
    expect(endState.MessageDialogsItems[4].message).toBe('hello')
})
test('check update word in dialogs', () => {
    const action = {
        type: UPDATE_MESSAGE,
        newWords: 'h',
    }
    const endState = chatListAddMessageReducer(initialState, action)
    expect(endState.updateWordInMessagePage).toBe('h')
})