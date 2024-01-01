// "use client";
import * as React from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import { Typography } from "@mui/material";
import { Jua } from "next/font/google";
const jua = Jua({ weight: "400", subsets: ["latin"] });

export default function SelectGender({ gender, setGender, textAlign }: any) {
  const genderHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setGender(e.target.value);
  };

  return (
    <FormControl>
      <FormLabel id="demo-row-radio-buttons-group-label">
        <p className={`${jua.className} ${textAlign} text-xl`}>성별</p>
      </FormLabel>
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
          label={
            <Typography component="div">
              <p className={jua.className}>남성</p>
            </Typography>
          }
        />
        <FormControlLabel
          value="woman"
          control={<Radio color="default" />}
          label={
            <Typography component="div">
              <p className={jua.className}>여성</p>
            </Typography>
          }
        />
      </RadioGroup>
    </FormControl>
  );
}
