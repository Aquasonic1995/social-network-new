import {connect} from "react-redux";
import Friends from "./Friends";
import {addFriendAC, closeModalInFriendAC, delFriendAC, openModalInFriendAC} from "../../Redux/FriendsPageReducer";

const mapStateToProps = (state: any) => {
    return {
        cardFriends: state.FriendsPage.cardFriends
    }
}
const mapDispatchToProps = (dispatch: any) => {
    debugger
    return {
        addFriend: (id: string) => {
            dispatch(addFriendAC(id))
        },
        delFriend: (id: string) => {
            dispatch(delFriendAC(id))
        },
        openModal: (id: string) => {
            dispatch(openModalInFriendAC(id))
        },
        closeModal: (id: string) => {
            dispatch(closeModalInFriendAC(id))
        }
    }

}
const FriendsContainer = connect(mapStateToProps, mapDispatchToProps)(Friends);
export default FriendsContainer