import React from "react";
import s from "./Post.module.css"
import ava from "../../../../img/Cat03.jpg"
type PostType ={
  message:string,
  countLikes:number
}
const Post = (props:PostType) => {
  return<>
  <div className={s.item}>
    <img src={ava} alt="ava"/>
    <p>{props.message}</p>
    <span>{props.countLikes}</span>
  </div>
  </>
}
export default Post