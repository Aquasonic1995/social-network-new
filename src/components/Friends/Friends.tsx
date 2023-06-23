import React from 'react';
import classes from './Friends.module.css'
import CardFriend from "./CardFriend/CardFriend";

type cardFriendType = {
    cardAvatar: string,
    cardBg: string,
    user_name: string,
    friendStatus: boolean,
    id: string,
    sendMessageStatus: boolean,
}
export type cardFriendsPropsType = {
    cardFriends: Array<cardFriendType>
    addFriend: (id: string) => void
    delFriend: (id: string) => void
    openModal: (id: string) => void
    closeModal: (id: string) => void
}
const Friends = (props: cardFriendsPropsType) => {
    let Cards = props.cardFriends.map(item => <CardFriend key={item.id} addFriend={props.addFriend}
                                                          delFriend={props.delFriend}
                                                          avatarSrc={item.cardAvatar}
                                                          friendStatus={item.friendStatus}
                                                          bgSrc={item.cardBg}
                                                          user_name={item.user_name} id={item.id}
                                                          openModal={props.openModal}
                                                          closeModal={props.closeModal}
                                                          sendMessageStatus={item.sendMessageStatus}
    />)
    return (
        <div className={classes.list}>
            <div className={classes.row}>
                {Cards}
            </div>
        </div>
    )
}
export default Friends