import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Typography } from "@mui/material";
import { Jua } from "next/font/google";
const jua = Jua({ weight: "400", subsets: ["latin"] });

export default function SelectGender({ gender, setGender, userProfile }: any) {
  const genderHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };

  const profileGender = userProfile.user_metadata?.gender;
  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">
        <p className={`${jua.className} text-center text-xl`}>성별</p>
      </FormLabel>
      <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        value={gender}
        onChange={genderHandler}
      >
        <FormControlLabel
          value="남성"
          control={<Radio color="default" />}
          label={
            <Typography>
              <p className={jua.className}>남성</p>
            </Typography>
          }
        />
        <FormControlLabel
          value="여성"
          control={<Radio color="default" />}
          label={
            <Typography>
              <p className={jua.className}>여성</p>
            </Typography>
          }
        />
      </RadioGroup>
    </FormControl>
  );
}
