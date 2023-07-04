import {connect} from "react-redux";
import {useEffect} from "react";
import {Friends} from "./Friends";
import {
    addUserTC,
    delUserTC,
    getUsersTC,
    setCurrentPageNumberAC,
    setTotalUserCountAC,
    UserStateType,
} from "../../Redux/FriendsPageReducer";
import {AppDispatch, AppStateType} from "../../Redux/redux-store";
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
    setCurrentPage: (currentPageNumber: number) => void;
    setTotalUserCount: (totalUserCount: number) => void;
    getUsers: (currentPageNumber: number, pageSize: number) => void
};

type FriendsContainerType = mapStateToPropsType & mapDispatchToPropsType
const FriendsContainer = (props: FriendsContainerType) => {
    useEffect(() => {
        props.getUsers(props.currentPageNumber, props.pageSize)
    }, [props.currentPageNumber, props.pageSize, props.setTotalUserCount]);

    const onChangedPage = (pageNumber: number) => {
        props.getUsers(pageNumber, props.pageSize)
    }

    return (<>{props.preloader ? <Preloader/> : null}
            <Friends
                cardFriends={props.cardFriends}
                currentPageNumber={props.currentPageNumber}
                pageSize={props.pageSize}
                totalUserCount={props.totalUserCount}
                addFriend={props.addFriend}
                delFriend={props.delFriend}
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

const mapDispatchToProps = (dispatch: AppDispatch): mapDispatchToPropsType => {
    return {
        addFriend: (id: number) => {
            dispatch(addUserTC(id));
        },
            delFriend: (id: number) => {
        dispatch(delUserTC(id))
    },
        setCurrentPage: (currentPageNumber: number) => {
        dispatch(setCurrentPageNumberAC(currentPageNumber));
    },
        setTotalUserCount: (totalUserCount: number) => {
        dispatch(setTotalUserCountAC(totalUserCount));
    },
        getUsers: (currentPageNumber: number, pageSize: number) => {
        dispatch((getUsersTC(currentPageNumber, pageSize)))
    },
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(FriendsContainer);
