import CommentIcon from "@/assets/icons/comment.svg";
import FavoriteIcon from "@/assets/icons/favorite.svg";

export type IconTypes = "comment" | "favorite";

interface IconProps {
  type: IconTypes;
  size?: string;
  color?: string;
}

function renderIcon(icon: IconTypes) {
  switch (icon) {
    case "comment":
      return <CommentIcon />;
    case "favorite":
      return <FavoriteIcon />;
  }
}

export default function Icon({
  type,
  size = "h-6",
  color = "text-gray-900",
}: IconProps) {
  return (
    <span
      className={`inline-block align-middle fill-current [&_*]:fill-current ${size} ${color}`}
    >
      {renderIcon(type)}
    </span>
  );
}
