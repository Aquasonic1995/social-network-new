import React from "react";
import classes from "./Post.module.css"
import {NavLink} from "react-router-dom";
import {messageType} from "../../../../Redux/store";

const Post = (props:messageType) => {
  return<>
  <div className={classes.item}>
    <div className={classes.post_header}>
      <NavLink className={classes.post_header_link} to='/'><img src={props.src} alt="avatar"/>
        <div className={classes.post_description}>
            <span
                className={classes.user_name}>{props.user_name}</span><span
            className={classes.small_text}>10 Min Ago</span>
        </div>
      </NavLink>
    </div>
    <p>{props.message}</p>
    <span>{props.countLikes}</span>
  </div>
  </>
}
export default Post