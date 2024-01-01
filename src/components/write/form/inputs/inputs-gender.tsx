import { inputsState } from "@/app/state/state";
import { supabase } from "@/lib/supabase-config";
import { getUser } from "@/utils/auth";
import { ChangeEvent, useEffect, useState } from "react";
import { useRecoilState } from "recoil";

export const InputGender = () => {
  const [inputs, setInputs] = useRecoilState(inputsState);
  const handleChangeRadio = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(inputs.gender);
    setInputs({
      ...inputs,
      gender: e.target.id,
    });
  };

  return (
    <div className="flex flex-col gap-[10px]">
      <label htmlFor="gender">
        성별
        <span className="text-red-500 text-xs pl-[10px]">* 필수</span>
      </label>
      <div className="flex gap-[20px]">
        <div className="flex gap-[10px]">
          <input
            type="radio"
            name="gender"
            id="woman"
            value={inputs.gender}
            checked={inputs.gender === "Woman"}
            onChange={handleChangeRadio}
          />
          <label htmlFor="woman">여자</label>
        </div>
        <div className="flex gap-[10px]">
          <input
            type="radio"
            name="gender"
            id="man"
            value={inputs.gender}
            checked={inputs.gender === "Man"}
            onChange={handleChangeRadio}
          />
          <label htmlFor="man">남자</label>
        </div>
      </div>
    </div>
  );
};
