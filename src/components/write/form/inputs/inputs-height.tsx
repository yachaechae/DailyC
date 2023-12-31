import { inputsState } from "@/app/state/state";
import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";

export const InputHeight = () => {
  const [inputs, setInputs] = useRecoilState(inputsState);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col gap-[10px]">
      <label htmlFor="height">
        키<span className="text-red-500 text-xs pl-[10px]">* 필수</span>
      </label>
      <div className="flex flex-col">
        <input
          onChange={handleChange}
          type="number"
          id="height"
          name="height"
          placeholder="키를 입력해주세요(ex:170)"
          required
          value={inputs.height}
          className="input w-full h-[40px] bg-gray-100 rounded px-2"
        />
      </div>
    </div>
  );
};
