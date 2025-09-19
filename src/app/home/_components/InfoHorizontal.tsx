interface IProps {
  imgUrl?: string
  mainText: string
  subText: string
  position?: 'light' | 'left'
}

export default function InfoHorizontal(props: IProps) {
  const {
    imgUrl = 'https://picsum.photos/300/450',
    mainText,
    subText,
    position = 'light',
  } = props

  return (
    <div className="flex w-full items-center justify-between">
      {position === 'left' && (
        <img src={imgUrl} className="h-[300px] w-[450px] object-cover" />
      )}

      <div className="flex w-[480px] flex-col justify-start gap-2">
        <p className="text-title2 w-full text-left font-bold text-gray-900">
          {mainText}
        </p>
        <p className="text-title3 font-regular w-full text-left text-gray-600">
          {subText}
        </p>
      </div>
      {position === 'light' && (
        <img src={imgUrl} className="h-[300px] w-[450px] object-cover" />
      )}
    </div>
  )
}
