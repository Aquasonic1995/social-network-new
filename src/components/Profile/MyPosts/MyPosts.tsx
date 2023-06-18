import React from "react";
import s from "./MyPosts.module.css"
import Post from "./Post/Post"

const MyPost = () => {
    return <>
        <div className={s.MyPost}>
            <div className={s.post}>
                <textarea name="message"  className={s.textarea}  placeholder="напишите"></textarea>
                <button className={s.btn}>Add Post</button>
            </div>
            <Post message="hello world" countLikes={5}  />
        </div>
    </>
}
export default MyPost