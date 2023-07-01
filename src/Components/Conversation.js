import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import SpeechRecognition, { useSpeechRecognition } from "react-speech-recognition";
import User from "./User"

function Conversation(props) {

    const [mic, setmic] = useState(false)
    const [allowCoding, setallowCoding] = useState(false)
    const [aiText, setaiText] = useState(null)
    const [utterance, setUtterance] = useState(null);
    const [userText, setuserText] = useState(null);

    const { transcript, listening, resetTranscript } = useSpeechRecognition();
    const handleAudioSubmit = (e) => {
      e.preventDefault();
      alert(e.target.text.value);
    };

    useEffect(() => {
        setuserText(transcript);
        // console.log(userText);
      }, [transcript]);

    useEffect(() => {
        if(mic){
            SpeechRecognition.startListening({ continuous: true, onresult : (event) => {
                // console.log(event.results[event.results.length -1][0].transcript);
              }, });
        console.log("Now listening...");
    }
        else{
          SpeechRecognition.stopListening();
          console.log("Stopped Listening");
          
        };
      }, [mic]);

    useEffect(() => {
        // const synth = window.speechSynthesis;
        const u = new SpeechSynthesisUtterance(aiText);
        setUtterance(u);

        //   return () => {
        //     synth.cancel();
        //   };
    }, [aiText]);

    const setText = () => {
        setaiText("MY NAME IS ai");
        handlePlay();
    }

    const handlePlay = () => {
        const synth = window.speechSynthesis;
        synth.speak(utterance);
        return () => {
            synth.cancel();
        };
    };

    const handelMic = () => {
        setmic(!mic);
    }
    const handelCoding = () => {
        setallowCoding(true);
    }

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar component="nav">
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { sm: 'block', textAlign: 'left' } }}
                        >
                            Coding Platform
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>

                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <br /><br /><br /><br />
            <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={12}>
                    <Grid container justifyContent="center" spacing={1}>

                        <Grid item>
                            <User user={"ai"} />
                            <Button onClick={handelCoding} variant={allowCoding ? "contained" : "disabled"} sx={{ margin: "40px" }}>
                                Proceed to Coding Part
                            </Button>
                            <Button variant="contained" onClick={setText}>play</Button>
                        </Grid>
                        <Grid item>
                            <User user={"user"} />
                            <Button onClick={handelMic} variant="contained" sx={{ margin: "40px" }}>
                                {mic ? "Stop" : "Open Mic"}
                            </Button>
                        </Grid>

                    </Grid>
                </Grid>
                {/* <form onSubmit={handleAudioSubmit}>
        <textarea name="text" rows={10} cols={50} value={transcript}></textarea>
        <div className="btn-container">
          <span onClick={resetTranscript} className="btn">
            Clear Text
          </span>
          <button type="submit" className="btn">
            Print Text
          </button>
        </div>
      </form> */}
            </Grid>
        </>
    );
}



export default Conversation;