import { inputsState } from "@/app/state/state";
import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";

export const InputContent = () => {
  const [inputs, setInputs] = useRecoilState(inputsState);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col gap-[10px]">
      <label htmlFor="content">
        내용
        <span className="text-red-500 text-xs pl-[10px]">* 필수</span>
      </label>
      <input
        onChange={handleChange}
        type="text"
        id="content"
        name="content"
        placeholder="내용을 입력해주세요"
        required
        value={inputs.content}
        className="input w-full h-[40px] bg-gray-100 rounded px-2"
      />
    </div>
  );
};
