import React from "react";

import { Box } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

import Button from "@mui/material/Button";
import MicIcon from "@mui/icons-material/Mic";
import MicOffIcon from "@mui/icons-material/MicOff";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

const SpeechToText = ({
  listening,
  transcript,
  microphoneOn,
  microphoneOff,
  resetParagraph,
}) => {
  const Microphone = () => {
    return (
      <Button
        variant="contained"
        color={!listening ? "success" : "error"}
        onClick={!listening ? microphoneOn : microphoneOff}
      >
        {!listening ? <MicIcon /> : <MicOffIcon />}
      </Button>
    );
  };

  return (
    <Box
      sx={{
        "& .MuiTextField-root": { m: 2 },
      }}
    >
      <FormControl
        variant="filled"
        sx={{ m: 1, backgroundColor: "white", minWidth: 500 }}
      >
        <TextField
          sx={{ padding: "20px" }}
          id="voice-input"
          label="Press the microphone button and start speaking."
          multiline
          rows={8}
          defaultValue="Default Value"
          variant="standard"
          value={transcript}
        />

        {/* Box for button  */}
        <Box
          sx={{
            textAlign: "end",
            mr: "20px",
          }}
        >
          <Button>
            <Microphone />
          </Button>
          <Button
            onClick={resetParagraph}
            variant="contained"
            color="secondary"
          >
            <RestartAltIcon />
          </Button>
        </Box>
      </FormControl>
    </Box>
  );
};

export default SpeechToText;
