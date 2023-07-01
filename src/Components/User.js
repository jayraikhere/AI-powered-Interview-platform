import React from 'react'

const User = (props) => {
    return (
        <div style={{ width: "40vw", height: "70vh", background: "grey", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            <div style={{ background: "pink", height: "200px", width: "200px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "40px" }}>
                {props.user}
            </div>
        </div>
    )
}

export default User