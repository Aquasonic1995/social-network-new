import React from 'react';
import classes from './Friends.module.css'
import CardFriend from "./CardFriend/CardFriend";
import {UserStateType} from "../../Redux/FriendsPageReducer";
import {v1} from "uuid";
import axios from "axios";

export type cardFriendsPropsType = {
    cardFriends: Array<UserStateType>
    addFriend: (id: string) => void
    delFriend: (id: string) => void
    openModal: (id: string) => void
    closeModal: (id: string) => void
    setUSer: (user: Array<UserStateType>) => void
}
const Friends = (props: cardFriendsPropsType) => {
    if (props.cardFriends.length === 0) {
        axios.get('https://social-network.samuraijs.com/api/1.0/users')
            .then((response) => {
                // обработка успешного запроса
                props.setUSer(response.data.items)
            })
        //
        //         {
        //             cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-1.jpg',
        //             cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-1.jpg',
        //             user_name: 'Jose Marroquin',
        //             id: v1(),
        //             friendStatus: true,
        //             sendMessageStatus: false
        //         },
        //         {
        //             cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-2.jpg',
        //             cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-2.jpg',
        //             user_name: 'Myrtle Lewis',
        //             id: v1(),
        //             friendStatus: true,
        //             sendMessageStatus: false
        //         },
        //         {
        //             cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-3.jpg',
        //             cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-3.jpg',
        //             user_name: 'Howard Tam',
        //             id: v1(),
        //             friendStatus: false,
        //             sendMessageStatus: false
        //         },
        //         {
        //             cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-4.jpg',
        //             cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-4.jpg',
        //             user_name: 'Kimberly Blum',
        //             id: v1(),
        //             friendStatus: true,
        //             sendMessageStatus: false
        //         },
        //         {
        //             cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-5.jpg',
        //             cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-5.jpg',
        //             user_name: 'Mary Mercado',
        //             id: v1(),
        //             friendStatus: false,
        //             sendMessageStatus: false
        //         },
        //         {
        //             cardAvatar: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-6.jpg',
        //             cardBg: 'https://templates.envytheme.com/zust/default/assets/images/friends/friends-bg-6.jpg',
        //             user_name: 'Robert Ward',
        //             id: v1(),
        //             friendStatus: false,
        //             sendMessageStatus: false
        //         }
        //     ])
        // }
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
}
export default Friends