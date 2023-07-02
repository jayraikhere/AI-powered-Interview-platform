import React, { useEffect, useState } from 'react'
import { getScore } from '../Api/index'

const EndInterview = () => {
    const [name,setName]=useState();
    const [i_score,setIScore]=useState(0);
    const [a_score,setAScore]=useState(0);
    const [c_score,setCScore]=useState(0);
    useEffect(() => {
        getScore().then(
            (data)=>{
                console.log(data);
                setName(data.name);
                setIScore(data.intro_score);
                setAScore(data.approach_score);
                setCScore(data.coding_score);
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
                <p>Thank you for giving the interview <b style={{color:"green"}}>{name}</b>,<br/> Your Intro score is <b style={{color:"blue"}}>{i_score}/20</b><br/>Your Coding score is <b style={{color:"blue"}}>{a_score+c_score}/100
                
                </b><br/>You can close the tab.</p>
            </div>
        </div>
    )
}

export default EndInterview