import React from "react";
import Friend from "./Friends";
import PropTypes from "prop-types";

const Friendslist = (props) => {

    const mappedFriends = props.friends.map((friend, i) => {
        return (
            <Friend name={friend.name} age={friend.age} pets={friend.pets} key={friend.name + i} />
        )
    })
    return(
       <div>
           { mappedFriends }
       </div>
    );
}
Friendslist.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.object)
}

export default Friendslist;
