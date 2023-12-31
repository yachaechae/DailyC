import { inputsState } from "@/app/state/state";
import { ChangeEvent } from "react";
import { useRecoilState } from "recoil";

export const InputTitle = () => {
  const [inputs, setInputs] = useRecoilState(inputsState);
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="flex flex-col gap-[10px]">
      <label htmlFor="title">
        제목
        <span className="text-red-500 text-xs pl-[10px]">* 필수</span>
      </label>
      <input
        onChange={handleChange}
        type="text"
        id="title"
        name="title"
        placeholder="제목을 입력해주세요"
        required
        value={inputs.title}
        className="input w-full h-[40px] bg-gray-100 rounded px-2"
      />
    </div>
  );
};
