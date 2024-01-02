import { getEventByPostDelete } from "@/api/write";
import Link from "next/link";
import { useRouter } from "next/navigation";

const PostEditAndDelete = ({ postId }: { postId: number }) => {
  const router = useRouter();

  const handleClick = async (path: string) => {
    if (path === "delete") {
      const answer = window.confirm("정말 삭제하시겠습니까?");
      if (!answer) return;
      const data = await getEventByPostDelete("id", postId);
      console.log(data);
      if (data) {
        alert("삭제 되었습니다.");
        router.push("/posts");
      }
    }
  };

  return (
    <div className="flex flex-wrap justify-end gap-4">
      <button className="w-[150px] h-[45px] text-white bg-orange">
        <Link href={`/write/${postId}`}>수정</Link>
      </button>
      <button
        className="w-[150px] h-[45px] text-white bg-orange"
        onClick={() => handleClick("delete")}
      >
        삭제
      </button>
    </div>
  );
};

export default PostEditAndDelete;
