import ReturnUserIsNotLogin from "@/components/profile/ReturnUserIsNotLogin";
import WriteFormPage from "@/components/write/write-form";

const WritePage = () => {
  return (
    <ReturnUserIsNotLogin>
      <WriteFormPage />
    </ReturnUserIsNotLogin>
  );
};

export default WritePage;
