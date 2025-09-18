import CommentIcon from '@/assets/icons/comment.svg'
import FavoriteIcon from '@/assets/icons/favorite.svg'
import InstagramIcon from '@/assets/icons/socials/instagram.svg'

export type IconTypes = 'comment' | 'favorite' | 'instagram'

interface IconProps {
  type: IconTypes
  color?: string
  className?: string
}

function renderIcon(icon: IconTypes) {
  switch (icon) {
    case 'comment':
      return <CommentIcon />
    case 'favorite':
      return <FavoriteIcon />
    case 'instagram':
      return <InstagramIcon />
  }
}

export default function Icon({
  type,
  color = 'text-gray-900',
  className,
}: IconProps) {
  return (
    <span
      className={`inline-block fill-current align-middle [&_*]:fill-current ${color} ${className}`}
    >
      {renderIcon(type)}
    </span>
  )
}
