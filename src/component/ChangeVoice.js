import { Box } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Button from "@mui/material/Button";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import GraphicEqIcon from "@mui/icons-material/GraphicEq";

const ChangeVoice = ({
  voices,
  handleVoiceChange,
  speakText,
  selectedVoice,
}) => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <FormControl
        sx={{ m: 1, minWidth: 200, backgroundColor: "white" }}
        size="small"
      >
        <InputLabel id="demo-select-small-label">Select Voice</InputLabel>

        <Select onChange={handleVoiceChange} disabled={!voices.length}>
          <MenuItem value="">
            <em>Select a voice</em>
          </MenuItem>
          {voices.map((voice) => (
            <MenuItem key={voice.name} value={voice.name}>
              {voice.name}
            </MenuItem>
          ))}
        </Select>
        <Button
          onClick={speakText}
          disabled={!selectedVoice || !voices.length}
          variant="contained"
          color="success"
        >
          <GraphicEqIcon /> Speak
        </Button>
      </FormControl>
    </Box>
  );
};

export default ChangeVoice;
