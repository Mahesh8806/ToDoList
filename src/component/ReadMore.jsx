import React from "react";
function ReadMore(props){
    return <p>
        {props.content.substring(60,)}
    </p>;
}

export default ReadMore;