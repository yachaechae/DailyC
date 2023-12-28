import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

export default function SelectGender({ gender, setGender }: any) {
  const genderHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">성별</FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={gender}
        onChange={genderHandler}
      >
        <FormControlLabel
          value="man"
          control={<Radio color="default" />}
          label="Man"
        />
        <FormControlLabel
          value="woman"
          control={<Radio color="default" />}
          label="Woman"
        />
      </RadioGroup>
    </FormControl>
  );
}
