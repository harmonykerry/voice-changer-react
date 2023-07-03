import "react-toastify/dist/ReactToastify.css";

import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";

import Header from "./component/Header";
import ChangeVoice from "./component/ChangeVoice";
import SpeechToText from "./component/SpeechToText";

const App = () => {
  const { transcript, resetTranscript, listening } = useSpeechRecognition();
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState("");

  //Microphone

  const microphoneOn = () => {
    SpeechRecognition.startListening({ continuous: true });
    toast.success(
      "Microphone On",
      { autoClose: 1000 },
      {
        position: toast.POSITION.TOP_RIGHT,
      }
    );
  };

  const microphoneOff = () => {
    SpeechRecognition.stopListening();
    toast.error(
      "Microphone Off",
      { autoClose: 1000 },
      {
        position: toast.POSITION.TOP_RIGHT,
      }
    );
  };

  const resetParagraph = () => {
    resetTranscript();
    toast.info(
      "Paragraph reset",
      { autoClose: 1000 },
      {
        position: toast.POSITION.TOP_RIGHT,
      }
    );
  };

  //microphone ended

  const handleVoiceChange = (event) => {
    const selectedVoice = voices.find(
      (voice) => voice.name === event.target.value
    );
    setSelectedVoice(selectedVoice);
  };

  const speakText = () => {
    if (selectedVoice && transcript) {
      const utterance = new SpeechSynthesisUtterance(transcript);
      utterance.voice = selectedVoice;
      window.speechSynthesis.speak(utterance);
    }
  };

  useEffect(() => {
    const voices = window.speechSynthesis.getVoices();
    setVoices(voices);

    const voicesChanged = () => {
      const updatedVoices = window.speechSynthesis.getVoices();
      setVoices(updatedVoices);
    };

    window.speechSynthesis.addEventListener("voiceschanged", voicesChanged);

    return () => {
      window.speechSynthesis.removeEventListener(
        "voiceschanged",
        voicesChanged
      );
    };
  }, []);
  return (
    <Box sx={{ textAlign: "center" }}>
      <Header />
      <ToastContainer /> {/* Add this line */}
      <Box sx={{ mt: "50px" }}>
        <SpeechToText
          listening={listening}
          microphoneOff={microphoneOff}
          microphoneOn={microphoneOn}
          resetParagraph={resetParagraph}
          transcript={transcript}
        />
        {!listening && (
          <ChangeVoice
            voices={voices}
            handleVoiceChange={handleVoiceChange}
            speakText={speakText}
            selectedVoice={selectedVoice}
          />
        )}
      </Box>
      <ToastContainer /> {/* Add this line */}
    </Box>
  );
};

export default App;
