import {connect} from "react-redux";
import {useEffect} from "react";
import axios from "axios";
import {Friends} from "./Friends";
import {
    addFriendAC,
    delFriendAC,
    setCurrentPageNumberAC,
    setTotalUserCountAC,
    setUsersAC,
    UserStateType,
    setTogglePreloaderAC,
} from "../../Redux/FriendsPageReducer";
import {AppStateType} from "../../Redux/redux-store";
import {Dispatch} from "redux";
import {Preloader} from "../../Preloader/Preloader";

type mapStateToPropsType = {
    cardFriends: Array<UserStateType>
    currentPageNumber: number
    pageSize: number
    totalUserCount: number
    preloader: boolean
}
type mapDispatchToPropsType = {
    addFriend: (id: number) => void;
    delFriend: (id: number) => void;
    setUser: (user: Array<UserStateType>) => void;
    setCurrentPage: (currentPageNumber: number) => void;
    setTotalUserCount: (totalUserCount: number) => void;
    setTogglePreloader: (preloader: boolean) => void
};

type FriendsContainerType = mapStateToPropsType & mapDispatchToPropsType
const FriendsContainer = (props:FriendsContainerType) => {
    useEffect(() => {
        props.setTogglePreloader(true)
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${props.currentPageNumber}&count=${props.pageSize}`
            )
            .then((response) => {
                props.setTogglePreloader(false)
                props.setUser(response.data.items);
                props.setTotalUserCount(response.data.totalCount);
            });
    }, [props.currentPageNumber, props.pageSize, props.setUser, props.setTotalUserCount]);

    const onChangedPage = (pageNumber: number) => {
        props.setCurrentPage(pageNumber);
        props.setTogglePreloader(true)
        axios
            .get(
                `https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${props.pageSize}`
            )
            .then((response) => {
                props.setTogglePreloader(true)
                props.setUser(response.data.items);
            });
    }

    return (<>{props.preloader ? <Preloader/> : null}
            <Friends
               cardFriends={props.cardFriends}
               currentPageNumber={props.currentPageNumber}
               pageSize={props.pageSize}
               totalUserCount={props.totalUserCount}
               addFriend={props.addFriend}
               delFriend={props.delFriend}
               setUser={props.setUser}
               setCurrentPage={props.setCurrentPage}
               setTotalUserCount={props.setTotalUserCount}
               onChangedPage={onChangedPage}/>
</>
);
};

const mapStateToProps = (state: AppStateType) => ({
    cardFriends: state.FriendsPage.cardFriends,
    pageSize: state.FriendsPage.pageSize,
    currentPageNumber: state.FriendsPage.currentPageNumber,
    totalUserCount: state.FriendsPage.totalUserCount,
    preloader: state.FriendsPage.preloader,
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
    addFriend: (id: number) => {
        dispatch(addFriendAC(id));
    },
    delFriend: (id: number) => {
        dispatch(delFriendAC(id));
    },
    setUser: (user: Array<UserStateType>) => {
        dispatch(setUsersAC(user));
    },
    setCurrentPage: (currentPageNumber: number) => {
        dispatch(setCurrentPageNumberAC(currentPageNumber));
    },
    setTotalUserCount: (totalUserCount: number) => {
        dispatch(setTotalUserCountAC(totalUserCount));
    },
    setTogglePreloader: (preloader: boolean) => {
        dispatch((setTogglePreloaderAC(preloader)))
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer);
