import classes from "../Header/Header.module.css";
import {NavLink} from "react-router-dom";
import React from "react";


export const Authorization = (props: any) => {
    return (
        <>
            {props.isAuth ? <p>Зашел</p> : <p>Вышел</p>}
            <ul className={classes.list}>
                <li className={`${classes.item} ${classes.item_user}`}><a href="/" className={classes.link}><img
                    className={classes.image}
                    src='https://img4.goodfon.ru/original/1280x720/d/84/chingcho-chang-vostochnaia-gubki.jpg'
                    alt="аватар"/>
                </a>
                    <span className={classes.user_name}>{props.login}</span>
                </li>
                <li className={classes.item}><NavLink to="/" className={classes.link}>
                    <svg className={classes.icon} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20"
                         height="20"
                         fill='#fff'>
                        <g id="_01_align_center" data-name="01 align center">
                            <path
                                d="M15,24H9V20.487a9,9,0,0,1-2.849-1.646L3.107,20.6l-3-5.2L3.15,13.645a9.1,9.1,0,0,1,0-3.29L.107,8.6l3-5.2L6.151,5.159A9,9,0,0,1,9,3.513V0h6V3.513a9,9,0,0,1,2.849,1.646L20.893,3.4l3,5.2L20.85,10.355a9.1,9.1,0,0,1,0,3.29L23.893,15.4l-3,5.2-3.044-1.758A9,9,0,0,1,15,20.487Zm-4-2h2V18.973l.751-.194A6.984,6.984,0,0,0,16.994,16.9l.543-.553,2.623,1.515,1-1.732-2.62-1.513.206-.746a7.048,7.048,0,0,0,0-3.75l-.206-.746,2.62-1.513-1-1.732L17.537,7.649,16.994,7.1a6.984,6.984,0,0,0-3.243-1.875L13,5.027V2H11V5.027l-.751.194A6.984,6.984,0,0,0,7.006,7.1l-.543.553L3.84,6.134l-1,1.732L5.46,9.379l-.206.746a7.048,7.048,0,0,0,0,3.75l.206.746L2.84,16.134l1,1.732,2.623-1.515.543.553a6.984,6.984,0,0,0,3.243,1.875l.751.194Zm1-6a4,4,0,1,1,4-4A4,4,0,0,1,12,16Zm0-6a2,2,0,1,0,2,2A2,2,0,0,0,12,10Z"/>
                        </g>
                    </svg>
                </NavLink>
                </li>

            </ul> : <p>Вышел</p>
        </>
    )
}