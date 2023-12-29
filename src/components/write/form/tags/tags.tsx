import {
  postDataState,
  tagItemState,
  tagListState,
  tagsState,
} from "@/app/state/state";
import { useRecoilState } from "recoil";

export const InputTags = ({ postData }: { postData: any[] | null }) => {
  const [tags, setTags] = useRecoilState(tagsState);
  const [tagItem, setTagItem] = useRecoilState(tagItemState);
  const [tagList, setTagList] = useRecoilState(tagListState);

  const toggleActive = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const selectTag = e.currentTarget.innerText;

    if (e.currentTarget.classList.contains("active")) {
      e.currentTarget.classList.remove("active");
      setTags((tag) => tag.filter((item) => item !== selectTag));
    } else {
      if (tags.length >= 5) return alert("최대 선택 태그는 5개입니다");
      e.currentTarget.classList.add("active");
      setTags([...tags, selectTag]);
    }
  };

  const onKeyPress = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (tagItem.length === 0) return alert("1글자 이상 입력하세요.");
    else if (tagList.includes(tagItem))
      return alert("동일한 태그가 존재합니다.");

    submitTagItem();
  };

  const submitTagItem = () => {
    let updatedTagList = [...tagList];
    updatedTagList.push(tagItem);
    setTagList(updatedTagList);
    setTagItem("");
  };

  const userToClass = (item: string) => {
    let userClass: boolean = false;
    if (postData !== null) {
      if (postData[0].tags.includes(item)) {
        return (userClass = true);
      }
    }

    return userClass;
  };

  return (
    <div className="flex flex-col gap-[10px]">
      <label htmlFor="tags">태그</label>
      <div className="flex flex-wrap gap-[5px]">
        {tagList.map((tag, idx) => (
          <button
            key={idx}
            type="button"
            onClick={toggleActive}
            className={
              userToClass(tag) ? "active writeTagsBtn" : "writeTagsBtn"
            }
          >
            {tag}
          </button>
        ))}
        <div className="flex gap-[5px]">
          <input
            type="text"
            id="tags"
            name="tags"
            placeholder="원하는 태그를 추가해보세요"
            onChange={(e) => setTagItem(e.target.value)}
            value={tagItem}
            className="input rounded px-2"
          />
          <button
            type="button"
            onClick={onKeyPress}
            className="writeTagsBtnPlus"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
