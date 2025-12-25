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
    <div className="flex w-full flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
      {position === 'left' && (
        <img
          src={imgUrl}
          className="w-full max-w-[70%] md:max-w-[40%] h-auto object-cover flex-shrink-0"
        />
      )}

      {position === 'light' && (
        <img
          src={imgUrl}
          className="w-full max-w-[70%] md:max-w-[40%]  md:h-auto object-cover flex-shrink-0 order-1 md:order-2"
        />
      )}

      <div className={`flex w-full md:w-auto md:max-w-[40%] flex-1 flex-col justify-start gap-2 ${position === 'light' ? 'order-2 md:order-1' : ''}`}>
        <p className="md:text-title3 text-body1 w-full text-left font-bold text-gray-900">
          {mainText}
        </p>
        <p className="md:text-body1 text-body3 font-regular w-full text-left text-gray-600">
          {subText}
        </p>
      </div>
    </div>
  )
}