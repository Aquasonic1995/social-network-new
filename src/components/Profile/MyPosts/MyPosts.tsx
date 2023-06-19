import React from "react";
import classes from "./MyPosts.module.css"
import Post from "./Post/Post"

const MyPosts = () => {
    return <>
        <div className={classes.MyPost}>
            <div className={classes.news__feed}>
                <h3 className={classes.news__feed_title}>Create New Post</h3>
                <form>
                    <div className={classes.group}>
                        <textarea name="message" className={classes.form__control} placeholder="Write something here..."/>
                    </div>
                    <ul className={classes.button__group}>
                        <li className={classes.photo__btn}>
                            <button type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20"
                                     fill="#1CCD16">
                                    <path
                                        d="M19,4h-.508L16.308,1.168A3.023,3.023,0,0,0,13.932,0H10.068A3.023,3.023,0,0,0,7.692,1.168L5.508,4H5A5.006,5.006,0,0,0,0,9V19a5.006,5.006,0,0,0,5,5H19a5.006,5.006,0,0,0,5-5V9A5.006,5.006,0,0,0,19,4ZM9.276,2.39A1.006,1.006,0,0,1,10.068,2h3.864a1.008,1.008,0,0,1,.792.39L15.966,4H8.034ZM22,19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3V9A3,3,0,0,1,5,6H19a3,3,0,0,1,3,3Z"/>
                                    <path d="M12,8a6,6,0,1,0,6,6A6.006,6.006,0,0,0,12,8Zm0,10a4,4,0,1,1,4-4A4,4,0,0,1,12,18Z"/>
                                </svg>
                                <span className={classes.text}>Photo</span>
                            </button>
                        </li>
                        <li className={classes.video__btn}>
                            <button type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20" fill="#FF3E3E">
                                    <path
                                        d="M20.494,7.968l-9.54-7A5,5,0,0,0,3,5V19a5,5,0,0,0,7.957,4.031l9.54-7a5,5,0,0,0,0-8.064Zm-1.184,6.45-9.54,7A3,3,0,0,1,5,19V5A2.948,2.948,0,0,1,6.641,2.328,3.018,3.018,0,0,1,8.006,2a2.97,2.97,0,0,1,1.764.589l9.54,7a3,3,0,0,1,0,4.836Z"/>
                                </svg>
                                <span className={classes.text}>Video</span>
                            </button>
                        </li>
                        <li className={classes.document__btn}>
                            <button type="submit">
                                <svg xmlns="http://www.w3.org/2000/svg" id="Outline" viewBox="0 0 24 24" width="20" height="20" fill="#d8e1f0">
                                    <path
                                        d="M18.656.93,6.464,13.122A4.966,4.966,0,0,0,5,16.657V18a1,1,0,0,0,1,1H7.343a4.966,4.966,0,0,0,3.535-1.464L23.07,5.344a3.125,3.125,0,0,0,0-4.414A3.194,3.194,0,0,0,18.656.93Zm3,3L9.464,16.122A3.02,3.02,0,0,1,7.343,17H7v-.343a3.02,3.02,0,0,1,.878-2.121L20.07,2.344a1.148,1.148,0,0,1,1.586,0A1.123,1.123,0,0,1,21.656,3.93Z"/>
                                    <path
                                        d="M23,8.979a1,1,0,0,0-1,1V15H18a3,3,0,0,0-3,3v4H5a3,3,0,0,1-3-3V5A3,3,0,0,1,5,2h9.042a1,1,0,0,0,0-2H5A5.006,5.006,0,0,0,0,5V19a5.006,5.006,0,0,0,5,5H16.343a4.968,4.968,0,0,0,3.536-1.464l2.656-2.658A4.968,4.968,0,0,0,24,16.343V9.979A1,1,0,0,0,23,8.979ZM18.465,21.122a2.975,2.975,0,0,1-1.465.8V18a1,1,0,0,1,1-1h3.925a3.016,3.016,0,0,1-.8,1.464Z"/>
                                </svg>
                                <span className={classes.text}>Document</span>
                            </button>
                        </li>
                        <li className={classes.post__btn}>
                            <button type="submit">Post</button>
                        </li>
                    </ul>
                </form>
            </div>
            <Post message="hello world" countLikes={5}  />
        </div>
    </>
}
export default MyPosts