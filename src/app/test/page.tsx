import Button from "@/components/commons/Button";
import CommentIcon from "../../assets/icons/comment.svg";
import Icon from "@/components/commons/Icon";

export default function Test() {
  return (
    <div className="font-sans grid items-center justify-items-center p-8 pb-20 gap-16 sm:p-20">
      <div className="bg-violet-500 text-gray-100">Test</div>

      <Button styleType="tertiary">보라색 버튼</Button>
      <Button styleType="secondary">보라색 버튼</Button>
      <Button>보라색 버튼</Button>

      <CommentIcon />
      <Icon type="comment" />

      <Icon type="favorite" color="text-violet-400"/>
    </div>
  );
}
