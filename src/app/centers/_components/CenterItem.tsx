import SocialChip from '@/components/commons/SocialChip'

interface IProps {
  id: string
  name: string
  location: string
  description: string
  imgUrl?: string
  reviewCount: string
  rating: string
}

export default function CenterItem(props: IProps) {
  const {
    id,
    name,
    location,
    description,
    imgUrl = 'https://picsum.photos/200/200',
    reviewCount,
    rating,
  } = props

  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-5">
      <img
        src={imgUrl}
        alt={name}
        className="w-full h-[150px] max-w-full md:max-w-[200px] md:h-[200px] rounded-lg object-cover flex-shrink-0"
      />

      <div className="flex w-full md:w-80 flex-col gap-3">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-end justify-start gap-2 flex-wrap">
            <p className="text-title3 text-left font-semibold text-black">
              {name}
            </p>
            <p className="text-body4 text-left text-gray-900">{location}</p>
          </div>
          <p className="text-body2 min-h-32 w-full text-left text-gray-700">
            {description}
          </p>
        </div>
        <div className="flex items-center justify-start gap-3">
          <SocialChip styleType="comment" value={reviewCount} />
          <SocialChip styleType="favorite" value={rating} />
        </div>
      </div>
    </div>
  )
}
