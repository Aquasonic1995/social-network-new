import React from "react";
import classes from "./Dialogs.module.css"
import {UserDialogsItem} from "./UserDialogsItem/UserDialogsItem";
import {MessageDialogsItem} from "./MessageDialogsItem/MessageDialogsItem";
import {MessageDialogsItemType, UserDialogsItemType} from "../../Redux/store";


type DialogsPropsType = {
    UserDialogsItems: Array<UserDialogsItemType>
    MessageDialogsItems: Array<MessageDialogsItemType>
    addMessage: (message: string) => void
    updateWordsInDialogs: (updateWordsInDialogs:string) => void
}
const Dialogs = (props: DialogsPropsType) => {
    let MessageDialogsItemsData = props.MessageDialogsItems.map((m) => <MessageDialogsItem
        src={m.src} message={m.message} message_time={m.message_time}
        id={m.id} key={m.id}/>)
    const newPostEl = React.createRef<HTMLInputElement>()
    const addMessage = (e: React.SyntheticEvent) => {
        e.preventDefault();
        let message = newPostEl.current?.value
        if (message){
            props.addMessage(message)
        }
        newPostEl.current!.value = '';
    }
    const updateWordsInDialogs = () => {
       let newDialogValue = newPostEl.current?.value;
       if (newDialogValue){
           props.updateWordsInDialogs(newDialogValue)
       }
    }
    return (<>

            <ul className={classes.user}>
                {props.UserDialogsItems.map(u => <UserDialogsItem
                    src={u.src}
                    name={u.name} id={u.id} key={u.id}/>)}
            </ul>
            {MessageDialogsItemsData}
            <div className={classes.chat__list}>
                <form className={classes.form}>
                    <div className={classes.btn__box}>
                        <button className={classes.file_attachment_btn} type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20"
                                 height="20"
                                 fill='#6B7C8F'>
                                <path
                                    d="M22.95,9.6a1,1,0,0,0-1.414,0L10.644,20.539a5,5,0,1,1-7.072-7.071L14.121,2.876a3,3,0,0,1,4.243,4.242L7.815,17.71a1.022,1.022,0,0,1-1.414,0,1,1,0,0,1,0-1.414l9.392-9.435a1,1,0,0,0-1.414-1.414L4.987,14.882a3,3,0,0,0,0,4.243,3.073,3.073,0,0,0,4.243,0L19.778,8.532a5,5,0,0,0-7.071-7.07L2.158,12.054a7,7,0,0,0,9.9,9.9L22.95,11.018A1,1,0,0,0,22.95,9.6Z"/>
                            </svg>
                        </button>
                        <button className={classes.emoji_btn} type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"
                                 width="20"
                                 height="20" fill='#6B7C8F'>
                                <path
                                    d="M12,24A12,12,0,1,1,24,12,12.013,12.013,0,0,1,12,24ZM12,2A10,10,0,1,0,22,12,10.011,10.011,0,0,0,12,2Zm5.666,13.746a1,1,0,0,0-1.33-1.494A7.508,7.508,0,0,1,12,16a7.509,7.509,0,0,1-4.334-1.746,1,1,0,0,0-1.332,1.492A9.454,9.454,0,0,0,12,18,9.454,9.454,0,0,0,17.666,15.746ZM6,10c0,1,.895,1,2,1s2,0,2-1a2,2,0,0,0-4,0Zm8,0c0,1,.895,1,2,1s2,0,2-1a2,2,0,0,0-4,0Z"/>
                            </svg>
                        </button>
                    </div>
                    <input onChange={updateWordsInDialogs}   value={newPostEl.current?.value} ref={newPostEl} type="text" className={classes.form__control} placeholder="Type your message..." />
                    <button onClick={addMessage} type="submit" className={classes.send__btn}>Send</button>
                </form>
            </div>
        </>
    )

}


export default Dialogs