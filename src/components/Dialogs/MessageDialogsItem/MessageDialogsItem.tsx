import classes from "../Dialogs.module.css";
import React from "react";
import {MessageDialogsItemType} from "../../../Redux/store";

export const MessageDialogsItem = (props: MessageDialogsItemType) => {
    return (
        <div className={classes.chat}>
            <div className={classes.chat__avatar}>
                <a href="/Users/к/WebstormProjects/git/social-network/public">
                    <img
                        src={props.src}
                        alt="img"/>
                </a>
            </div>
            <div className={classes.chat__body}>
                <div className={classes.chat__message}>
                    <p>{props.message}</p>
                    <span>{props.message_time}</span>
                </div>
            </div>
        </div>
    )
}

