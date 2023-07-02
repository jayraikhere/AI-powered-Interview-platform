import React from 'react'

const User = (props) => {
    return (
        <div style={{ width: "40vw", height: "40vh", background: "grey", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
            {props.on ? <div style={{ background: "pink", height: "220px", width: "220px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "40px" }}>
                <div style={{ background: "purple", height: "200px", width: "200px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "40px" }}>
                    {props.user}
                </div>
            </div> :
                <div style={{ background: "purple", height: "200px", width: "200px", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "40px" }}>
                    {props.user}
                </div>
            }
        </div>
    )
}

export default User