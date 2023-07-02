import React, { useEffect, useState } from 'react'
import { getScore } from '../Api/index'

const EndInterview = () => {
    const [name,setName]=useState();
    const [score,setScore]=useState(0);
    useEffect(() => {
        getScore().then(
            (data)=>{
                console.log(data);
                setName(data.name);
                setScore(data.score);
            }
        ).catch((e) => console.log(e));
    }, );
    return (
        <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <div style={{
                height: "90vh", width: "90vw", display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize:"45px"
            }}>
                <p>Thank you for giving the interview <b style={{color:"green"}}>{name}</b>, Your performance score is <b style={{color:"blue"}}>{score}</b>/100<br/>You can close the tab.</p>
            </div>
        </div>
    )
}

export default EndInterview