import classes from "../Dialogs.module.css";
import {NavLink} from "react-router-dom";
import React from "react";
import {UserDialogsItemType} from "../../../Redux/store";

export const UserDialogsItem = (props: UserDialogsItemType) => {
    return (
        <li className={classes.user__item}><NavLink to={"/dialogs/" + props.id}>
            <img className={classes.user__avatar}
                 src={props.src}
                 alt="img"/>
        </NavLink>{props.name}</li>
    )
}