import React from "react";

const Display = (props) => {
    const { userData } = props;

    return (
        <div>
            {userData.map((user) => (
                <p>{user.firstName}</p>
            ))}
        </div>
    );
};

export default Display;
