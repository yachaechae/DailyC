import { inputsState } from "@/app/state/state";
import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";

export const InputGender = () => {
  const [inputs, setInputs] = useRecoilState(inputsState);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col gap-[10px]">
      <label htmlFor="woman">
        성별
        <span className="text-red-500 text-xs pl-[10px]">* 필수</span>
      </label>
      <div className="flex gap-[20px]">
        <div className="flex gap-[10px]">
          <input
            type="radio"
            name="gender"
            id="woman"
            value="woman"
            checked={inputs.gender === "woman"}
            onChange={handleChange}
          />
          <label htmlFor="woman">여자</label>
        </div>
        <div className="flex gap-[10px]">
          <input
            type="radio"
            name="gender"
            id="man"
            value="man"
            checked={inputs.gender === "man"}
            onChange={handleChange}
          />
          <label htmlFor="man">남자</label>
        </div>
      </div>
    </div>
  );
};
