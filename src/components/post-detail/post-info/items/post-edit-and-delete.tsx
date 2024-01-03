import { getEventByPostDelete } from "@/api/write";
import Link from "next/link";
import { useRouter } from "next/navigation";

const PostEditAndDelete = ({ params }: { params: number }) => {
  console.log(params, "aaa??");
  const router = useRouter();

  const handleClick = async (path: string) => {
    if (path === "delete") {
      const answer = window.confirm("정말 삭제하시겠습니까?");
      if (!answer) return;
      const data = await getEventByPostDelete("id", params);
      if (data) {
        alert("삭제 되었습니다.");
        router.push("/posts");
      }
    }
  };

  return (
    <div className="flex flex-wrap justify-end gap-4">
      <button className="h-[45px] w-[150px] bg-orange text-white">
        <Link href={`/write/${params}`}>수정</Link>
      </button>
      <button
        className="h-[45px] w-[150px] bg-orange text-white"
        onClick={() => handleClick("delete")}
      >
        삭제
      </button>
    </div>
  );
};

export default PostEditAndDelete;
